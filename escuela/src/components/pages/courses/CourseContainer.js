import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default function CourseContainer({ course, deleteCourse }){
    return (           
    <Row>
      <Col sm="3">
        <Card body>
          <CardTitle>{course.name}</CardTitle>
          <CardText>{course.subject}</CardText>
          <Link to={`/courses/${course._id}`}>
            <Button color="primary" size="sm" block>Edit Course</Button>
          </Link>
          <Button color="danger" size="sm" block onClick={() => deleteCourse(course._id)}>Delete Course</Button>
        </Card>
      </Col>
    </Row>
    )
}