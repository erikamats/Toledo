import React from 'react'

export default (props) => {
  const { gradePortions } = props
  return (
    <div>
      <h3>gradePortions</h3>
      <ul>{gradePortions.map(portion => (
        <li key={portion.portionName}>
          <h6>{portion.portionName}</h6>
          <p>{portion.gradeWeight0to1}</p>
        </li>
      ))}
      </ul>
    </div>
  )
}