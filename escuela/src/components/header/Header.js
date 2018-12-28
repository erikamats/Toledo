import React, { Component } from "react";
import { NavLink, NavItem, Col, Row, Nav } from "reactstrap";
export default class Header extends Component {
  render() {
    return (
      <div className="header-section">
        <Nav className="header-top">
          <NavItem>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/events">Events</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup" className="nav-link">
              Register
            </NavLink>
          </NavItem>
        </Nav>
        <Col>
          <Row className="header-main">
            <Col>
              {" "}
              <a href="/">
                <h4> Colegio Bilingüe Toledo</h4>{" "}
              </a>
            </Col>
            <Col>
              <a href="/">
                <img
                  src="https://res.cloudinary.com/matsi/image/upload/v1543332132/Toledo/collegioToledo.png"
                  alt="Toledo"
                  className="navlogoImg"
                />
              </a>
            </Col>
            <Col>
              <i className="fab fa-facebook-square fa-2x " />
              <i className="fab fa-twitter fa-2x" />
              <i className="fab fa-google-plus-square fa-2x" />
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}
