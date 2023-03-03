const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const axios = require('axios').default
const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Middleware to enable CORS
app.use(cors());

// Create a connection pool to the database
const pool = new Pool({
  user: "danybriceno",
  password: "",
  port: 5432,
  host: "localhost",
  database: "ticketsdb",
});

const PORT = process.env.PORT || 3001;

// API endpoint to retrieve a simple JSON object
app.get("/testApi", async (req, res) => {
  const data = { users: ["userOne", "userTwo", "userThree"] };
  res.send(data);
});

// API endpoint to retrieve all tickets
app.get("/ticketInfo", async (req, res) => {
  try {
    const { rows } = await pool.query(`SELECT * FROM ticketInfo ORDER BY id ASC`);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// API endpoint to retrieve a single ticket by ID
app.get("/ticketInfo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(`SELECT * FROM ticketInfo WHERE id = ${id}`);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// API endpoint to add a new ticket
app.post("/ticketInfo", async (req, res) => {
  const { name, date, address, issue } = req.body;
  try {
    const { rows } = await pool.query(`INSERT INTO ticketInfo (name, date, address, issue) VALUES ('${name}', '${date}', '${address}', '${issue}') RETURNING *`);
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// API endpoint to update a ticket
app.put("/ticketInfo/:id", async (req, res) => {
  const { id } = req.params;
  const { name, date, address, issue } = req.body;
  console.log(name,date,address,issue)
  try {
    const { rows } = await pool.query(`UPDATE ticketInfo SET name = '${name}', date = '${date}', address = '${address}', issue = '${issue}' WHERE id = ${id} RETURNING *`);
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// API endpoint to delete a ticket by ID
app.delete("/ticketInfo/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(`DELETE FROM ticketInfo WHERE id = ${id} RETURNING *`);
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});