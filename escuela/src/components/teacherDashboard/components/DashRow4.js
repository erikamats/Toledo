import React from "react";
import {  Row,
    Col,
    Card,
    Button,
    CardTitle,
    CardText,
    CardHeader,
    CardBody } from "reactstrap";
import Calendar, { External } from "./Calendar";


const DashRow4 = () => {
  return (
    <Row className="dashRow-4">
          <Col lg={{ size: "2" }}>
            <External />
          </Col>
          <Col lg={{ size: "4" }}>
            <Calendar />
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
  );
};
export default DashRow4;