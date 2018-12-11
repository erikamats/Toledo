import React from "react";
import { Container, Row } from "reactstrap";
import LandingCard from "./LandingCard";

const Enroll = () => {
  return (
    <Container fluid>
      <Row>
        <LandingCard
          colClassName="enroll-box"
          divClassName="transparent-wrapper one"
          headerText="CALL TO ACTION"
          cardParagraph="What else can be important. "
          href="/register"
          buttonColor="warning"
          btnText="Take Action"
        />

        <LandingCard
          colClassName="other-box"
          divClassName="transparent-wrapper two"
          headerText="ENROLL NOW"
          cardParagraph="Next session begings Jan 2019"
          href="/register"
          buttonColor="warning"
          btnText="Register Now"
        />

      </Row>
    </Container>
  );
};

export default Enroll;
