import * as ActionTypes from './types';
import axios from 'axios';

// GET COURSES
export const getCourses = () => {
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
const getCoursesSuccess = Courses => ({
  type: ActionTypes.GET_DB_COURSES_SUCCESS,
  payload: { Courses }
})
const getCoursesFailure = error => ({
  type: ActionTypes.GET_DB_COURSES_FAILURE,
  error: error
})

// SAVE Course
export const saveCourse = (Course) => {
  return dispatch => {
    dispatch(saveCourseStarted())
    axios.post('/register-Course', { Course }).then(res => {
      dispatch(saveCourseSuccess(res.data))
    }).catch(error => {
      dispatch(saveCourseFailure(error))
    })
  }
}
const saveCourseStarted = () => ({
  type: ActionTypes.ADD_DB_COURSE_STARTED
})
const saveCourseSuccess = Course => ({
  type: ActionTypes.ADD_DB_COURSE_SUCCESS,
  payload: { ...Course }
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

export const updateCourse = (Course) => {
  return {
    type: ActionTypes.UPDATE_COURSE,
    payload: Course
  }
}