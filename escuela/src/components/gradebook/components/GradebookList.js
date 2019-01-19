import React from 'react'

export default (props) => {
  const { gradebooks, assignments } = props;
  return (
    <div>
      <ul>
        {gradebooks.gradebooks && gradebooks.gradebooks.map((gradebook) => {
          const { gradebookName, gradePortions, associatedCourseId, assignmentsInGradebook } = gradebook;
          return (
            <li key={gradebookName}>
              <h3>{gradebookName}</h3>
              <p>associatedCourseId: {associatedCourseId}</p>
              <h5>gradePortions</h5>
              <ul>{gradePortions.map(portion => (
                <li key={portion.portionName}>
                  <h6>{portion.portionName}</h6>
                  <p>{portion.gradeWeight0to1}</p>
                </li>
              ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}