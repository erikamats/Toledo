const sampleStudents = require('../data/sampleStudents');
const sampleCourses = require('../data/sampleCourses');
const sampleGradebooks = require('../data/sampleGradebooks');
const sampleAssignments = require('../data/sampleAssignments');

exports.getStudents = (req, res) => {
  console.log('Sending sampleStudents.js !')
  res.json(sampleStudents);
};

exports.getStudentsAsynchronously = async (req, res) => {
  await setTimeout(() => {
    res.send('List of Students');
  }, 3000);
};

exports.addStudent = async (req, res) => {
  res.send('Student Added!');
};

exports.getCourses = (req, res) => {
  console.log('Sending sampleStudents.js !')
  res.json(sampleStudents);
};
exports.addCourse = async (req, res) => {
  res.send('Course Added!');
};

exports.getGradebooks = (req, res) => {
  console.log('Sending sampleGradebooks.js !')
  res.send(sampleGradebooks);
};

exports.getAssignments = (req, res) => {
  console.log('Sending sampleGradebooks.js !')
  res.send(sampleGradebooks);
};
