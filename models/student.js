const mongoose = require('mongoose');
mongoose.Promise = global.Promise
const uniqueValidator = require('mongoose-unique-validator')
const studentSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'An id is required'],
    },
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
    gender: String,
    dateEnrolled: {
      type: Date,
      default: Date.now(),
    },
    currentGradeLevel: Number
  },
  { timestamps: true },
);
studentSchema.plugin(uniqueValidator, { message: 'id is taken' })
module.exports = mongoose.model('Student', studentSchema);
