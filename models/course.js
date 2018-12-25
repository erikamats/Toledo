const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
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
  classDays: [String],
  classStartTime: String,
  classEndTime: String
},
  { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);