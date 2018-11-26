import React from "react";
import { Col, NavLink, Button } from 'reactstrap';


export const LandingCard = ({
    colClassName, divClassName, headerText ,cardParagraph, href,buttonColor }) => {
return (
    <Col className={colClassName}>
    <div className={divClassName}>
        <h3>{headerText}</h3>
        <p>{cardParagraph}</p>
        <NavLink href={href}><Button color={buttonColor}>Button</Button></NavLink>
    </div>
</Col>
);
}
export default LandingCard;