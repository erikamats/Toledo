import axios from 'axios';
import { USERS_FAILED, USERS_LOADING, ADD_USERS, ADD_FLASH_MESSAGE, DELETE_MESSAGE } from './types';

// export const fetchUsers = () => async dispatch => {
//     const res = await axios.get('/students');
    
//     dispatch({
//         type: FETCH_USERS,
//         payload: res
//     })
// }

export const fetchUsers = () => (dispatch) => {
    dispatch(usersLoading(true));

    return axios.get('/students')
        .then(response => response.json())
        .then(users => dispatch(addUsers(users)));
}

export const usersLoading = () => ({
    type: USERS_LOADING
})

export const usersFailed = (errmess) => ({
    type: USERS_FAILED,
    payload: errmess
})

export const addUsers = (users) => ({
    type: ADD_USERS,
    payload: users
})

// export const registerUser = () => (dispatch) => {
//     dispatch(usersLoading(true));
// }

// export const usersPosting = () => ({
//     type: ActionTypes.USERS_POSTING
// })
// export const postUser = (userData) => async dispatch => {
//     const res = await axios.post('/register-student', userData)
                   
//     dispatch({
//         type: POST_USER,
//         payload: res
//     })
// }


export const addFlashMessage = (message) => {
    return {
        type: ADD_FLASH_MESSAGE,
        message
    }
}

export const deleteMessage = (id) =>{
    return {
        type: DELETE_MESSAGE,
        id
    }

}


  