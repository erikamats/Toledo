import React from 'react'
import { Button } from 'reactstrap';

export default (props) => {
  const { gradebooks } = props;
  return (
    <div>
      {gradebooks.gradebooks && gradebooks.gradebooks.map((gradebook) => {
        const { gradebookName, courseCommonName, gradePortions, associatedCourseId, assignmentsIdArray } = gradebook;
        return (
          <Button
            key={gradebookName}
            color="primary"
          >
            {gradebookName}
          </Button>
        )
      })}
    </div>
  )
}