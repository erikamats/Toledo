import {
        FETCH_COURSE_SUCCESS,
        FETCHING_COURSES_FAILED, 
        POST_COURSE_FAILED, 
        POST_COURSE_SUCCESS,
        SET_COURSES, 
        DELETE_COURSE
        } 
    from '../actions/types';

export default (state = [], action = {}) => {
    switch(action.type){
        case SET_COURSES:
            return [ ...state, action.course]
        case FETCH_COURSE_SUCCESS:
            return action.payload.data;
        case FETCHING_COURSES_FAILED:
            return state.action.payload;
        case POST_COURSE_SUCCESS:
            return action.data;
        case POST_COURSE_FAILED:
            return state.action.err;
        case DELETE_COURSE:
            return state.filter(item => item._id !== action.courseId);
        default:
        return state
    }
}