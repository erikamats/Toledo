const sampleStudents = require('../data/sampleStudents');
const sampleCourses = require('../data/sampleCourses');
const sampleGradebooks = require('../data/sampleGradebooks');
const sampleAssignments = require('../data/sampleAssignments');

exports.sendSampleDataAsJSON = (req, res) => {
  console.log('Sending sampleAssignments.js !');
  res.status(200);
  res.json(sampleAssignments);
};