import React from "react";
import { Col, NavLink, Button } from "reactstrap";

export const largeLandingCard = ({
  colClassName,
  divClassName,
  headerText,
  cardParagraph,
  href,
  buttonColor
}) => {
  return (
    <Col className={colClassName}>
      <div className={divClassName}>
        <h2>{headerText}</h2>
        <p>{cardParagraph}</p>
        <NavLink href={href}>
          <Button color={buttonColor}>Button</Button>
        </NavLink>
      </div>
    </Col>
  );
};
export default largeLandingCard;
