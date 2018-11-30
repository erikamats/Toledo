import { FETCH_CLASSES, DELETE_STUDENT } from '../actions/types';


export default ( state = [], action ) => {
    switch(action.type) {
        case FETCH_CLASSES:
            return action.payload.data.sampleStudents;
        case DELETE_STUDENT:
            return {students: state.students.filter(student => student !== action.payload.data.sampleStudents)}  
        default:
        return state;
    }
}