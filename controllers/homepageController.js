const sampleStudents = require('../data/sampleStudents');
const sampleCourses = require('../data/sampleCourses');

exports.sendSampleDataAsJSON = (req, res) => {
  console.log('Sending sampleStudents.js !');
  res.status(200);
  res.json(sampleStudents);
};