import { connect } from 'react-redux'

import {
  getGradebooks,
  saveGradebook,
  removeGradebook,
  updateGradebook,
  getStudents,
  saveStudent,
  removeStudent,
  updateStudent,
  getCourses,
  saveCourse,
  removeCourse,
  updateCourse,
  getAssignments,
  saveAssignment,
  removeAssignment,
  updateAssignment
} from 'actions'


import Gradebook from 'components/gradebook/Gradebook'

function mapStateToProps(state) {
  return {
    gradebooks: state.gradebooks,
    assignments: state.assignments,
    students: state.students,
    courses: state.courses,
  };
}
const GradebookContainer = connect(
  mapStateToProps,
  {
    getGradebooks,
    saveGradebook,
    removeGradebook,
    updateGradebook,
    getStudents,
    saveStudent,
    removeStudent,
    updateStudent,
    getCourses,
    saveCourse,
    removeCourse,
    updateCourse,
    getAssignments,
    saveAssignment,
    removeAssignment,
    updateAssignment
  }
)(Gradebook);

export default GradebookContainer