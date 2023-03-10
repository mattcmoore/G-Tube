# G-Tube
G-Tube is a YouTube clone that allows users to browse and watch videos without the need for a user login. It is built using postgreSQL, Express.js, Node.js, React, fontawesome, pg, react-router-dom, luxon, flickity, tippyjs, and react-carousel.
## Installation
To install G-Tube on your local machine, you will need to have Node.js and Psql installed. Then, follow these steps:
1. Clone this repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Run npm install to install all necessary dependencies.
4. Create a .env file in the root directory of the project with the following environment variables:
```
PORT=<port-number>
DATABASE_URL=<database-url>
```
5. Run npm run db-init to create the necessary tables in your postgreSQL database.
6. Run npm run seed to seed the database with sample data.
7. Run npm start to start the server and launch the application in your browser .

## Usage
Once you have G-Tube running, you can use it to browse and watch videos. The application has a homepage with a selection of popular videos, as well as a search function that allows you to find videos by keyword.

Clicking on a video will take you to the video player page, where you can watch the video and view its details, such as its title, description, and upload date.

## Dependencies

G-Tube uses the following dependencies:

- postgreSQL
- Express.js
- Node.js
- React
- fontawesome
- pg
- react-router-dom
- luxon
- flickity
- tippyjs
- react-carousel

## Contributing

We welcome contributions from anyone who is interested in improving G-Tube. If you would like to contribute, please fork this repository and submit a pull request with your changes.

## License

G-Tube is licensed under the MIT license. See LICENSE for more details.



