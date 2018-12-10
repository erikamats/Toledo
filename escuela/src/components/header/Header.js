import React, { Component } from "react";
import { NavLink, NavItem, Col, Row } from "reactstrap";
export default class Header extends Component {
  render() {
    return (
      <div className="header-section">
        <div className="header-top">
          <NavItem>
            <NavLink to="/" className="nav-link">
              Admin
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/events" className="nav-link">
              Events
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/parent" className="nav-link">
              ParentWeb
            </NavLink>
          </NavItem>
        </div>
        <Col>
          <Row className="header-main">
            <Col>
              {" "}
              <h4> Colegio Bilingüe Toledo</h4>
            </Col>
            <Col>
              {" "}
              <img
                src="https://res.cloudinary.com/matsi/image/upload/v1543332132/Toledo/collegioToledo.png"
                alt="Toledo"
                className="navlogoImg"
              />
            </Col>
            <Col> 
            <i className="fab fa-facebook-square fa-2x"/>
            <i className="fab fa-twitter fa-2x"/>
            <i className="fab fa-google-plus-square fa-2x"/>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}
