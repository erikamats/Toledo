import axios from 'axios';
import {
  FETCH_USERS,
  FETCH_CLASSES,
  POST_USER,
  ADD_FLASH_MESSAGE,
  DELETE_MESSAGE,
  POST_COURSE_FAILED,
  POST_COURSE_SUCCESS,
  POST_SLIDER,
  FETCH_SLIDER,
  DELETE_STUDENT,
  DELETE_COURSE
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
export const fetchClasses = () => async dispatch => {
  const res = await axios.get('/students');

  dispatch({
    type: FETCH_CLASSES,
    payload: res
  })
}

/* this axios call puts the class data into the database  And Creates action calls*/

// export const addCourseSuccess = data => ({
//   type: POST_COURSE_SUCCESS, data,
// })

// export const addCourseFailed = (err) => ({
//   type: POST_COURSE_FAILED, err,
// })

// export const addCourse = (Data) => {
//   return dispatch => {
//     axios.get('/courses', Data)
//       .then(res => dispatch(addCourseSuccess(res.data)))
//       .catch(err => dispatch(addCourseFailed(err)))
//   }
// }

/* this axios call alsow gets courses */

export const addCourse = (Data) => async dispatch => {
  axios.get('/courses', Data)
    .then((response) => {
      dispatch(addCourseSuccess(response))
    })
    .catch(error => {
      dispatch(addCourseFailed(error.response.data))
    })
  
  axios.delete('/courses', Data)
    .then((response) =>{
      dispatch(deleteCourse(response))
  })

  const addCourseSuccess = (res) => ({
    type: POST_COURSE_SUCCESS,
    payload: res
  })

  const addCourseFailed = (err) => ({
    type: POST_COURSE_FAILED,
    payload: err
  })

  const deleteCourse = (del) => ({
    type: DELETE_COURSE,
    payload: del
  })
}

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