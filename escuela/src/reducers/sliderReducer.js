import { FETCH_SLIDER } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_SLIDER:
      return action.payload.data;
    default:
      return state;
  }
}