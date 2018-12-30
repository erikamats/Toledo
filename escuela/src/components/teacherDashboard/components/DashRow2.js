import React from "react";
import LandingCard from "./../../common/LandingCard";
import { Row, Col } from "reactstrap";
import moment from "moment";

const DashRow2 = () => {
  return (
    <Row className="dashRow-2">
      <Col lg="3">
        <LandingCard
          colClassName="col-12"
          divClassName="text-center py-3"
          style={{
            backgroundColor: "white",
            border: "2px solid",
            borderColor: "#65b12d",
            borderRadius: "5px",
            color: "#00000"
          }}
          dashHeaderText="Today's Attendance "
          date={moment().format("dddd, MMMM Do YYYY")}
          secondHeader="Absent:"
          secondHeaderClassName=" pt-2"
          subHeaderClassName="text-warning"
          subHeader="2/20"
          href="/attendance"
          btnText="Edit Attendance"
          buttonClass="btn btn-md col-10"
        />
      </Col>
      <Col lg="3">
        <LandingCard
          colClassName="col-12"
          divClassName="text-center py-3"
          style={{
            backgroundColor: "white",
            border: "2px solid",
            borderColor: "#44CAE8",
            borderRadius: "5px",
            color: "#000000"
          }}
          dashHeaderText="Constellation Homework"
          subText="Due 11/9"
          // date={moment().format('dddd, MMMM Do')}
          secondHeader="Avg Grade:"
          secondHeaderClassName=" pt-2"
          subHeaderClassName="text-default"
          subHeader="85%"
          href="/gradebook"
          btnText="Edit Grades"
          buttonClass="btn btn-md col-10"
        />
      </Col>
      <Col lg="3">
        <LandingCard
          colClassName="col-12"
          divClassName="text-center py-3"
          style={{
            backgroundColor: "white",
            border: "2px solid",
            borderColor: "#933ec5",
            borderRadius: "5px",
            color: "#000000"
          }}
          dashHeaderText="Constellation Quiz"
          subText="Due 11/12"
          // date={moment().format('dddd, MMMM Do')}
          secondHeader="Avg Grade:"
          secondHeaderClassName=" pt-2"
          subHeaderClassName="text-default"
          subHeader="--"
          href="/gradebook"
          btnText="Edit Grades"
          buttonClass="btn btn-md col-10"
        />
      </Col>
      <Col lg="3">
        <LandingCard
          colClassName="col-12"
          divClassName="text-center py-3"
          style={{
            backgroundColor: "white",
            border: "2px solid",
            borderColor: "#ff5722",
            borderRadius: "5px",
            color: "#000000"
          }}
          dashHeaderText="Constellation Exam"
          subText="Due 11/12"
          // date={moment().format('dddd, MMMM Do')}
          secondHeader="Avg Grade:"
          secondHeaderClassName=" pt-2"
          subHeaderClassName="text-default"
          subHeader="--"
          href="/gradebook"
          btnText="Edit Grades"
          buttonClass="btn btn-md col-10"
        />
      </Col>
    </Row>
  );
};
export default DashRow2;