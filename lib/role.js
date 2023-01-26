const db = require("../db/connection");
const cTable = require("console.table");
const Dpt = require("./dpt");
const inquirer = require("inquirer");
const menu = require("./menu");

class Role {
  constructor(id, title, salary, dpt_id) {
    (this.id = id),
      (this.title = title),
      (this.salary = salary),
      (this.dpt_id = dpt_id);
  }
  getAll() {
    const sql = `SELECT * FROM roles`;
    return db
      .promise()
      .query(sql)
      .then(([rows]) => {
        return rows;
      });
  }
  addRole() {
    const sql = `INSERT INTO roles (title, salary, dpt_id)
    VALUES ("${this.title}", "${this.salary}", "${this.dpt_id}")`;
    return db.promise().query(sql);
  }
}

function viewAllRolesMenu() {
  let role = new Role();
  role
    .getAll()
    .then((rows) => {
      console.log(".::All Roles::.");
      console.table(rows);
    })
    .then(() => manageRoleMenu());
}

function manageRoleMenu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "RoleMenu",
        message: "What else would you like to do?",
        choices: ["Add a role", "Nothing, take me to the Main Menu"],
      },
    ])
    .then(({ RoleMenu }) => {
      switch (RoleMenu) {
        case "Add a role":
          console.clear();
          addRoleMenu();
          break;
        case "Nothing, take me to the Main Menu":
          console.clear();
          menu.mainMenu();
          break;
      }
    });
}

function addRoleMenu() {
  const dpt = new Dpt.Dpt();
  dpt.getAll().then((dpts) => {
    inquirer
      .prompt([
        {
          type: "text",
          name: "newRoleName",
          message: "What is the name of this new role?",
          validate: (rolename) => {
            if (!rolename) {
              console.log("Enter a name for this role!");
            }
            return true;
          },
        },
        {
          type: "text",
          name: "roleSalary",
          message: "How much does this role make per year?",
          validate: (salary) => {
            if (!salary) {
              console.log("Enter a yearly salary for this role!");
            }
            return true;
          },
        },
        {
          type: "list",
          name: "newRoleDpt",
          message: "What department does this role belong to?",
          choices: dpts.map((d) => {
            return `${d.id}--${d.dpt_name}`;
          }),
        },
      ])
      .then(({ newRoleName, roleSalary, newRoleDpt }) => {
        let truncatedId = newRoleDpt.charAt();
        const role = new Role(null, newRoleName, roleSalary, truncatedId);
        role.addRole();
        console.clear();
        viewAllRolesMenu();
        console.table("Added role \n");
      });
  });
}

module.exports = { viewAllRolesMenu, addRoleMenu, Role };
