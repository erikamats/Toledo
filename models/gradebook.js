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
const gradebookSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      trim: true,
      required: [true, 'An id is required'],
    },
    courseCommonName: {
      type: String,
      trim: true,
    },
    associatedCourseId: {
      type: String,
      trim: true,
    },
    gradePortions: [
      {
        portionName: String,
        gradeWeight0to1: String
      }
    ],
    studentsArray: [assignedStudent],
  },
);

gradebookSchema.plugin(uniqueValidator, { message: 'id is already taken' });

module.exports = mongoose.model('Gradebook', gradebookSchema);
