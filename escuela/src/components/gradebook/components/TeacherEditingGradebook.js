import React from 'react'
import {
  Container, Row, Col, Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText
} from 'reactstrap';

export default ({ gradebook, toggleViewEditGradebook }) => {
  const { gradebookName, gradePortions, associatedCourseId, studentsInGradebook, assignmentsInGradebook } = gradebook
  return (
    <Container>
      <div>
        <Button
          color="danger"
          onClick={() => { toggleViewEditGradebook() }}
        >Close Gradebook</Button>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <Card>

          <CardHeader>
            <h3>{gradebookName}</h3>
            <p>Course: {associatedCourseId.courseName}</p>
          </CardHeader>

          <CardBody>
            <CardTitle>Assignments Due</CardTitle>
            <CardText></CardText>
            <Button>Go to Assignment View</Button>
            {gradePortions.map(portion => {
              const { portionName, gradeWeight0to1 } = portion;
              return (
                <Button size="sm" key={portionName}>{portionName} {
                  `${((gradeWeight0to1) * 100).toFixed(0)}` + '%'
                }</Button>
              )
            })
            }
          </CardBody>

          <CardFooter className="text-muted">
          </CardFooter>
        </Card>
      </div>
      <div>
        <h2>Students</h2>
        {studentsInGradebook.map(student => {
          return (
            <Card key={student._id} body outline color="info">
              <CardTitle>{`${student.firstName} ${student.lastName}`}</CardTitle>
              <Row>
                {gradebook.assignmentsInGradebook.
                  filter(assignment => (
                    assignment.gradesAndFeedback.some(item => (
                      item.studentId._id === student._id
                    ))
                  ))
                  .map(assignment => {
                    return (
                      <Col key={assignment.assignmentId.assignmentName} xs="6" sm="4" className="text-primary" className="border border-primary">
                        <h6>{assignment.assignmentId.assignmentName}</h6>
                        {assignment.gradesAndFeedback.
                          filter(gradeAndFeedback => (
                            gradeAndFeedback.studentId._id === student._id
                          )).
                          map(gradeAndFeedback => {
                            return (
                              <CardText className="text-muted">Score: {gradeAndFeedback.grade}</CardText>
                            )
                          })
                        }
                      </Col>
                    )
                  })
                }
              </Row>
              <Button color="secondary">Button</Button>
            </Card>
          )
        })
        }
      </div>
    </Container>
  )
}
