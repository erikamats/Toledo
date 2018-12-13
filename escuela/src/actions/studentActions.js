import * as ActionTypes from './types';
import axios from 'axios'
// GET STUDENT
export const getStudents = () => {
  return dispatch => {
    dispatch(getStudentsStarted())
    axios.get('/students').then(res => {
      console.dir(res)
      dispatch(getStudentsSuccess(res.data))
    }).catch(error => {
      dispatch(getStudentsFailure(error))
    })
  }
}
const getStudentsStarted = () => ({
  type: ActionTypes.GET_DB_STUDENTS_STARTED
})
const getStudentsSuccess = students => ({
  type: ActionTypes.GET_DB_STUDENTS_SUCCESS,
  payload: { students }
})
const getStudentsFailure = error => ({
  type: ActionTypes.GET_DB_STUDENTS_FAILURE,
  error: error
})

// SAVE STUDENT
export const saveStudent = (student) => {
  return dispatch => {
    dispatch(saveStudentStarted())
    axios.post('/register-student', { student }).then(res => {
      dispatch(saveStudentSuccess(res.data))
    }).catch(error => {
      dispatch(saveStudentFailure(error))
    })
  }
}
const saveStudentStarted = () => ({
  type: ActionTypes.ADD_DB_STUDENT_STARTED
})

const saveStudentSuccess = student => ({
  type: ActionTypes.ADD_DB_STUDENT_SUCCESS,
  payload: { ...student }
})
const saveStudentFailure = error => ({
  type: ActionTypes.ADD_DB_STUDENT_FAILURE,
  error: error.response.data
})
export const removeStudent = (id) => {
  return {
    type: ActionTypes.REMOVE_STUDENT,
    payload: { id }
  }
}
export const updateStudent = (student) => {
  return {
    type: ActionTypes.UPDATE_STUDENT,
    payload: student
  }
}