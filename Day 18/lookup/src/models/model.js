const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  deptId: Number,
  dname: String
});

const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;