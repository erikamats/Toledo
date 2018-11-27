import React from 'react';
import {Container, Row} from 'reactstrap';
import LargeLandingCard from './LargeLandingCard';
import CardImg from "./CardImg";

export const AboutUs = () => {
    return(
        <Container fluid>
            <Row>
                <LargeLandingCard
                    colClassName=""
                    divClassName=" aboutUs-box col-12"
                    headerText="About Us"
                    cardParagraph="Tristique magna sit amet purus gravida. Lobortis feugiat vivamus at augue eget arcu. Quis lectus nulla at volutpat diam ut venenatis tellus in. Pellentesque elit eget gravida cum sociis natoque penatibus. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. A scelerisque purus semper eget duis at. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Rutrum quisque non tellus orci. Volutpat odio facilisis mauris sit amet. Sit amet tellus cras adipiscing enim eu turpis egestas. Vitae nunc sed velit dignissim sodales ut. Vitae sapien pellentesque habitant morbi tristique. Non sodales neque sodales ut etiam sit. Nunc pulvinar sapien et ligula ullamcorper. Libero id faucibus nisl tincidunt. Non tellus orci ac auctor. Morbi tincidunt ornare massa eget egestas purus."
                    href="/about"
                    buttonColor="secondary"
                    buttonText= "Learn More"
                    btnClassname="btn-md text-warning buttonText"

                />
            </Row>
            <CardImg
            src="https://images.unsplash.com/photo-1524646514133-d392bcf4e8b9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ba364557b0c2c0a865108d2bd255565&auto=format&fit=crop&w=800&q=60" 
            alt="aboutUs"
            className="aboutImg mx-auto d-block"/>
        </Container>
    );
}
     
export default AboutUs;
