require('dotenv').config({ path: __dirname + '/../variables.env' });
const fs = require('fs');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises

const connectURI = process.env.MONGODB_URI;
try {
  mongoose.connect(connectURI, { useNewUrlParser: true });
} catch (error) {
  console.log(error)
}
mongoose.connection.once('open', () => console.log('Connection to MongoDB database was successful!'));
// import all of our models - they need to be imported only once
const Student = require('../models/student');
const Gradebook = require('../models/gradebook');
const Assignment = require('../models/assignment');
const Course = require('../models/course');
const User = require('../models/user');

const students = JSON.parse(fs.readFileSync(__dirname + '/students.json', 'utf-8'));
const gradebooks = JSON.parse(fs.readFileSync(__dirname + '/gradebooks.json', 'utf-8'));
const assignments = JSON.parse(fs.readFileSync(__dirname + '/assignments.json', 'utf-8'));
const courses = JSON.parse(fs.readFileSync(__dirname + '/courses.json', 'utf-8'));
const users = JSON.parse(fs.readFileSync(__dirname + '/users.json', 'utf-8'));

async function deleteData() {
  console.log('😢 Goodbye Data...');
  await Student.deleteMany({});
  await Gradebook.deleteMany({});
  await Assignment.deleteMany({});
  await Course.deleteMany({});
  await User.deleteMany({});
  console.log('Data Deleted. To load sample data, run\n\n\t npm run sample\n\n');
  process.exit();
}

async function loadData() {
  try {
    await Student.insertMany(students);
    await Gradebook.insertMany(gradebooks);
    await Assignment.insertMany(assignments);
    await Course.insertMany(courses);
    await User.insertMany(users);
    console.log('👍 Done!');
    process.exit();
  } catch (e) {
    console.log(
      '\n👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with\n\n\t npm run blowitallaway\n\n\n'
    );
    console.log(e);
    process.exit();
  }
}
if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
}
