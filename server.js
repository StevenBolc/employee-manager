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

async function mainPrompt() {
    const { choice } = await prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'choose an option.',
            choices: [
                { name: 'View Depts', value: 'VIEW_DEPTS' },
                { name: 'View Roles', value: 'VIEW_ROLES' },
                { name: 'View Employees', value: 'VIEW_EMP' },

                { name: 'Add Depts', value: 'ADD_DEPTS' },
                { name: 'Add Roles', value: 'ADD_ROLES' },
                { name: 'Add Employees', value: 'ADD_EMP' },

                { name: 'Update Employee', value: 'UPDATE' },


                //{ name: 'Remove_Departments', value: 'REMOVE_DEPTS' },  
                //{ name: 'Remove Roles', value: 'REMOVE_ROLES' },
                //{ name: 'View Employee Departments', value: 'DEPARTMENTS' },
                //{ name: 'View Employee Managers', value: 'MANAGERS' },
                //{ name: 'Remove Employee', value: 'REMOVE' },



                { name: 'Quit', value: 'QUIT' }
            ]
        }
    ])
    switch (choice) {
        case 'VIEW_DEPTS':
            viewDepts();
            break;
        case 'VIEW_ROLES':
            viewRoles();
            break;
        case 'VIEW_EMP':
            viewEmployees();
            break;
        case 'ADD_DEPTS':
            addDepts();
            break;
        case 'ADD_ROLES':
            addRoles();
            break;
        case 'ADD_EMP':
            addEmployees();
            break;
        case 'UPDATE':
            updateEmployees();
            break;

        default:
            quit();

    }
}








