import React from "react";
import { Container, Row, Col, Button, Form, Input } from "reactstrap";
// import FooterWidget from "./footerwidget";
import FooterListItem from "./footerListitem";
import * as moment from "moment";

let now = moment().format("YYYY");

export const Footer = () => {
  return (
    // <Container fluid>
    <div className="footer pt-5 justify-content-center">
      <Row>
        <Col className="col-12">
          <img
            src="https://res.cloudinary.com/matsi/image/upload/v1543332132/Toledo/collegioToledo.png"
            alt="toledo"
            className="footerImg col-2"
          />
          <h4 className=" fTitle col-10 pt-2"> Colegio Bilingüe Toledo</h4>
        </Col>
      </Row>
      <hr className="footer-line" />
      <Row>
        <Col>
          <div className="footer-widget d-block  ml-3 col-6 ">
            <ul className="list-unstyled">
              <FooterListItem href="/" listText="Home" />
              <FooterListItem href="#" listText="About" />
              <FooterListItem href="#" listText="Academics" />
              <FooterListItem href="#" listText="Pricing" />
              <FooterListItem href="#" listText="Contact Us" />
            </ul>
          </div>
        </Col>

        <Col>
          <div className="footer-widget d-block col-6 ">
            <ul className="list-unstyled">
              <FooterListItem href="#" listText="Register" />
              <FooterListItem href="#" listText="Events" />
              <FooterListItem href="#" listText="Payments" />
              <FooterListItem href="#" listText="Admin" />
              <FooterListItem href="#" listText="Parent Portal" />
            </ul>
          </div>
        </Col>

        {/* <Col>
            <div className="footer-widget d-block col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6  ">
              <div className="footer-title">Social</div>
              <ul className="list-unstyled">
                <FooterListItem href="#" listText="Twitter" />
                <FooterListItem href="#" listText="Facebook" />
                <FooterListItem href="#" listText="Google+" />
                <FooterListItem href="#" listText="LinkedIn" />
                />
              </ul>
            </div>
          </Col> */}

        <Col>
          <div className="footer-widget mr-5">
            <h3 className="footer-title">Subscribe Newsletter</h3>
            <Form className="newsletter-form">
              <div>
                <Input
                  className="form-control"
                  placeholder="Email address"
                  type="text"
                />
                <Button className="btn btn-warning btn-md " type="submit">
                  Sign Up
                  </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="tiny-footer text-center">
            <p>
              Copyright © All Rights Reserved {now}| Design & Development by
              Super Squad
              </p>
          </div>
        </Col>
      </Row>
    </div>
    // </Container>
  );
};

export default Footer;
