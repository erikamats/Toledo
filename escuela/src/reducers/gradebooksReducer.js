import {
  ADD_GRADEBOOK_BY_ID,
  REMOVE_GRADEBOOK_BY_ID,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_GRADEBOOK_BY_ID:
      return [...state, {
        id: action.id,
      }];
    case REMOVE_GRADEBOOK_BY_ID:
      return state
    default: return state;
  }

}


