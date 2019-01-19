import React from 'react'
import { Button } from 'reactstrap';

export default (props) => {
  const { gradebooks, selectGradebookForEditing, toggleViewEditGradebook } = props;
  return (
    <div>
      {gradebooks.gradebooks && gradebooks.gradebooks.map((gradebook) => {
        const { gradebookName, gradePortions, associatedCourseId, assignmentsInGradebook } = gradebook;
        return (
          <Button
            key={gradebookName}
            color="primary"
            onClick={() => {
              toggleViewEditGradebook();
              selectGradebookForEditing(gradebook);
            }}
          >
            {gradebookName}
          </Button>
        )
      })}
    </div>
  )
}