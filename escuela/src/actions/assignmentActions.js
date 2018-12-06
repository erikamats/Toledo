import * as ActionTypes from './types';

export const addAssignment = (assignment) => {
  return {
    type: ActionTypes.ADD_ASSIGNMENT,
    payload: assignment
  }
}
export const removeAssignment = (id) => {
  return {
    type: ActionTypes.REMOVE_ASSIGNMENT,
    payload: { id }
  }
}
export const updateAssignment = (assignment) => {
  return {
    type: ActionTypes.UPDATE_ASSIGNMENT,
    payload: assignment
  }
}