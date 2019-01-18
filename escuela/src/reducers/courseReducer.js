import * as ActionTypes from "../actions/types"
import { updateObject } from './utilityFunctions'

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.GET_DB_COURSES_STARTED:
      return updateObject(state, {
        isLoading: true,
        error: false
      })
    case ActionTypes.GET_DB_COURSES_SUCCESS:
      return updateObject(state, {
        ...action.payload,
        isLoading: false,
        error: false
      })
    case ActionTypes.GET_DB_COURSES_FAILURE:
      return updateObject(state, {
        isLoading: false,
        error: action.error
      })
    case ActionTypes.ADD_DB_COURSE_STARTED:
      return updateObject(state, {
        isLoading: true,
        error: false
      })
    case ActionTypes.ADD_DB_COURSE_SUCCESS:
      return updateObject(state, {
        [action.payload._id]: action.payload,
        isLoading: false,
        error: false
      })
    case ActionTypes.ADD_DB_COURSE_FAILURE:
      return updateObject(state, {
        isLoading: false,
        error: action.error
      })
    case ActionTypes.REMOVE_COURSE:
      return updateObject(state, {
        [action.payload._id]: undefined
      })
    case ActionTypes.UPDATE_COURSE:
      return updateObject(state, {
        [action.payload._id]: updateObject(state[action.payload._id], action.payload)
      })
    default: return state;
  }
}