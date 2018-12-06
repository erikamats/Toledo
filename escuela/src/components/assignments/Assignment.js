import React, { Component } from "react";
import AssignmentForm from "./AssignmentForm";
import "./assignment.css";
import AssignmentCard from "./AssignmentCard";
import { Container, Row } from "reactstrap";

export default class Assignment extends Component {



  handleSubmit (e){
    e.preventDefault();
    console.log(e.name);
    console.log(e.value);
  }
  render() {
    return (
      <Container fluid className="assignment-container">
        <Row>
        <div className="col-5 mx-5">
          <AssignmentForm
            onSubmit={this.handleSubmit} 
            formHeading="Create Assignment"
            />
          </div>
          <div className="verticalLine" />
          <div className="col-5 ml-5 viewassigment">
            <AssignmentCard />
          </div>
        </Row>
      </Container>

      //close return
    );
    //close render
  }
  //close class
}
