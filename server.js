const { prompt } = require('inquirer');
const ascii = require('asciiart-logo');
const data = require('./db');
const logo = require('asciiart-logo');
const { table } = require('ascii-art');
require('console.table');


Init();

function Init() {
    const asciiLogo = logo({ name: 'Employee Manager' }).render();
    console.log(asciiLogo);

    mainPrompt();
}

function mainPrompt() {
    prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'choose an option.',
            choices: [
                { name: 'View Departments', value: 'VIEW_DEPTS' },
                { name: 'View Roles', value: 'VIEW_ROLES' },
                { name: 'View Employees', value: 'EMPLOYEES' },

                { name: 'Add Departments', value: 'ADD_DEPTS' },
                { name: 'Add Roles', value: 'ADD_ROLES' },
                { name: 'Add Employees', value: 'ADD' },

                { name: 'Update Employee', value: 'UPDATE' },


                { name: 'Quit', value: 'QUIT' }
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case 'DEPARTMENTS':
                viewDepartments();
                break;
            case 'VIEW_ROLES':
                viewRoles();
                break;
            case 'EMPLOYEES':
                viewEmployees();
                break;
            case 'ADD':
                addDepartments();
                break;
            case 'ADD_ROLES':
                addRoles();
                break;
            case 'ADD':
                addEmployees();
                break;
            case 'UPDATE':
                updateEmployee();
                break;

            default:
                quit();

        }
    }
    )
}




