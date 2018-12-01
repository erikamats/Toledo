import {
  ADD_GRADEBOOK_BY_ID,
  REMOVE_GRADEBOOK_BY_ID,
} from './types';

export const addGradebookById = (id) => {
  return {
    type: ADD_GRADEBOOK_BY_ID,
    id: id
  }
}
export const removeGradebookById = (id) => {
  return {
    type: REMOVE_GRADEBOOK_BY_ID,
    id: id
  }
}