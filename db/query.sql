SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name as department,
roles.role.salary, CONCAT(manager.first_name, manager.last_name) as manager 
FROM employee 
LEFT JOIN roles on employee.role_id = roles.role.id 
LEFT JOIN department on roles.department_id = department.id 
LEFT JOIN employee manager on manager.id = employee.manager_id