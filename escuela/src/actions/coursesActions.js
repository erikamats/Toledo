import * as ActionTypes from './types';
import axios from 'axios';

// GET COURSES
export const getCOURSES = () => {
  return dispatch => {
    dispatch(getCoursesStarted())
    axios.get('/courses').then(res => {
      console.dir(res)
      dispatch(getCoursesSuccess(res.data))
    }).catch(error => {
      dispatch(getCoursesFailure(error))
    })
  }
}
const getCoursesStarted = () => ({
  type: ActionTypes.GET_DB_COURSES_STARTED
})
const getCoursesSuccess = courses => ({
  type: ActionTypes.GET_DB_COURSES_SUCCESS,
  payload: { courses }
})
const getCoursesFailure = error => ({
  type: ActionTypes.GET_DB_COURSES_FAILURE,
  error: error
})

// SAVE ASSIGNMENT
export const saveCourse = (course) => {
  return dispatch => {
    dispatch(saveCourseStarted())
    axios.post('/courses', { course }).then(res => {
      dispatch(saveCourseSuccess(res.data))
    }).catch(error => {
      dispatch(saveCourseFailure(error))
    })
  }
}
const saveCourseStarted = () => ({
  type: ActionTypes.ADD_DB_COURSE_STARTED
})
const saveCourseSuccess = course => ({
  type: ActionTypes.ADD_DB_COURSE_SUCCESS,
  payload: { ...course }
})
const saveCourseFailure = error => ({
  type: ActionTypes.ADD_DB_COURSE_FAILURE,
  error: error.response.data
})

export const removeCourse = (id) => {
  return {
    type: ActionTypes.REMOVE_COURSE,
    payload: { id }
  }
}

export const updateCourse = (assignment) => {
  return {
    type: ActionTypes.UPDATE_ASSIGNMENT,
    payload: course
  }
}