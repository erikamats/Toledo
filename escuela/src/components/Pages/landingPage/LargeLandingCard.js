import React from "react";
import { Col, NavLink, Button } from "reactstrap";

export const LargeLandingCard = ({
  colClassName,
  divClassName,
  headerText,
  cardParagraph,
  href,
  buttonColor,
  buttonText,
  btnClassname
}) => {
  return (
    <Col className={colClassName}>
      <div className={divClassName}>
        <h2>{headerText}</h2>
        <p>{cardParagraph}</p>
        <NavLink href={href}>
          <Button color={buttonColor} className={btnClassname}>{buttonText}</Button>
        </NavLink>
      </div>
    </Col>
  );
};
export default LargeLandingCard;
