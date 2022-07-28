const connect = require('./connection');

class DB {
  constructor(connect) {
    this.connect = connect;
  }

  findEmployees() {
    return this.connect.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name as department, roles.role.salary, CONCAT(manager.first_name, manager.last_name) as manager FROM employee LEFT JOIN roles on employee.role_id = roles.role.id  LEFT JOIN department on roles.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id"
    );

  }

  createEmployees(employee) {
    return this.connect.promise().query("INSERT INTO employee SET ?", employee);
  }

  updateEmployee(employeeId, roleId) {
    return this.connect.promise().query(
      "UPDATE employee SET role_id = ? WHERE od = ?",
      [employeeId, roleId]
    )
  }
  findDepts() {
    return this.connect.promise().query(
      "SELECT department.id, department.name FROM department;"
    );

  }
  createDepts(depts) {
    return this.connect.promise().query("INSERT INTO employee SET ?", depts);
  }

  findRoles() {
    return this.connect.promise().query(
      "SELECT role.id, role.name FROM role"
    );
  }
  createRoles(roles) {
    return this.connect.promise().query("INSERT INTO employee SET ?", roles);
  }
}
module.exports = connect;