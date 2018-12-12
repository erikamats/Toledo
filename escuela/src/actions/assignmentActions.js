import * as ActionTypes from './types';
import Axios from 'axios';

export const saveAssignment = (assignment) => {
  return dispatch => {
    dispatch(saveAssignmentStarted())
    Axios.post('/register-assignment', { assignment }).then(res => {
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