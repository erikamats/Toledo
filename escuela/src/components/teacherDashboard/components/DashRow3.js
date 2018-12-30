import React from "react";
import LandingCard from "./../../common/LandingCard";
import { Row, Col } from "reactstrap";

const DashRow3 = () => {
  return (
    <Row className="dashRow-3">
      <Col lg="6">
        <LandingCard
          colClassName="col-12"
          divClassName="text-center pt-4"
          style={{
            backgroundColor: "#fec607",
            border: "2px solid",
            borderColor: "goldenrod",
            borderRadius: "5px",
            color: "#ffffff"
          }}
          headerText="Today's Lesson Plan"
          dashHeaderText="Constellations"
          cardParagraph="Chapter:10"
          href="/courses"
          buttonClass="d-none"
        />
      </Col>
      <Col lg="6">
        <LandingCard
          colClassName="col-12"
          divClassName="text-center pt-4"
          style={{
            backgroundColor: "#76c2af",
            border: "2px solid",
            borderColor: "#31af91",
            borderRadius: "5px",
            color: "#ffffff"
          }}
          headerText="Assignments Due Today"
          dashHeaderText="Stars Homework"
          cardParagraph="Chapter:10"
          href="/courses"
          buttonClass="d-none"
        />
        {/* <Card
        body
        inverse
        style={{ backgroundColor: "#F775D7", borderColor: "#F78BD7" }}
        className="text-center"
      >
        <h3>Assignments Due Today</h3>
        <h5>Stars Homework</h5>
        <h6>Chapter: 10</h6>
      </Card> */}
      </Col>
    </Row>
  );
};
export default DashRow3;
