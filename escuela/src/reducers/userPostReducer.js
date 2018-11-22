import {  POST_SUCCESS, POST_FAILED } from '../actions/types';

export default ( state = [], action ) => {
    switch(action.type) {
        case POST_SUCCESS:
            return [...state, action.payload];
        case POST_FAILED:
            return [...state, action.payload];
        default:
        return state;
    }
}