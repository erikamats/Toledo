const sampleStudents = require('../data/sampleStudents');
const sampleCourses = require('../data/sampleCourses');

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
  console.log('Sending sampleCourses.js !')
  res.send(sampleCourses);
};

exports.getCoursesAsynchronously = async (req, res) => {
  await setTimeout(() => {
    res.send('List of Courses');
  }, 3000);
};

exports.addCourse = async (req, res) => {
  res.send('Course Added!');
};
