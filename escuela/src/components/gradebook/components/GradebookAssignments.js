import React from 'react'

export default (props) => {
  const { assignmentsArray } = props
  return (
    <ul>
      {assignmentsArray.map((assignment) => {
        const { assignmentId, gradePortionType, gradesAndFeedback } = assignment
        return (
          <li>
            <h6>assignmentId:{assignmentId}</h6>
            <h6>gradePortionType:{gradePortionType}</h6>
            <h5>gradesAndFeedback: [{}]</h5>
            <ol>
              {gradesAndFeedback.map(gradeFeedback => {
                const { studentId, grade, feedback } = gradeFeedback
                return (
                  <li>
                    <p>studentId: {studentId}</p>
                    <p>grade: {grade}</p>
                    <p>feedback: {feedback}</p>
                  </li>
                )
              })}
            </ol>
          </li>
        )
      })}
    </ul>
  )
}
