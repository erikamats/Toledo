import * as ActionTypes from "../actions/types"

export default (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_GRADEBOOK_FOR_EDITING:
      return action.payload;

    default: return state;
  }
}