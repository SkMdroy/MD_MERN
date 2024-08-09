const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Data storage
let users = [
  { id: 1, dept_id: 1, uname: 'John Doe' },
  { id: 2, dept_id: 2, uname: 'Jane Doe' }
];

let departments = [
  { id: 1, dept_name: 'Sales' },
  { id: 2, dept_name: 'Marketing' }
];

// API Endpoints

// Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

// Create new user
app.post('/api/users', (req, res) => {
  const { dept_id, uname } = req.body;
  const user = { id: users.length + 1, dept_id, uname };
  users.push(user);
  res.json(user);
});

// Update user
app.put('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const { dept_id, uname } = req.body;
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    user.dept_id = dept_id;
    user.uname = uname;
    res.json(user);
  }
});

// Delete user
app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const userIndex = users.findIndex((user) => user.id === parseInt(id));
  if (userIndex === -1) {
    res.status(404).json({ message: 'User not found' });
  } else {
    users.splice(userIndex, 1);
    res.json({ message: 'User deleted' });
  }
});

// Get all departments
app.get('/api/departments', (req, res) => {
  res.json(departments);
});

// Get department by ID
app.get('/api/departments/:id', (req, res) => {
  const id = req.params.id;
  const department = departments.find((department) => department.id === parseInt(id));
  if (!department) {
    res.status(404).json({ message: 'Department not found' });
  } else {
    res.json(department);
  }
});

// Create new department
app.post('/api/departments', (req, res) => {
  const { dept_name } = req.body;
  const department = { id: departments.length + 1, dept_name };
  departments.push(department);
  res.json(department);
});

// Update department
app.put('/api/departments/:id', (req, res) => {
  const id = req.params.id;
  const { dept_name } = req.body;
  const department = departments.find((department) => department.id === parseInt(id));
  if (!department) {
    res.status(404).json({ message: 'Department not found' });
  } else {
    department.dept_name = dept_name;
    res.json(department);
  }
});

// Delete department
app.delete('/api/departments/:id', (req, res) => {
  const id = req.params.id;
  const departmentIndex = departments.findIndex((department) => department.id === parseInt(id));
  if (departmentIndex === -1) {
    res.status(404).json({ message: 'Department not found' });
  } else {
    departments.splice(departmentIndex, 1);
    res.json({ message: 'Department deleted' });
  }
});

// Lookup user by department ID
app.get('/api/users/lookup/:dept_id', (req, res) => {
  const dept_id = req.params.dept_id;
  const usersInDepartment = users.filter((user) => user.dept_id === parseInt(dept_id));
  res.json(usersInDepartment);
});

// Start server
app.listen(port, () => {
  console.log(Server listening on port ${port});
});