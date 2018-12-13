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
  };
}
const mapDispatchToProps = dispatch => {
  return {
    onGetGradebooks: () => {
      dispatch(getGradebooks())
    },
    onSaveGradebook: gradebook => {
      dispatch(saveGradebook(gradebook))
    },
    onUpdateGradebook: gradebook => {
      dispatch(updateGradebook(gradebook))
    },
    onRemoveGradebook: gradebookId => {
      dispatch(removeGradebook(gradebookId))
    },
    onGetStudents: () => {
      dispatch(getStudents())
    },
    onSaveStudent: student => {
      dispatch(saveStudent(student))
    },
    onRemoveStudent: studentId => {
      dispatch(removeStudent(studentId))
    },
    onUpdateStudent: student => {
      dispatch(updateStudent(student))
    },
    onGetAssignments: () => {
      dispatch(getAssignments())
    },
    onSaveAssignment: assignment => {
      dispatch(saveAssignment(assignment))
    },
    onRemoveAssignment: assignmentId => {
      dispatch(removeAssignment(assignmentId))
    },
    onUpdateAssignment: assignment => {
      dispatch(updateAssignment(assignment))
    },
  }
}

const GradebookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Gradebook);

export default GradebookContainer