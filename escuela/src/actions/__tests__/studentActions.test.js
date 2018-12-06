import * as ActionTypes from '../types'
import {
  addStudent,
  removeStudent,
  updateStudent,
} from '../index'

const testStudent = {
  id: 'student1',
  firstName: 'Erika',
  lastName: 'Matsumoto',
  gender: 'female',
  dateEnrolled: new Date('01/03/2018'),
  currentGradeLevel: 11,
}
describe('ADD_STUDENT', () => {
  test('should create action to add student object to another object', () => {
    const expectedAction = {
      type: ActionTypes.ADD_STUDENT,
      payload: testStudent
    }
    expect(addStudent(testStudent)).toEqual(expectedAction)
  })

})
describe('REMOVE_STUDENT', () => {
  test('should create action to remove student object by id from another object', () => {
    const testId = 'student3'
    const expectedAction = {
      type: ActionTypes.REMOVE_STUDENT,
      payload: { id: testId }
    }
    expect(removeStudent(testId)).toEqual(expectedAction)
  })

})
describe('UPDATE_STUDENT', () => {
  test('should create action to update gradebook object on another object', () => {
    const expectedAction = {
      type: ActionTypes.UPDATE_STUDENT,
      payload: testStudent
    }
    expect(updateStudent(testStudent)).toEqual(expectedAction)
  })
})
