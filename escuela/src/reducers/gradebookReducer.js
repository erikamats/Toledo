import * as ActionTypes from "../actions/types"
import { updateObject } from './utilityFunctions'

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_GRADEBOOK:
      return updateObject(state, {
        [action.payload.id]: action.payload
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