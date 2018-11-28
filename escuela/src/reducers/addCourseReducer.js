import { POST_COURSE_FAILED, POST_COURSE_SUCCESS} from '../actions/types';

export default (state = [], action) => {
    switch(action.type){
        case POST_COURSE_SUCCESS:
            return [...state, action.payload];
        case POST_COURSE_FAILED:
            return [state.action.payload];
        default:
        return state
    }
}