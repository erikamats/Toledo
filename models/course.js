const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const courseSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      trim: true,
      unique: true,
      required: [true, 'A course id is required'],
    },
    courseName: {
      type: String,
      trim: true,
      required: [true, 'A course name is required'],
    },
    subject: {
      type: String,
      trim: true,
      required: [true, 'A subject is required'],
    },
    startDate: {
      type: Date,
      default: Date.now(),
    },
    endDate: {
      type: Date,
      default: Date.now(),
    },
    capacity: {
      type: Number,
      required: false,
    },
    classDays: String,
    classStartTime: String,
    classEndTime: String
  },
  { timestamps: true }
);

courseSchema.plugin(uniqueValidator, { message: 'id is already taken' });

module.exports = mongoose.model('Course', courseSchema);