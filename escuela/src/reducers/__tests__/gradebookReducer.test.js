import reducer from '../gradebookReducer'
import * as ActionTypes from '../../actions/types'

describe('gradebookReducer', () => {
  test('should initialize an empty object', () => {
    expect(reducer(undefined, {})).toEqual({})
  })

  test('should add a gradebook', () => {
    const initial = {}
    const after = {
      gradebook1: {
        id: 'gradebook1',
        associatedCourse: 'course1',
        courseCommonName: 'Algorithmic Zen',
        gradePortions: [
          {
            portionName: 'Tests',
            gradeWeight0to1: '1',
          }
        ],
        studentsById: {
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
    const gradebookToAdd = {
      id: 'gradebook1',
      associatedCourse: 'course1',
      courseCommonName: 'Algorithmic Zen',
      gradePortions: [
        {
          portionName: 'Tests',
          gradeWeight0to1: '1',
        }
      ],
      studentsById: {
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
      type: ActionTypes.ADD_GRADEBOOK,
      payload: gradebookToAdd,
    }
    expect(reducer(initial, testAction)).toEqual(after)
  })
  test('should remove a gradebook ', () => {
    const before = {
      gradebook1: {
        id: 'gradebook1',
        associatedCourse: 'course1',
        courseCommonName: 'Algorithmic Zen',
        gradePortions: [
          {
            portionName: 'Tests',
            gradeWeight0to1: '1',
          }
        ],
        studentsById: {
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
      },
      gradebook2: {
        id: 'gradebook2',
        associatedCourse: 'course2',
        courseCommonName: 'Catapult Construction',
        gradePortions: [
          {
            portionName: 'Quizzes',
            gradeWeight0to1: '0.20',
          },
          {
            portionName: 'Labs',
            gradeWeight0to1: '0.80',
          }
        ],
        studentsById: {
          'student4': {
            id: 'student4',
            name: 'Sean'
          },
          'student5': {
            id: 'student5',
            name: 'Sue'
          },
          'student6': {
            id: 'student6',
            name: 'Arrow'
          }
        }
      }
    }
    const after = {
      gradebook1: {
        id: 'gradebook1',
        associatedCourse: 'course1',
        courseCommonName: 'Algorithmic Zen',
        gradePortions: [
          {
            portionName: 'Tests',
            gradeWeight0to1: '1',
          }
        ],
        studentsById: {
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
    const gradebookIdToRemove = { id: 'gradebook2' }
    const testAction = {
      type: ActionTypes.REMOVE_GRADEBOOK,
      payload: gradebookIdToRemove
    }
    expect(reducer(before, testAction)).toEqual(after)
  })
})
test('should update a gradebook', () => {
  const before = {
    gradebook1: {
      id: 'gradebook1',
      associatedCourse: 'course1',
      courseCommonName: 'Algorithmic Zen',
      gradePortions: [
        {
          portionName: 'Tests',
          gradeWeight0to1: '1',
        }
      ],
      studentsById: {
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
  const after = {
    gradebook1: {
      id: 'gradebook1',
      associatedCourse: 'course1',
      courseCommonName: 'Algorithmic Zen',
      gradePortions: [
        {
          portionName: 'Tests',
          gradeWeight0to1: '0.25',
        },
        {
          portionName: 'Quizzes',
          gradeWeight0to1: '0.75',
        },
      ],
      studentsById: {
        'student3': {
          id: 'student3',
          name: 'John'
        }
      }
    }
  }
  const updatedGradebook = {
    id: 'gradebook1',
    gradePortions: [
      {
        portionName: 'Tests',
        gradeWeight0to1: '0.25',
      },
      {
        portionName: 'Quizzes',
        gradeWeight0to1: '0.75',
      },
    ],
    studentsById: {
      'student3': {
        id: 'student3',
        name: 'John'
      }
    }
  }
  const testAction = {
    type: ActionTypes.UPDATE_GRADEBOOK,
    payload: updatedGradebook
  }
  expect(reducer(before, testAction)).toEqual(after)
})