const gradebookFunctions = require('./gradebookFunctions');
<<<<<<< HEAD

it('expects 1 to be 2, destined for failure', () => {
  expect(1).toBe(2);
})
=======
import { createGradebook, addStudent } from './gradebookFunctions';
describe('the gradebook', () => {


  test('initializes', () => {
    expect(createGradebook()) == {
      enrolledStudents: [],
      gradeComponents: [],
      assignments: []
    }
  })
  test('adds students', () => {
    const sampleStudent = {
      _id: '58c039938060197ca0b52d4d',
      firstName: 'Erika',
      lastName: 'Matsumoto',
      gender: 'female',
      dateEnrolled: new Date('01/03/2018'),
      currentGradeLevel: 11,
    }
    expect(createGradebook().addStudent(sampleStudent)) == {
      enrolledStudents: [
        {
          _id: '58c039938060197ca0b52d4d',
          firstName: 'Erika',
          lastName: 'Matsumoto',
          gender: 'female',
          dateEnrolled: new Date('01/03/2018'),
          currentGradeLevel: 11,
        }
      ],
      gradeComponents: [],
      assignments: []
    }
  })

})

>>>>>>> ea74e88ffab16f137457c2e0dc5e5dc5df7ecde9
