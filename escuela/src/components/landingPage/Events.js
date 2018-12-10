import React from "react";
import { Row, Container } from "reactstrap";
import CardImg from "./CardImg";
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
<<<<<<< HEAD:escuela/src/components/Pages/landingPage/Events.js
=======

        <CardImg
          src="https://images.unsplash.com/photo-1523958399470-c15bf82fcea9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=24bc33ab52ef2dc36a177c25c24da122&auto=format&fit=crop&w=800&q=60"
          alt="events"
          className="col-5 h-25 ml-5"
        />

>>>>>>> f76e130074266b3dc76a71d8b2c50290ac740e8c:escuela/src/components/landingPage/Events.js
      </div>
    </Container>
  );
};
export default Events;
