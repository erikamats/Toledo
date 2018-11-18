import axios from 'axios';
import { FETCH_USERS, POST_USER, ADD_FLASH_MESSAGE } from './types';

export const fetchUsers = () => async dispatch => {
    const res = await axios.get('/students');
    
    dispatch({
        type: FETCH_USERS,
        payload: res
    })
}

export const postUser = (userData) => async dispatch => {
    const res = await axios.post('/register-student', userData);
    
    dispatch({
        type: POST_USER,
        payload: res
    })
}



export const addFlashMessage = (message) => {
    return {
        type: ADD_FLASH_MESSAGE,
        message
    }
}


  