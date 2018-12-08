const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const studentSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      trim: true,
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
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, 'An email is required'],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
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

studentSchema.plugin(uniqueValidator, { message: 'id is already taken' });

module.exports = mongoose.model('Student', studentSchema);
