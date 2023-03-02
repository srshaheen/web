const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  designation: {
    type: String,
    required: true
  },
  emplpoyee_type: {
    type: String,
    required: true
  }
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;
