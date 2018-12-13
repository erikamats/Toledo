import React from 'react'

export default (props) => {
  const { students } = props
  const { isLoading, error } = students
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.students.map((student) => {
          const { id, firstName, lastName, gender, dateEnrolled, currentGradeLevel } = student
          return (
            <li key={id}>
              <h5>{firstName}{' '}{lastName}</h5>
              <p>Gender: {gender}</p>
              <p>Date Enrolled:
              {dateEnrolled
                  ? new Date(dateEnrolled).toDateString()
                  : ''}
              </p>
              <p>Current Grade Level: {currentGradeLevel}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}