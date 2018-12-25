exports.gradbook1 = {
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
exports.gradebook2 = {
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
    }
  }
}
exports.gradebook3 = {
  id: 'gradebook3',
  associatedCourse: 'course3',
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
  }
}
exports.sampleGradebooks = {
  gradebook1: exports.gradbook1,
  gradebook2: exports.gradbook2,
  gradebook3: exports.gradbook3
}