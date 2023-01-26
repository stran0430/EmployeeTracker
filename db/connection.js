const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "fiona1170",
    database: "employee_tracker",
  },
  console.log("Connected to Employee Tracking database.")
);

module.exports = db;
