import React from "react";
import { Row, Col, Button } from "reactstrap";
import Calendar, { External } from "./Calendar";

const DashRow4 = () => {
  return (
    <Row className="dashRow-4">
      {/* <Col lg="6"> */}
      <Col lg="2">
        <External />
      </Col>
      <Col lg="4">
        <Calendar />
      </Col>
      {/* </Col> */}
      <Col lg="3">
        <div className="white-box" style={{ backgroundColor: "lightyellow" }}>
          <h4 className="box-title">
            {" "}
            Notes &nbsp; <i class="fas fa-vote-yea" />
          </h4>
          <ul className="basic-list">
            <li>Note Item</li>
            <li>
              A Note
              <span className="float-right">
                <i class="fas fa-trash-alt" />
              </span>
            </li>
            <li>
              Another Note
              <span className="float-right">
                <i class="fas fa-trash-alt" />
              </span>
            </li>
            <li>
              Another Note
              <span className="float-right">
                <i class="fas fa-trash-alt" />
              </span>
            </li>
          </ul>
          <Button className="mt-3 col-10 offset-1"> New Item</Button>
        </div>
      </Col>

      <Col lg="3">
        <div className="white-box">
          <h4 className="box-title">
            Birthdays &nbsp;<i class="fas fa-gift" />
          </h4>
          <ul className="basic-list">
            <li>
              Student Name
              <span className="float-right label ">Date</span>
            </li>
            <li>
              Erika
              <span className="float-right label">11/3</span>
            </li>
            <li>
              John
              <span className="float-right label">11/4</span>
            </li>
            <li>
              Daniel
              <span className="float-right label">11/5</span>
            </li>
            <li>
              Fernando
              <span className="float-right label">11/30</span>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
};
export default DashRow4;
