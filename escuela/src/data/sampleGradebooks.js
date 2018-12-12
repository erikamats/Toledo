export const gradebook1 = {
  id: 'gradebook1',
  associatedCourseId: 'course1',
  courseCommonName: 'Algorithmic Zen',
  gradePortions: [
    {
      portionName: 'Tests',
      gradeWeight0to1: '1',
    }
  ],
  studentsArray: [
    {
      id: 'student1',
      name: 'Erika'
    },
    {
      id: 'student2',
      name: 'Fernando'
    },
    {
      id: 'student3',
      name: 'John'
    }
  ],
  assignmentsIdArray: ['assignment1', 'assignment2']
}
export const gradebook2 = {
  id: 'gradebook2',
  associatedCourseId: 'course2',
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
  studentsArray: {
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
    },
    assignmentsById: ['assignment3', 'assignment4']
  },
}
export const gradebook3 = {
  id: 'gradebook3',
  associatedCourseId: 'course3',
  courseCommonName: 'World Geography 2',
  gradePortions: [
    {
      portionName: 'Homework',
      gradeWeight0to1: '0.30',
    },
    {
      portionName: 'Quizzes',
      gradeWeight0to1: '0.30',
    },
    {
      portionName: 'Tests',
      gradeWeight0to1: '0.40',
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
    },
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
  },
  assignmentsById: []
}
export const sampleGradebooks = {
  gradebook1,
  gradebook2,
  gradebook3
}