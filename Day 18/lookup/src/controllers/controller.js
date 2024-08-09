const User = require('../models/User');
const Department = require('../models/Department');

class Controller {
  constructor() {
    this.users = [
      new User(1, 1, 'John Doe'),
      new User(2, 2, 'Jane Doe')
    ];

    this.departments = [
      new Department(1, 'Sales'),
      new Department(2, 'Marketing')
    ];
  }

  // User endpoints
  getAllUsers(req, res) {
    res.json(this.users);
  }

  getUserById(req, res) {
    const id = req.params.id;
    const user = this.users.find((user) => user.id === parseInt(id));
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.json(user);
    }
  }

  createUser(req, res) {
    const { dept_id, uname } = req.body;
    const user = new User(this.users.length + 1, dept_id, uname);
    this.users.push(user);
    res.json(user);
  }

  updateUser(req, res) {
    const id = req.params.id;
    const { dept_id, uname } = req.body;
    const user = this.users.find((user) => user.id === parseInt(id));
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      user.dept_id = dept_id;
      user.uname = uname;
      res.json(user);
    }
  }

  deleteUser(req, res) {
    const id = req.params.id;
    const userIndex = this.users.findIndex((user) => user.id === parseInt(id));
    if (userIndex === -1) {
      res.status(404).json({ message: 'User not found' });
    } else {
      this.users.splice(userIndex, 1);
      res.json({ message: 'User deleted' });
    }
  }

  lookupUserByDepartmentId(req, res) {
    const dept_id = req.params.dept_id;
    const usersInDepartment = this.users.filter((user) => user.dept_id === parseInt(dept_id));
    res.json(usersInDepartment);
  }

  // Department endpoints
  getAllDepartments(req, res) {
    res.json(this.departments);
  }

  getDepartmentById(req, res) {
    const id = req.params.id;
    const department = this.departments.find((department) => department.id === parseInt(id));
    if (!department) {
      res.status(404).json({ message: 'Department not found' });
    } else {
      res.json(department);
    }
  }

  createDepartment(req, res) {
    const { dept_name } = req.body;
    const department = new Department(this.departments.length + 1, dept_name);
    this.departments.push(department);
    res.json(department);
  }

  updateDepartment(req, res) {
    const id = req.params.id;
    const { dept_name } = req.body;
    const department = this.departments.find((department) => department.id === parseInt(id));
    if (!department) {
      res.status(404).json({ message: 'Department not found' });
    } else {
      department.dept_name = dept_name;
      res.json(department);
    }
  }

  deleteDepartment(req, res) {
    const id = req.params.id;
    const departmentIndex = this.departments.findIndex((department) => department.id === parseInt(id));
    if (departmentIndex === -1) {
      res.status(404).json({ message: 'Department not found' });
    } else {
      this.departments.splice(departmentIndex, 1);
      res.json({ message: 'Department deleted' });
    }
  }
}

module.exports = Controller;