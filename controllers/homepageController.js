const sampleStudents = require('../data/sampleStudents');
const sampleCourses = require('../data/sampleCourses');

exports.sendSampleDataAsJSON = (req, res) => {
  console.log('Sending sampleStudents.js !')
  console.log('Sending sampleUsers.js !')
  res.send(sampleStudents, sampleCourses);
};