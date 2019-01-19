import React from 'react'
import { Button } from 'reactstrap';

export default (props) => {
  const { gradebooks, selectGradebookForEditing } = props;
  return (
    <div>
      {gradebooks.gradebooks && gradebooks.gradebooks.map((gradebook) => {
        const { gradebookName, courseCommonName, gradePortions, associatedCourseId, assignmentsIdArray } = gradebook;
        return (
          <Button
            key={gradebookName}
            color="primary"
            onClick={() => selectGradebookForEditing(gradebook)}
          >
            {gradebookName}
          </Button>
        )
      })}
    </div>
  )
}