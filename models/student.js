const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(

  {
    firstName: {
      type: String,
      trim: true,
      required: [true, 'A first name is required'],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, 'A last name is required'],
    },
    birthday: Date,
    gender: String,
    dateEnrolled: {
      type: Date,
      default: Date.now(),
    },
    currentGradeLevel: Number,
    photo: String,
  },
  { timestamps: true },

);
module.exports = mongoose.model('Student', studentSchema);
