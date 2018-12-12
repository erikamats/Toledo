import * as ActionTypes from './types';
import axios from 'axios'

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