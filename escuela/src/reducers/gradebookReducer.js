import * as ActionTypes from "../actions/types"
import { updateObject } from './utilityFunctions'

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DB_GRADEBOOK_STARTED:
      return updateObject(state, {
        isLoading: true,
        error: false
      })
    case ActionTypes.ADD_DB_GRADEBOOK_SUCCESS:
      return updateObject(state, {
        [action.payload.id]: action.payload,
        isLoading: false,
        error: false
      })
    case ActionTypes.ADD_DB_GRADEBOOK_FAILURE:
      return updateObject(state, {
        isLoading: false,
        error: action.error
      })
    case ActionTypes.REMOVE_GRADEBOOK:
      return updateObject(state, {
        [action.payload.id]: undefined
      })
    case ActionTypes.UPDATE_GRADEBOOK:
      return updateObject(state, {
        [action.payload.id]: updateObject(state[action.payload.id], action.payload)
      })
    default: return state;
  }
}