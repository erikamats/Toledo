import React from 'react'

export default (props) => {
  const { students } = props;
  return (
    <div>
      <ul>
        {students && students.map(student => (
          <li key={student.id}>
            <h5>{student.firstName}{' '}{student.lastName}</h5>
            <p>Gender: {student.gender}</p>
            <p>Date Enrolled: {student.dateEnrolled.toDateString()}</p>
            <p>Current Grade Level: {student.currentGradeLevel}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
