import React from "react";
import { Row, Container } from "reactstrap";
import CardImg from "./cardImg";
import LandingCard from "./LandingCard";

export const Events = () => {
  return (
    <Container fluid >
      <Row className="justify-content-center events-sec">
        <LandingCard
          colClassName="col-5 px-auto "
          divClassName="text-center  bg-warning align-middle py-5  mr-1"
          headerText="Events"
          cardParagraph="The inside scoop on all events"
          href="/events"
          buttonColor="secondary"
          btnText="Got to Events"
          buttonClass="btn-md"
        />
    
        <CardImg
          src="https://images.unsplash.com/photo-1523958399470-c15bf82fcea9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24bc33ab52ef2dc36a177c25c24da122&auto=format&fit=crop&w=800&q=60"
          alt="events"
          className="col-5 h-25 ml-5"
        />
     
      </Row>
    </Container>
  );
};
export default Events;
