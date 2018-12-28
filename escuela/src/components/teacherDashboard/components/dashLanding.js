import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  CardTitle,
  CardText,
  CardHeader,
  CardBody
} from "reactstrap";
export const DashLanding = () => {
  return (
    <div className="dashgridmain">

      <Row className="dashMainTitle dashRow-1">
        <Col lg="8">
          <h1>Teacher Dashboard</h1>
        </Col>
        <Col lg="4">
          <button>Logout</button>
        </Col>
      </Row>

      <Row className="dashRow-2">
        <Col lg="3">
          <Card body inverse color="success" className="text-center">
            <CardTitle>Today's Attendance</CardTitle>
            <h6> Monday, November 10, 2018</h6>
            <CardText>
              <h4>Absent:</h4>
              <h1 className="text-warning">2/20</h1>
            </CardText>
            <Button color="secondary">Edit Attendance</Button>
          </Card>
        </Col>
        <Col lg="3">
          <Card body inverse color="info" className="text-center">
            <CardTitle>Constellation Homework</CardTitle>
            <CardText>
              <h6>Due 11/5</h6>
              <h4>Avg Grade:</h4>
              <h1> 85%</h1>
            </CardText>
            <Button color="secondary">Enter Grades</Button>
          </Card>
        </Col>
        <Col lg="3">
          <Card body inverse color="warning" className="text-center">
            <CardTitle>Constellations Quiz</CardTitle>
            <CardText>
              <h6>Due 11/12</h6>
              <h4>Avg Grade:</h4>
              <h1> --</h1>
            </CardText>
            <Button color="secondary">Enter Grades</Button>
          </Card>
        </Col>
        <Col lg="3">
          <Card body inverse color="danger" className="text-center">
            <CardTitle>Constellations Exam</CardTitle>
            <CardText>
              <h6>Due 11/15</h6>
              <h4>Avg Grade:</h4>
              <h1> --</h1>
            </CardText>
            <Button color="secondary">Enter Grades</Button>
          </Card>
        </Col>
      </Row>

      <Row className="dashRow-3">
        <Col lg="6">
          <Card
            body
            inverse
            style={{ backgroundColor: "#333", borderColor: "#333" }}
            className="text-center"
          >
            <h3>Today's Lesson</h3>
            <h5>Topic: Constellations </h5>
            <h6>Chapter: 10</h6>
          </Card>
        </Col>
        <Col lg="6">
          <Card
            body
            invers
            style={{ borderColor: "#333" }}
            className="text-center"
          >
            <h3>Assignments Due Today</h3>
            <h5>Stars Homework</h5>
            <h6>Chapter: 10</h6>
          </Card>
        </Col>
      </Row>
      <Row className="dashRow-4">
        <Col lg={{ size: "5" }}>
          <div id="calendar" />
        </Col>
        <Col lg={{ size: "3" }}>
          <Card body className="text-center">
            <CardTitle>Reminders/Notes</CardTitle>
            <CardText>
              <ul>
                <li>
                  {" "}
                  <h4>List item 1</h4>
                </li>
                <li>
                  {" "}
                  <h4>List item 2</h4>
                </li>
                <li>
                  {" "}
                  <h4>List item 3</h4>
                </li>
                <li>
                  {" "}
                  <h4>List item 4</h4>
                </li>
                <li>
                  {" "}
                  <h4>List item 5</h4>
                </li>
                <li>
                  {" "}
                  <h4>List item 6</h4>
                </li>
              </ul>
            </CardText>
            <Button>New Reminder/Note</Button>
          </Card>
        </Col>

        <Col lg={{ size: "3" }}>
          <Card>
            <CardHeader>
              <h3>Birthdays</h3>
            </CardHeader>
            <CardBody>
              <CardText>
                <Col lg="6" className="float-left">
                  <p> Today</p>
                  <p> 11/15</p>
                  <p> 11/16</p>
                </Col>
                <Col lg="6" className="float-right">
                  <p>Erika</p>
                  <p>Kevin</p>
                  <p> Maria</p>
                </Col>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashLanding;
