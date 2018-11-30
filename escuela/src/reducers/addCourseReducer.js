import { POST_COURSE_FAILED, POST_COURSE_SUCCESS, DELETE_COURSE} from '../actions/types';

export default (state = [], action) => {
    switch(action.type){
        case POST_COURSE_SUCCESS:
            return action.payload.data.sampleCourses;
        case POST_COURSE_FAILED:
            return state.action.payload;
        case DELETE_COURSE:
            return state.action.payload;
        default:
        return state
    }
}