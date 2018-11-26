import React from 'react';
import {Container, Row} from 'reactstrap';
import largeLandingCard from "./LargeLandingCard"


export const AboutUs = () => {
    return(
        <Container fluid>
            <Row>
                <largeLandingCard
                    colClassName="aboutUs-box"
                    divClassName="transparent-wrapper one"

                    headerText="CALL TO ACTION"
                    cardParagraph="What else can be important. Link should go to /Register"
                    href="/register"
                    buttonColor="danger"

                />

             
            </Row>
        </Container>
    );
}
     
export default AboutUs;
