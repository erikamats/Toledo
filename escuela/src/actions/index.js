import axios from 'axios';
import * as ActionTypes from './types'

export {
  getGradebooks,
  saveGradebook, removeGradebook,
  updateGradebook
} from './gradebookActions';
export {
  getStudents,
  saveStudent,
  removeStudent,
  updateStudent,
} from './studentActions';
export {
  getAssignments,
  saveAssignment,
  removeAssignment,
  updateAssignment
} from './assignmentActions';
export {
  registerUser,
  loginUser,
  setCurrentUser,
  logoutUser
} from './authActions';

export const fetchUsers = () => async dispatch => {
  const res = await axios.get('/students');

  dispatch({
    type: ActionTypes.FETCH_USERS,
    payload: res,
  });
};

export const postUser = userData => async dispatch => {
  const res = await axios.post('/register-student', userData);

  dispatch({
    type: ActionTypes.POST_USER,
    payload: res,
  });
};

export const addFlashMessage = message => {
  return {
    type: ActionTypes.ADD_FLASH_MESSAGE,
    message,
  };
};

export const deleteMessage = id => {
  return {
    type: ActionTypes.DELETE_MESSAGE,
    id,
  };
};

/* this axios call grabs the data from the backend */
export const fetchClasses = () => async dispatch => {
  const res = await axios.get('/course');

  dispatch({
    type: ActionTypes.FETCH_CLASSES,
    payload: res
  })
}

/* this axios call puts the class data into the database */

export const addCourse = (Data) => async dispatch => {
  axios.post('/course', Data)
    .then((response) => {
      dispatch(addCourseSuccess(response))
    })
    .catch(error => {
      dispatch(addCourseFailed(error.response.data))
    })

  const addCourseSuccess = (res) => ({
    type: ActionTypes.POST_COURSE_SUCCESS,
    payload: res
  })

  const addCourseFailed = (err) => ({
    type: ActionTypes.POST_COURSE_FAILED,
    payload: err
  })
}

//  This axios call puts slider info into DB

export const postSlider = sliderData => async dispatch => {
  const res = await axios.post('/slider-post', sliderData);

  dispatch({
    type: ActionTypes.POST_SLIDER,
    payload: res,
  });
};

export const fetchSlider = () => async dispatch => {
  const res = await axios.get('/sliders');

  dispatch({
    type: ActionTypes.FETCH_SLIDER,
    payload: res,
  });
};