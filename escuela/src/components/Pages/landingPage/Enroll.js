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
          cardParagraph="What else can be important. Link should go to /Register"
          href="/register"
          buttonColor="danger"
        />

        <LandingCard
          colClassName="other-box"
          divClassName="transparent-wrapper two"
          headerText="ENROLL NOW"
          cardParagraph="Next session begings Jan 2019"
          href="/register"
          buttonColor="danger"
        />

      </Row>
    </Container>
  );
};

export default Enroll;
