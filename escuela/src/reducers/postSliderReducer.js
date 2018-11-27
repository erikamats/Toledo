import { POST_SLIDER } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case POST_SLIDER:
      return action.payload.data;
    default:
      return state;
  }
}