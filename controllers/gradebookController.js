exports.getStudents = (req, res) => {
  res.send('List of Students');
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
  res.send('List of Courses');
};

exports.getCoursesAsynchronously = async (req, res) => {
  await setTimeout(() => {
    res.send('List of Courses');
  }, 3000);
};

exports.addCourse = async (req, res) => {
  res.send('List of Courses');
};
