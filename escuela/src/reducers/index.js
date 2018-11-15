import { combineReducers} from 'redux';
import usersReducer from './userReducers';
import userPostReducer from './userPostReducer';

export default combineReducers({
    users:usersReducer,
    posts:userPostReducer
})