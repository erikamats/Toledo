import { combineReducers } from 'redux';
import usersReducer from './userReducers';
import userPostReducer from './userPostReducer';
import flashMessages from './flashMessages';
import classesReducer from './classesReducer';
import addCourseReducer from './addCourseReducer';
import gradebookReducer from './gradebookReducer';
import assignmentReducer from './assignmentReducer';
import studentReducer from './studentReducer';

export default combineReducers({
  users: usersReducer,
  posts: userPostReducer,
  message: flashMessages,
  classes: classesReducer,
  addCourse: addCourseReducer,
  gradebooks: gradebookReducer,
  students: studentReducer,
  assignments: assignmentReducer,
})