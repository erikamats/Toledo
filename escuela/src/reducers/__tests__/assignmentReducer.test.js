import reducer from '../assignmentReducer'
import * as ActionTypes from '../../actions/types'

describe('assignmentReducer', () => {
  test('should initialize an empty object', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  test('should add an assignment', () => {
    const before = {}
    const after = {
      assignment1: {
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
        }
      }
    }
    const assignmentToAdd = {
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
      }
    }
    const testAction = {
      type: ActionTypes.ADD_ASSIGNMENT,
      payload: assignmentToAdd
    }
    expect(reducer(before, testAction)).toEqual(after)
  })
  test('should remove an assignment ', () => {
    const before = {
      assignment1: {
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
      },
      assignment2: {
        id: 'assignment2',
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
    }
    const after = {
      assignment2: {
        id: 'assignment2',
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
    }
    const assignmentToRemove = { id: 'assignment1' }
    const testAction = {
      type: ActionTypes.REMOVE_ASSIGNMENT,
      payload: assignmentToRemove
    }
    expect(reducer(before, testAction)).toEqual(after)
  })
  test('should update an assignment ', () => {
    const before = {
      assignment1: {
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
      },
      assignment2: {
        id: 'assignment2',
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
    }
    const updatedAssignment = {
      id: 'assignment2',
      name: 'NEW Name!',
      associatedGradebookById: 'gradebook3',
      studentsAssignedToById: {
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
    const after = {
      assignment1: {
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
      },
      assignment2: {
        id: 'assignment2',
        name: 'NEW Name!',
        associatedGradebookById: 'gradebook3',
        studentsAssignedToById: {
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
    }
    const testAction = {
      type: ActionTypes.UPDATE_ASSIGNMENT,
      payload: updatedAssignment
    }
    expect(reducer(before, testAction)).toEqual(after)
  })
})
