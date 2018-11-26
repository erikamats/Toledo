import React, { Component } from 'react';
import {Container, Row, Col, NavLink, Button } from 'reactstrap';


class Enroll extends Component{
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col className="enroll-box">
                        <div className="transparent-wrapper one">
                            <h3>CALL TO ACTION</h3>
                            <p>What Else can be important?</p>
                            <NavLink href="#"><Button color="danger">Button</Button></NavLink>
                        </div>
                    </Col>
                    <Col className="other-box">
                        <div className="transparent-wrapper two">
                            <h3>ENROLL NOW</h3>
                            <p>Next session begins January 2019</p>
                            <NavLink href="#"><Button color="danger">Button</Button></NavLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Enroll;
