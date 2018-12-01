import React from "react";
import { Row, Card, CardTitle, CardText } from "reactstrap";

const AssignmentCard = () => {
  return (
    <Row>
      <div>
        <h3> View Assignments</h3>
        <h6> Mapping of assignment cards will happen here</h6>
      </div>

      <Card body className="col-12 bg-light">
        <CardTitle className="text-success">
          Assignment Name
          {/* {this.props.LessonPlan} {this.props.AssignmentName} */}
        </CardTitle>
        <CardText>
          <p> Instructions : blah blah </p>

          {/* <p>Instruction: {this.props.instructions} </p> */}
          <p> Due Date: Time and Date </p>

          {/* <p>Due Date: {this.props.dueDate}  {this.props.dueTime}</p> */}
        </CardText>
      </Card>
    </Row>

    //close return
  );
  // close const
};

export default AssignmentCard;
