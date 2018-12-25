import React from "react";
import AssignmentForm from "./components/AssignmentForm";
import "./assignment.css";
import AssignmentCard from "./components/AssignmentCard";
import { Container, Row } from "reactstrap";
import AssignmentList from "./components/AssignmentList";
// import { assignment1 } from "data/sampleAssignments";

export default (props) => {
 
    const { onGetAssignments, assignments} = props;
    return (
      <Container fluid className="assignment-container">
        <Row>
          <div className="col-5 mx-5">
            <AssignmentForm
              onSubmit={() => (
                onGetAssignments() 
                )}
              formHeading="Create Assignment"
            />
          </div>
          <div className="verticalLine" />
          <div className="col-5 ml-5 viewassigment">
            <AssignmentCard />
          </div>
        </Row>
        <Row>
          <AssignmentList assignments={assignments}/>
        </Row>
      </Container>

      //close return
    );
    //close render
  }
  //close class
// }
