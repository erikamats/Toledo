import React from 'react'

export default (props) => {
  const { students } = props;
  return (
    <div>
      <ul>
        {students && Object.keys(students).map((studentsKey) => {
          if (studentsKey === 'isLoading' || studentsKey === 'error') { return null }
          const { id, firstName, lastName, gender, dateEnrolled, currentGradeLevel } = students[studentsKey]
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