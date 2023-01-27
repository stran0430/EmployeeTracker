const inquirer = require("inquirer");
const figlet = require("figlet");
const { viewDepartmentsMenu, addDptMenu, deleteDepartment } = require("./dpt");
const { viewAllRolesMenu, addRoleMenu, deleteRole } = require("./role");
const {
  viewAllEmployeesMenu,
  addEmployeeMenu,
  updateEmployeeRoleMenu,
  deleteEmployee,
} = require("./employee");

exports.mainMenu = mainMenu;

function mainMenu() {
  console.clear();
  console.log(figlet.textSync("EMPLOYEE\nTRACKER"));
  console.log("", "\n", "");
  console.log(".::MAIN MENU::.\n");
  inquirer
    .prompt([
      {
        type: "list",
        name: "menuSelect",
        message: "Please choose one of the following options:",
        choices: [
          new inquirer.Separator(
            "----------------------VIEW----------------------"
          ),
          "View All Departments",
          "View All Roles",
          "View All Employees",
          new inquirer.Separator(
            "----------------------ADD----------------------"
          ),
          "Add Role",
          "Add Department",
          "Add Employee",
          new inquirer.Separator(
            "----------------------UPDATE----------------------"
          ),
          "Update Employee Role",
          new inquirer.Separator(
            "----------------------DELETE----------------------"
          ),
          "Delete a department",
          "Delete a role",
          "Delete an employee",
          new inquirer.Separator(
            "----------------------EXIT----------------------"
          ),
          "Exit",
        ],
        default: "View All Employees",
      },
    ])
    .then(({ menuSelect }) => {
      switch (menuSelect) {
        case "View All Departments":
          console.clear();
          viewDepartmentsMenu();
          break;
        case "Add Department":
          console.clear();
          addDptMenu();
          break;
        case "View All Roles":
          console.clear();
          viewAllRolesMenu();
          break;
        case "Add Role":
          console.clear();
          addRoleMenu();
          break;
        case "View All Employees":
          console.clear();
          viewAllEmployeesMenu();
          break;
        case "Add Employee":
          console.clear();
          addEmployeeMenu();
          break;
        case "Update Employee Role":
          console.clear();
          updateEmployeeRoleMenu();
          break;
        case "Delete Department":
          console.clear();
          deleteDepartment();
          break;
        case "Delete Role":
          console.clear();
          deleteRole();
          break;
        case "Delete an employee":
          console.clear();
          deleteEmployee();
          break;
        case "Exit":
          console.clear();
          exit();
          break;
      }
    });
}

function exit() {
  console.clear();
  console.log("Shutting down... hit ctrl + c and use 'npm start' to reboot");
}
