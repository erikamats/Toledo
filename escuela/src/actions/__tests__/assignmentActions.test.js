import * as ActionTypes from '../types'
import {
  addAssignment,
  removeAssignment,
  updateAssignment
} from '../index'

const testAssignment = {
  id: 'assignment1',
  name: 'Incrementing and Decrementing worksheet',
  associatedGradebookById: 'gradebook1',
  studentsAssignedToById: {
    'student1': {
      id: 'student1',
      name: 'Erika'
    },
    'student2': {
      id: 'student2',
      name: 'Fernando'
    },
    'student3': {
      id: 'student3',
      name: 'John'
    }
  },
}
describe('ADD_ASSIGNMENT', () => {
  test('should create action to add gradebook object to another object', () => {
    const expectedAction = {
      type: ActionTypes.ADD_ASSIGNMENT,
      payload: testAssignment
    }
    expect(addAssignment(testAssignment)).toEqual(expectedAction)
  })

})
describe('REMOVE_ASSIGNMENT', () => {
  test('should create action to remove gradebook object by id from another object', () => {
    const testId = 'assignment3'
    const expectedAction = {
      type: ActionTypes.REMOVE_ASSIGNMENT,
      payload: { id: testId }
    }
    expect(removeAssignment(testId)).toEqual(expectedAction)
  })

})
describe('UPDATE_ASSIGNMENT', () => {
  test('should create action to update gradebook object on another object', () => {
    const expectedAction = {
      type: ActionTypes.UPDATE_ASSIGNMENT,
      payload: testAssignment
    }
    expect(updateAssignment(testAssignment)).toEqual(expectedAction)
  })
})
