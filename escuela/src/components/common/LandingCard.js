import React from "react";
import { Col, NavLink, Button } from "reactstrap";


export const LandingCard = ({
  colClassName,
  divClassName,
  headerText,
  cardParagraph,
  href,
  buttonColor,
  btnText,
  buttonClass,
  style,
  subHeader,
  secondHeader,
  date,
  paragraphClassName,
  subHeaderClassName,
  subText,
  dashHeaderText,
  secondHeaderClassName
}) => {
  return (
    <Col className={colClassName}>
      <div className={divClassName} style={style}>
        <h3>{headerText}</h3>
        <h5>{dashHeaderText}</h5>
        <span>{subText}</span>
        <span>{date}</span>
        <h4 className={secondHeaderClassName}>{secondHeader}</h4>
        <h1 className={subHeaderClassName}>{subHeader}</h1>
        <p className={paragraphClassName}> {cardParagraph}</p>
        <NavLink href={href}>
          <Button color={buttonColor} className={buttonClass}>
            {btnText}
          </Button>
        </NavLink>
      </div>
    </Col>
  );
};
export default LandingCard;
