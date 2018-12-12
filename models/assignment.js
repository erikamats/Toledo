const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const assignedStudent = new mongoose.Schema(
  {
    id: {
      type: String
    },
    name: {
      type: String
    }
  }
)
const assignmentSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'An id is required'],
    },
    name: {
      type: String,
      trim: true,
      required: [true, 'An assignment name is required'],
    },
    associatedGradebookById: {
      type: String,
      trim: true,
    },
    studentsAssignedTo: [assignedStudent]
  },
);

assignmentSchema.plugin(uniqueValidator, { message: 'id is already taken' });

module.exports = mongoose.model('Assignment', assignmentSchema);
