const mongoose = require('mongoose')
const Gradebook = require('../models/gradebook')
const Student = require('../models/student')
const Assignment = require('../models/assignment')
const Course = require('../models/course')

exports.saveStudent = async (req, res) => {
  const student = await Student.findOne({ id: req.body.student.id })
  if (student) { res.send(student) }
  else {
    const newStudent = await new Student(req.body.student).save()
    res.send(newStudent)
  }
}
exports.getStudents = async (req, res) => {
  const students = await Student.find({})
  res.send(students)
}
exports.saveAssignment = async (req, res) => {
  const assignment = await Assignment.findOne({ id: req.body.assignment.id })
  if (assignment) { res.send(assignment) }
  else {
    const newAssignment = await new Assignment(req.body.assignment).save()
    res.send(newAssignment)
  }
}
exports.getAssignments = async (req, res) => {
  const assignments = await Assignment.find({})
  res.send(assignments)
}
exports.saveGradebook = async (req, res) => {
  const gradebook = await Gradebook.findOne({ id: req.body.gradebook.id })
  if (gradebook) { res.send(gradebook) }
  else {
    const newGradebook = await new Gradebook(req.body.gradebook).save()
    res.send(newGradebook)
  }
}
exports.getGradebooks = async (req, res) => {
  const gradebooks = await Gradebook.find({}).
    populate({ path: 'studentsInGradebook', select: 'lastName firstName' }).
    populate({ path: 'assignmentsInGradebook.assignmentId', select: 'assignmentName description' }).
    populate({ path: 'assignmentsInGradebook.gradesAndFeedback.studentId', select: 'lastName firstName -_id' });
  res.send(gradebooks);
}

exports.saveCourse = async (req, res) => {
  const newCourse = await new Course(req.body.course).save()
  res.json(newCourse)
}

exports.getCourses = async (req, res) => {
  const courses = await Course.find({});
  res.send(courses);
}