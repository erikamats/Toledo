import { combineReducers} from 'redux';
import usersReducer from './userReducers';
import userPostReducer from './userPostReducer';
import flashMessages from './flashMessages';

export default combineReducers({
    users:usersReducer,
    posts:userPostReducer,
    message:flashMessages
})