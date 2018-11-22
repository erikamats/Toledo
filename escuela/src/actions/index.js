import axios from 'axios';
import {FETCH_USERS, 
        FETCH_CLASSES, 
        POST_USER, 
        ADD_FLASH_MESSAGE, 
        DELETE_MESSAGE, 
        POST_COURSE_FAILED,
        POST_COURSE_SUCCESS
    } from './types';

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

export const deleteMessage = (id) =>{
    return {
        type: DELETE_MESSAGE,
        id
    }

}

/* this axios call grabs the data from the backend */
export const fetchClasses = () => async dispatch => {
    const res = await axios.get('/course');
    
    dispatch({
        type: FETCH_CLASSES,
        payload: res
    })
}

/* this axios call puts the class data into the database */

export const addCourse = (Data) => async dispatch => {
    axios.post('/course', Data)
            .then((response) =>{
                dispatch(addCourseSucces(response))
            })
            .catch(error => {
                dispatch(addCourseFailed(error.response.data))
            })
                   
   
    
    const addCourseSucces = (res) => ({
        type: POST_COURSE_SUCCESS,
        payload: res
   })

   const addCourseFailed = (err) => ({
       type: POST_COURSE_FAILED,
       payload: err
   })
}