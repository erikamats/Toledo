import React from 'react'

export default (props) => {
  const { students } = props
  // const { isLoading, error } = students
  return (
    <div>
      <h2>Students List</h2>
      <ul>
        {students.students && students.students.map((student) => {
          const { _id, firstName, lastName, gender, dateEnrolled, currentGradeLevel } = student
          return (
            <li key={_id}>
              <p>{`${firstName} ${lastName} `}<b>Grade {currentGradeLevel}</b></p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}