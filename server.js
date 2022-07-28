const inquirer = require('inquirer');
const data = require('./db');
const logo = require('asciiart-logo');
const choices =require("inquirer/lib/objects/choices")
require('console.table');


Init();

function Init() {
    const asciiLogo = logo({ name: 'Employee Manager' }).render();
    console.log(asciiLogo);

    mainPrompt();
}

function mainPrompt() {
    inquirer.prompt([
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
    ]).then(res => {
        let choice = res.choice;
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
    )
}


function viewDepts() {
    data.findDepts();
    then(([rows]) => {
        let depts = rows;
        console.log("\n");
        console.table(depts);

        then(() => mainPrompt());
    })
    
}

function viewRoles() {
    data.findRoles();
    then(([rows]) => {
        let depts = rows;
        console.log("\n");
        console.table(depts);

        then(() => mainPrompt());
    })
    
}

function viewEmployees() {
    data.findEmployees();
    then(([rows]) => {
        let employees = rows;
    console.log("\n");
    console.table(employees);

    then(() => mainPrompt());
})

}

function addDepts() {
    inquirer.prompt([
        {
            name: "name",
            message: "What is the name of the dept?"
        }
    ]);

    data.createDepts(dept);

    console.log(`Added ${dept.name} to the database`);

    mainPrompt();
}

function addRoles() {
    // data.findRoles();

    // const deptChoices = depts.map(({ id, name }) => ({
    //     name: name,
    //     value: id
    // }));

    inquirer.prompt([
        {
            name: "title",
            message: "What is the name of the role?"
        },
        {
            name: "salary",
            message: "What is the salary of the role?"
        },
        // {
        //     type: "list",
        //     name: "dept_id",
        //     message: "Which dept does the role belong to?",
        //     choices: dept
        // }
    ]);

    data.createRole(role);

    console.log(`Added ${role.title} to the database`);

    mainPrompt();
}

function addEmployees() {
     data.findEmployees();

    inquirer.prompt([
        {
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            name: "last_name",
            message: "What is the employee's last name?"
        }
    ]);

    // const roleChoices = roles.map(({ id, title }) => ({
    //     name: title,
    //     value: id
    // }));

    inquirer.prompt({
        type: "list",
        name: "roleId",
        message: "What is the employee's role?",
        choices: roleChoices
    });


    data.createEmployees(employee);

    console.log(
        `Added ${employee.first_name} ${employee.last_name} to the database`
    );

    mainPrompt();
}

function updateEmployees() {
    const employees = data.findEmployees();

     const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
     }));

     inquirer.prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Which employee's role do you want to update?",
            choices: employeeChoices
        }
    ]);

    // data.findRoles();

    // const roleChoices = roles.map(({ id, title }) => ({
    //     name: title,
    //     value: id
    // }));

     inquirer.prompt([
        {
            type: "list",
            name: "roleId",
            message: "Which role do you want to assign the selected employee?",
            choices: roleChoices
        }
    ]);

    data.updateEmployees(employeeId, roleId);

    console.log("Updated employee's role");

    mainPrompt();
}


function quit() {
    console.log("Thank you");
    process.exit();
}







