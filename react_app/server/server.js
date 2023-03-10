const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//starting this don't not to forget to migrate your table.sql
//node server.js
//dont forget to change your username

// Middleware to parse JSON data
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// Create a connection pool to the database

// const pool = new Pool({
//   user: "fatbo",
//   password: "",
//   port: 5432,
//   host: "localhost",
//   database: "youtube",
// });

const connectionString = process.env.DATABASE_URL

const pool = new Pool({
  connectionString,
})

const PORT = process.env.PORT || 3001;

// API endpoint to retrieve a simple JSON object
app.get("/testApi", async (req, res) => {
  const data = { users: ["userOne", "userTwo", "userThree"] };
  res.send(data);
});

// API endpoint to retrieve all Users
app.get("/Users", async (req, res) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM users`);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
//API endpoint to retrieve all comments
app.get("/Comments", async (req, res) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM comments`);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

app.get("/CommentsAll", async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM comments JOIN users ON comments.user_id = users.id`
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// API endpoint to retrieve a single User by ID
app.get("/Users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(`SELECT * FROM users WHERE id = ${id}`);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
//API endpoint to retreieve single comment
app.get("/Comments/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(
      `SELECT * FROM comments WHERE id = ${id}`
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
//API endpoint to retrieve single video
app.get("/Videos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(`SELECT * FROM videos JOIN users ON videos.user_id = users.id WHERE videos.id = ${id};`);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

//API endpoint to retrieve all videos
app.get("/Videos", async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM videos JOIN users ON videos.user_id = users.id`
    );
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
