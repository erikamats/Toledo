import {  POST_SUCCESS, POST_FAILED } from '../actions/types';

export default ( state = { isLoading: true, errors:{} }, action ) => {
    switch(action.type) {
        case POST_SUCCESS:
            return [...state, action.payload];
        case POST_FAILED:
            return {...state, isLoading: true, errors: action.payload};
        default:
        return state;
    }
}
