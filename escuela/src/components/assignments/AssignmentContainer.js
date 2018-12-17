import { connect } from "react-redux";
// import * as ActionTypes from 'actions/types'
import {
  getStudents,
  saveStudent,
  removeStudent,
  updateStudent,
  getAssignments,
  saveAssignment,
  removeAssignment,
  updateAssignment
} from "actions";

import Assignment from "./Assignment";

function mapStateToProps(state) {
  return {
    assignments: state.assignments,
    students: state.students
  };
}
const mapDispatchToProps = dispatch => {
  return {
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
    }
  };
};

const AssignmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Assignment);

export default AssignmentContainer
