import * as ActionTypes from './types';

export const addStudent = (student) => {
  return {
    type: ActionTypes.ADD_STUDENT,
    payload: student
  }
}
export const removeStudent = (id) => {
  return {
    type: ActionTypes.REMOVE_STUDENT,
    payload: { id }
  }
}
export const updateStudent = (student) => {
  return {
    type: ActionTypes.UPDATE_STUDENT,
    payload: student
  }
}