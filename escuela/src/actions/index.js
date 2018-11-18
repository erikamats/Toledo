import axios from 'axios';
export const FETCH_USERS = 'fetch_users';
export const POST_USER = 'post_user';

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

  