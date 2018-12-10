import React from "react";
import { Row, Container } from "reactstrap";
import CardImg from "./cardImg";
import LandingCard from "./LandingCard";

export const Events = () => {
  return (
    <Container fluid className="event-container">
      <div className="white-filler " />
      <div className="events-sec">
        <CardImg
          src="https://res.cloudinary.com/matsi/image/upload/v1544417005/Toledo/bernard-hermant-665070-unsplash.jpg"
          alt="events"
          className="col-5  hands"
        />

        <LandingCard
          colClassName="col-5 offset-1 events"
          divClassName="text-center  bg-warning py-5 "
          headerText="Events"
          cardParagraph="The inside scoop on all events"
          href="/events"
          buttonColor="secondary"
          btnText="Got to Events"
          buttonClass="btn-md"
        />
      </div>
    </Container>
  );
};
export default Events;
