import React from 'react'

export default (props) => {
  const { gradebooks, assignments } = props;
  return (
    <div>
      <ul>
        {gradebooks.gradebooks && gradebooks.gradebooks.map((gradebook) => {
          const { _id, name, associatedCourse, studentsInClass } = gradebook
          return (
            <li key={_id}>
              <h3>{name}</h3>
              <p>For course: {associatedCourse.courseName}</p>
              <h6>Students in Class</h6>
              <ul>
                {studentsInClass.map((student) => (<li key={student._id}>{`${student.firstName} ${student.lastName}`}</li>))}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}