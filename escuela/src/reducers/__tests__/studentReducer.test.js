import reducer from '../studentReducer'
import * as ActionTypes from '../../actions/types'

describe('studentReducer', () => {
  test('should initialize an empty object', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  test('should add a student', () => {

    const before = {
      student1: {
        id: 'student1',
        firstName: 'Erika',
        lastName: 'Matsumoto',
        gender: 'female',
        dateEnrolled: new Date('01/03/2018'),
        currentGradeLevel: 11,
      }
    }
    const studentToAdd = {
      id: 'student2',
      firstName: 'Fernando',
      lastName: 'Garcia',
      gender: 'male',
      dateEnrolled: new Date('06/07/2016'),
      currentGradeLevel: 11,
    }
    const testAction = {
      type: ActionTypes.ADD_STUDENT,
      payload: studentToAdd
    }
    const after = {
      student1: {
        id: 'student1',
        firstName: 'Erika',
        lastName: 'Matsumoto',
        gender: 'female',
        dateEnrolled: new Date('01/03/2018'),
        currentGradeLevel: 11,
      },
      student2: {
        id: 'student2',
        firstName: 'Fernando',
        lastName: 'Garcia',
        gender: 'male',
        dateEnrolled: new Date('06/07/2016'),
        currentGradeLevel: 11,
      }
    }
    expect(reducer(before, testAction)).toEqual(after)
  })
  test('should remove a student by Id', () => {
    const before = {
      student1: {
        id: 'student1',
        firstName: 'Erika',
        lastName: 'Matsumoto',
        gender: 'female',
        dateEnrolled: new Date('01/03/2018'),
        currentGradeLevel: 11,
      },
      student2: {
        id: 'student2',
        firstName: 'Fernando',
        lastName: 'Garcia',
        gender: 'male',
        dateEnrolled: new Date('06/07/2016'),
        currentGradeLevel: 11,
      },
      student3: {
        id: 'student3',
        firstName: 'John',
        lastName: 'Moen',
        gender: 'male',
        dateEnrolled: new Date('12/10/2018'),
        currentGradeLevel: 11,
      }
    }
    const idToRemove = { id: 'student2' }
    const testAction = {
      type: ActionTypes.REMOVE_STUDENT,
      payload: idToRemove
    }
    const after = {
      student1: {
        id: 'student1',
        firstName: 'Erika',
        lastName: 'Matsumoto',
        gender: 'female',
        dateEnrolled: new Date('01/03/2018'),
        currentGradeLevel: 11,
      },
      student3: {
        id: 'student3',
        firstName: 'John',
        lastName: 'Moen',
        gender: 'male',
        dateEnrolled: new Date('12/10/2018'),
        currentGradeLevel: 11,
      }
    }
    expect(reducer(before, testAction)).toEqual(after)
  })
  test('should update a student ', () => {
    const before = {
      student1: {
        id: 'student1',
        firstName: 'Erika',
        lastName: 'Matsumoto',
        gender: 'female',
        dateEnrolled: new Date('01/03/2018'),
        currentGradeLevel: 11,
      },
      student2: {
        id: 'student2',
        firstName: 'Fernando',
        lastName: 'Garcia',
        gender: 'male',
        dateEnrolled: new Date('06/07/2016'),
        currentGradeLevel: 11,
      }
    }
    const updatedStudent = {
      id: 'student2',
      firstName: 'NEWNAME',
      lastName: 'NEWNAME',
      dateEnrolled: new Date('06/07/2017'),
    }
    const after = {
      student1: {
        id: 'student1',
        firstName: 'Erika',
        lastName: 'Matsumoto',
        gender: 'female',
        dateEnrolled: new Date('01/03/2018'),
        currentGradeLevel: 11,
      },
      student2: {
        id: 'student2',
        firstName: 'NEWNAME',
        lastName: 'NEWNAME',
        dateEnrolled: new Date('06/07/2017'),
        gender: 'male',
        currentGradeLevel: 11,
      }
    }
    const testAction = {
      type: ActionTypes.UPDATE_STUDENT,
      payload: updatedStudent
    }
    expect(reducer(before, testAction)).toEqual(after)
  })
})
