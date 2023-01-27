const mysql = require("mysql2");
require("dotenv").config();

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: process.env.PASSWORD,
    database: "employee_tracker",
  },
  console.log("Connected to Employee Tracking database.")
);

module.exports = db;
