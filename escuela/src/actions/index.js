import axios from 'axios';
import { FETCH_USERS, POST_SUCCESS, POST_FAILED, ADD_FLASH_MESSAGE, DELETE_MESSAGE } from './types';

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


  