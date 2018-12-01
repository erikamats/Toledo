import { FETCH_USERS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data.sampleStudents;
    default:
      return state;
  }
}