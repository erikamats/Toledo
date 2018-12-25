const mongoose = require('mongoose');

const gradebookSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  associatedCourse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  gradePortions: [
    {
      portionName: String,
      gradeWeight0to1: String
    }
  ],
  studentsInClass: [{
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

function autopopulate(next) {
  this.populate('associatedCourse');
  this.populate('studentsInClass');
  next();
}

gradebookSchema.pre('find', autopopulate);
gradebookSchema.pre('findOne', autopopulate);

module.exports = mongoose.model('Gradebook', gradebookSchema);