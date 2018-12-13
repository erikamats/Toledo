import * as ActionTypes from './types';
import axios from 'axios';

// GET ASSIGNMENTS
export const getAssignments = () => {
  return dispatch => {
    dispatch(getAssignmentsStarted())
    axios.get('/assignments').then(res => {
      console.dir(res)
      dispatch(getAssignmentsSuccess(res.data))
    }).catch(error => {
      dispatch(getAssignmentsFailure(error))
    })
  }
}
const getAssignmentsStarted = () => ({
  type: ActionTypes.GET_DB_ASSIGNMENTS_STARTED
})
const getAssignmentsSuccess = assignments => ({
  type: ActionTypes.GET_DB_ASSIGNMENTS_SUCCESS,
  payload: { assignments }
})
const getAssignmentsFailure = error => ({
  type: ActionTypes.GET_DB_ASSIGNMENTS_FAILURE,
  error: error
})

// SAVE ASSIGNMENT
export const saveAssignment = (assignment) => {
  return dispatch => {
    dispatch(saveAssignmentStarted())
    axios.post('/register-assignment', { assignment }).then(res => {
      dispatch(saveAssignmentSuccess(res.data))
    }).catch(error => {
      dispatch(saveAssignmentFailure(error))
    })
  }
}
const saveAssignmentStarted = () => ({
  type: ActionTypes.ADD_DB_ASSIGNMENT_STARTED
})
const saveAssignmentSuccess = assignment => ({
  type: ActionTypes.ADD_DB_ASSIGNMENT_SUCCESS,
  payload: { ...assignment }
})
const saveAssignmentFailure = error => ({
  type: ActionTypes.ADD_DB_ASSIGNMENT_FAILURE,
  error: error.response.data
})

export const removeAssignment = (id) => {
  return {
    type: ActionTypes.REMOVE_ASSIGNMENT,
    payload: { id }
  }
}

export const updateAssignment = (assignment) => {
  return {
    type: ActionTypes.UPDATE_ASSIGNMENT,
    payload: assignment
  }
}