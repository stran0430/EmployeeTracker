const db = require("../db/connection");
const cTable = require("console.table");
const inquirer = require("inquirer");
const menu = require("./menu");

class Dpt {
  constructor(id, dpt_name) {
    (this.id = id), (this.dpt_name = dpt_name);
  }
  getAll() {
    const sql = `SELECT * FROM department`;
    return db
      .promise()
      .query(sql)
      .then(([rows]) => {
        return rows;
      });
  }

  addDpt() {
    const sql = `INSERT INTO department (dpt_name)
    VALUES ("${this.dpt_name}")`;
    return db.promise().query(sql);
  }
}

function viewDepartmentsMenu() {
  let department = new Dpt();
  department
    .getAll()
    .then((rows) => {
      console.log(`
    =================
     All Departments
    =================
    `);
      console.table(rows);
    })
    .then(() => {
      manageDptMenu();
    });
}

function manageDptMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "DptMenu",
        message: "What else would you like to do?",
        choices: ["Add a department", "Nothing, take me to the Main Menu"],
      },
    ])
    .then(({ DptMenu }) => {
      switch (DptMenu) {
        case "Add a department":
          console.clear();
          addDptMenu();
          break;
        case "Nothing, take me to the Main Menu":
          console.clear();
          menu.mainMenu();
          break;
      }
    });
}

function addDptMenu() {
  inquirer
    .prompt([
      {
        type: "text",
        name: "newDptName",
        message: "What is the name of the new department?",
        validate: (dptname) => {
          if (!dptname) {
            console.log("Enter a department name!");
          }
          return true;
        },
      },
    ])
    .then(({ newDptName }) => {
      const dpt = new Dpt(null, newDptName);
      dpt.addDpt();
      console.clear();
      viewDepartmentsMenu();
      console.table("Added department \n");
    });
}

module.exports = { viewDepartmentsMenu, addDptMenu, Dpt };
