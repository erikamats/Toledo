import axios from 'axios';
import {
  FETCH_USERS,
  POST_USER,
  ADD_FLASH_MESSAGE,
  DELETE_MESSAGE,
  POST_COURSE_FAILED,
  POST_COURSE_SUCCESS,
  POST_SLIDER,
  FETCH_SLIDER,
  DELETE_STUDENT,
  DELETE_COURSE,
  FETCH_COURSE_SUCCESS,
  FETCHING_COURSES_FAILED,
  SET_COURSES

} from './types';



export const fetchUsers = () => async dispatch => {
  const res = await axios.get('/students');

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const deleteStudent = () => async dispatch => {
  const res = await axios.delete('/students');

  dispatch({
    type: DELETE_STUDENT,
    payload: res,
  });
};


export const postUser = userData => async dispatch => {
  const res = await axios.post('/register-student', userData);

  dispatch({
    type: POST_USER,
    payload: res,
  });
};

export const addFlashMessage = message => {
  return {
    type: ADD_FLASH_MESSAGE,
    message,
  };
};

export const deleteMessage = id => {
  return {
    type: DELETE_MESSAGE,
    id,
  };
};

/* this axios call grabs the data from the backend */

/* this axios call puts the class data into the database  And Creates action calls*/

export const addCourse = (Data) => {
  return dispatch => {
    axios.post('/course-registration', Data)
      .then(res => dispatch(addCourseSuccess(res.data)))
      .then(data=> dispatch(courseSync(data.course)))
      .catch(err => dispatch(addCourseFailed(err)))
  }
}

export const courseSync = courses =>({
  type:SET_COURSES,
  courses
})

export const addCourseSuccess = data => ({
  type: POST_COURSE_SUCCESS, data,
})

export const addCourseFailed = (err) => ({
  type: POST_COURSE_FAILED, err,
})

/* this axios call alsow gets courses */

export const fetchCourses = (Data) => async dispatch => {
  axios.get('/coursera', Data)
    .then((response) => {
      dispatch(fetchCourseSuccess(response))
    })
    .catch(error => {
      dispatch(fetchingCoursesFailed(error.response.data))
    })

}

const fetchCourseSuccess = (res) => ({
  type: FETCH_COURSE_SUCCESS,
  payload: res
})

const fetchingCoursesFailed = (err) => ({
  type: FETCHING_COURSES_FAILED,
  payload: err
})

export const deleteCourse = (id) => async dispatch => {
  axios.delete(`/coursera/${id}`)
    .then( data => dispatch(courseDeleted(id)));
}

const courseDeleted = (courseId) => ({
  type: DELETE_COURSE,
  courseId
})


//  This axios call puts slider info into DB

export const postSlider = sliderData => async dispatch => {
  const res = await axios.post('/slider-post', sliderData);

  dispatch({
    type: POST_SLIDER,
    payload: res,
  });
};

export const fetchSlider = () => async dispatch => {
  const res = await axios.get('/sliders');

  dispatch({
    type: FETCH_SLIDER,
    payload: res,
  });
};