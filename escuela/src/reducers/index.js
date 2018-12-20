import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userPostReducer from './userPostReducer';
import flashMessages from './flashMessages';
import addCourseReducer from './addCourseReducer';
import gradebookReducer from './gradebookReducer';
import assignmentReducer from './assignmentReducer';
import studentReducer from './studentReducer';
import courseReducer from './courseReducer';

export default combineReducers({
  auth: authReducer,
  posts: userPostReducer,
  message: flashMessages,
  courses: courseReducer,
  addCourse: addCourseReducer,
  gradebooks: gradebookReducer,
  students: studentReducer,
  assignments: assignmentReducer,
})