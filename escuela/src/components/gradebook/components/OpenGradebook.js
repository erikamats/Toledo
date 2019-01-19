import React from 'react'
import { Button } from 'reactstrap';

export default ({ gradebook, toggleViewEditGradebook }) => {
  const { _id, gradebookName, gradePortions, associatedCourseId, assignmentsInGradebook } = gradebook
  return (
    <section>
      <div>
        <Button
          color="danger"
          onClick={() => { toggleViewEditGradebook() }}
        >&times;</Button>
      </div>
      <div key={_id}>
        <h1>{gradebookName}</h1>
        <p>associatedCourseId: {associatedCourseId}</p>
      </div>
    </section>
  )
}
