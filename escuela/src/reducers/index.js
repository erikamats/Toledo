import { combineReducers } from 'redux';
import usersReducer from './userReducers';
import userPostReducer from './userPostReducer';
import flashMessages from './flashMessages';
import addCourseReducer from './addCourseReducer';

export default combineReducers({
    users: usersReducer,
    posts: userPostReducer,
    message: flashMessages,
    courses: addCourseReducer
})