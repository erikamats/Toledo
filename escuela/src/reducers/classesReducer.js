import { FETCH_CLASSES } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CLASSES:
      return action.payload.data;
    default:
      return state;
  }
}