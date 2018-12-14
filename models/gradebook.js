const mongoose = require('mongoose');

const gradebookSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  associatedCourseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  gradePortions: [
    {
      portionName: String,
      gradeWeight0to1: String
    }
  ],
  studentsIdArray: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }],
  assignmentsArray: [
    {
      assignmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment',
      },
      gradePortionType: String,
      gradesAndFeedback: [
        {
          studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student'
          },
          grade: String,
          feedback: String
        }
      ]
    }
  ]
});

module.exports = mongoose.model('Gradebook', gradebookSchema);