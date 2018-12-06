import * as ActionTypes from './types';

export const addGradebook = (gradebook) => {
  return {
    type: ActionTypes.ADD_GRADEBOOK,
    payload: gradebook
  }
}
export const removeGradebook = (id) => {
  return {
    type: ActionTypes.REMOVE_GRADEBOOK,
    payload: { id }
  }
}
export const updateGradebook = (gradebook) => {
  return {
    type: ActionTypes.UPDATE_GRADEBOOK,
    payload: gradebook
  }
}