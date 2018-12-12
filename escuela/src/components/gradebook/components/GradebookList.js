import React from 'react'

export default (props) => {
  const { gradebooks, assignments } = props;
  return (
    <div>
      <ul>
        {gradebooks && Object.keys(gradebooks).map((gradebooksKey) => {
          if (gradebooksKey === 'isLoading' || gradebooksKey === 'error') { return null }
          const { id, courseCommonName, gradePortions, associatedCourseId, assignmentsIdArray } = gradebooks[gradebooksKey]
          return (
            <li key={id}>
              <h3>{courseCommonName}</h3>
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