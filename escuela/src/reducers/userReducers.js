import { ADD_USERS, USERS_FAILED, USERS_LOADING } from '../actions/types';

export const Users = ( state = {
        isLoading: true,
        errMess: null,
        users: []
    }, action ) => {
    switch(action.type){
        case ADD_USERS:
            return {...state, isLoading: false, errMess: null, users: action.payload};
        case USERS_LOADING:
            return {...state, isLoading: true, errMess: null, users: []};
        case USERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, users: []};
        default:
        return state
    }
}




// export default ( state = [], action ) => {
//     switch(action.type) {
//         case FETCH_USERS:
//             return action.payload.data;
//         default:
//         return state;
//     }
// }