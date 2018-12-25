import React from 'react'

export default (props) => {
  const { assignments } = props
   return (
    <div>
    {/* <ul>
        {assignments.assignments && assignments.assignments.map((assignment) => {
          const { id, name, description, associatedCourseId } = assignment
          return (
            <li key={id}>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>associatedCourseId: {associatedCourseId}</p>
            </li>
          )
        })}
      </ul> */}
      <ul>
        {assignments && Object.keys(assignments).map((assignment) => {
          if (assignment === 'isLoading' || assignment === 'error') { return null }
          const { id, name, description, associatedCourseId } = assignment
          return (
            <li key={id}>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>associatedCourseId: {associatedCourseId}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}