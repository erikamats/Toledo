import { POST_USER, POST_FAILURE } from '../actions/types';

export default ( state = [], action ) => {
    switch(action.type) {
        case POST_USER:
            return action.payload.data;
        case POST_FAILURE:
            return false;
        default:
        return state;
    }
}