import * as ActionTypes from "../actions/types"
import { updateObject } from './utilityFunctions'

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DB_STUDENT_STARTED:
      return updateObject(state, {
        isLoading: true
      })
    case ActionTypes.ADD_DB_STUDENT_SUCCESS:
      return updateObject(state, {
        [action.payload.id]: action.payload,
        isLoading: false,
        error: action.error
      })
    case ActionTypes.ADD_DB_STUDENT_FAILURE:
      return updateObject(state, {
        isLoading: false,
        error: action.error
      })
    case ActionTypes.REMOVE_STUDENT:
      return updateObject(state, {
        [action.payload.id]: undefined
      })
    case ActionTypes.UPDATE_STUDENT:
      return updateObject(state, {
        [action.payload.id]: updateObject(state[action.payload.id], action.payload)
      })
    default: return state;
  }
}