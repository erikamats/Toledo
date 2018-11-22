import axios from 'axios';
import { FETCH_USERS, POST_FAILED, POST_SUCCESS, ADD_FLASH_MESSAGE, DELETE_MESSAGE } from './types';
import { fail } from 'assert';

export const fetchUsers = () => async dispatch => {
    const res = await axios.get('/students');
    
    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}


export const postUser = (userData) => async dispatch => {
    axios.post('/register-student', userData)
            .then((response) =>{
                dispatch(createUserSuccess(response))
            })
            .catch(error => {
                dispatch(createUserFailed(error.response.data))
            })
                   
   
    
    const createUserSuccess = (res) => ({
        type: POST_SUCCESS,
        payload: res
   })

   const createUserFailed = (failed) => ({
       type: POST_FAILED,
       payload: failed
   })

}

// export const postUser = (userData) => async dispatch => {
//     const res = await axios.post('/register-student', userData)
//                     .catch(error => {
//                         throw(error)
//                     })
                   
//     dispatch({
//         type: {POST_SUCCESS, POST_FAILED},
//         payload: res
//     })

// }

// function createPostSuccess(response){
//     return{
//         type:POST_SUCCESS,
//         payload:response
//     }
// }

// function postFailed(err){
//     return{
//         type:POST_FAILED,
//         payload:err
//     }
// }


// export function postUser (userData){
//     return function(dispatch){
//         axios.post('/register-student', userData)
//             .then((response) =>{
//                 dispatch(createPostSuccess(response))
//             })
//             .catch((err) => {
//                 dispatch(postFailed(err))
//             })
//     }
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


  