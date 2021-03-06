import { combineReducers } from 'redux';
import usersReducer from './userReducers';
import userPostReducer from './userPostReducer';
import flashMessages from './flashMessages';
import addCourseReducer from './addCourseReducer';
import gradebookReducer from './gradebookReducer';
import currentlyEditingGradebook from './currentlyEditingGradebook';
import assignmentReducer from './assignmentReducer';
import studentReducer from './studentReducer';
import courseReducer from './courseReducer';

export default combineReducers({
  users: usersReducer,
  posts: userPostReducer,
  message: flashMessages,
  addCourse: addCourseReducer,
  courses: courseReducer,
  gradebooks: gradebookReducer,
  currentlyEditingGradebook,
  students: studentReducer,
  assignments: assignmentReducer,
})