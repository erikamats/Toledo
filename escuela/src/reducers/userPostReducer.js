import { POST_USER } from '../actions';

export default ( state = [], action ) => {
    switch(action.type) {
        case POST_USER:
            return action.payload.data;
        default:
        return state;
    }
}