import * as ActionTypes from './types';
import axios from 'axios'

// GET GRADEBOOKS
export const getGradebooks = () => {
  return dispatch => {
    dispatch(getGradebooksStarted())
    axios.get('/gradebooks').then(res => {
      console.dir(res)
      dispatch(getGradebooksSuccess(res.data))
    }).catch(error => {
      dispatch(getGradebooksFailure(error))
    })
  }
}
const getGradebooksStarted = () => ({
  type: ActionTypes.GET_DB_GRADEBOOKS_STARTED
})
const getGradebooksSuccess = gradebooks => ({
  type: ActionTypes.GET_DB_GRADEBOOKS_SUCCESS,
  payload: { gradebooks }
})
const getGradebooksFailure = error => ({
  type: ActionTypes.GET_DB_GRADEBOOKS_FAILURE,
  error: error
})

export const selectGradebookForEditing = (gradebook) => ({
  type: ActionTypes.SELECT_GRADEBOOK_FOR_EDITING,
  payload: gradebook
})

// SAVE GRADEBOOK
export const saveGradebook = (gradebook) => {
  return dispatch => {
    dispatch(saveGradebookStarted())
    axios.post('/register-gradebook', {
      gradebook
    }).then(res => {
      dispatch(saveGradebookSuccess(res.data))
    }).catch(error => {
      dispatch(saveGradebookFailure(error))
    })
  }
}
const saveGradebookStarted = () => ({
  type: ActionTypes.ADD_DB_GRADEBOOK_STARTED
})
const saveGradebookSuccess = gradebook => ({
  type: ActionTypes.ADD_DB_GRADEBOOK_SUCCESS,
  payload: { ...gradebook }
})
const saveGradebookFailure = error => ({
  type: ActionTypes.ADD_DB_GRADEBOOK_FAILURE,
  error: error.response.data
})
// REMOVE GRADEBOOK
export const removeGradebook = (id) => {
  return {
    type: ActionTypes.REMOVE_GRADEBOOK,
    payload: { id }
  }
}
export const updateGradebook = (gradebook) => {
  return {
    type: ActionTypes.UPDATE_GRADEBOOK,
    payload: gradebook
  }
}