import React from "react";
import { Row} from "reactstrap";
import CardImg from "./cardImg";
import LandingCard from "./LandingCard";
export const ElemHigh = () => {
  return (
    <Row className="justify-content-center elem-high">
      <LandingCard
        colClassName="col-2"
        divClassName="text-right mt-5"
        headerText="Primaria"
        cardParagraph="Info about Elementary"
        href="/elementary"
        buttonColor="danger"
        btnText="Elementary"
        buttonClass="btn btn-md"
      />

      <CardImg
        src="https://images.unsplash.com/photo-1508824623134-da66caa91eca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ab857629734177ff166751767bac4b49&auto=format&fit=crop&w=800&q=60"
        alt="student1"
        className="w-25 h-50 mr-5 "
      />

      <CardImg
        src="https://images.unsplash.com/photo-1494883759339-0b042055a4ee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3607f384da70239b98b2172bd7e4dd41&auto=format&fit=crop&w=800&q=60"
        alt="student2"
        className="w-25 h-25 ml-5"
      />

      <LandingCard
        colClassName="col-2"
        divClassName="text-left mt-5"
        headerText="Secundaria"
        cardParagraph="Info about HS"
        href="/highschool"
        buttonColor="danger"
        btnText="High School"
        buttonClass="btn btn-md"
    
      />
    </Row>
  );
};

export default ElemHigh;
