import * as ActionTypes from '../types'
import {
  addGradebook, removeGradebook,
  updateGradebook
} from '../index'

const testGradebook = {
  id: 'gradebook1',
  associatedCourse: 'course1',
  courseCommonName: 'Algorithmic Zen',
  gradePortions: [
    {
      portionName: 'Tests',
      gradeWeight0to1: '1',
    }
  ],
  studentsArray: {
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
  }
}
describe('ADD_GRADEBOOK', () => {
  test('should create action to add gradebook object to another object', () => {
    const expectedAction = {
      type: ActionTypes.ADD_GRADEBOOK,
      payload: testGradebook
    }
    expect(addGradebook(testGradebook)).toEqual(expectedAction)
  })

})
describe('REMOVE_GRADEBOOK', () => {
  test('should create action to remove gradebook object by id from another object', () => {
    const testId = 'gradebook3'
    const expectedAction = {
      type: ActionTypes.REMOVE_GRADEBOOK,
      payload: { id: testId }
    }
    expect(removeGradebook(testId)).toEqual(expectedAction)
  })

})
describe('UPDATE_GRADEBOOK', () => {
  test('should create action to update gradebook object on another object', () => {
    const expectedAction = {
      type: ActionTypes.UPDATE_GRADEBOOK,
      payload: testGradebook
    }
    expect(updateGradebook(testGradebook)).toEqual(expectedAction)
  })
})
