import React from "react";
import {
  Row,
  Col,
  // Card,
  // Button,
  // CardTitle,
  // CardText,
  // CardHeader,
  // CardBody
} from "reactstrap";
import DashRow2 from "./DashRow2";
import DashRow3 from "./DashRow3";
import DashRow4 from "./DashRow4";

import "./Calendar.css";

export default class DashLanding extends React.Component {
  render() {
    return (
      <div className="dashgridmain">
        <Row className="dashMainTitle dashRow-1 ">
          <Col lg="8">
            <h1>Dashboard</h1>
          </Col>
          <Col lg="4" className="text-right">
            <h5>LogOut</h5>
          </Col>
        </Row>
        <DashRow2 />
        <DashRow3 />
        <DashRow4/>
      </div>
    );
  }
}
