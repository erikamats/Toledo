const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

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
    studentsAssignedToById: {
      studentId: {
        id: String,
        name: String,
      }
    },
  }
);

assignmentSchema.plugin(uniqueValidator, { message: 'id is already taken' });

module.exports = mongoose.model('Assignment', assignmentSchema);
