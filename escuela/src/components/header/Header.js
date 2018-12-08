import React, { Component } from "react";
import { NavLink, NavItem, Col , Row} from "reactstrap";
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
        <Row className="header-main">
           <Col> <h4> Colegio Bilingüe Toledo</h4></Col>
           <Col> <img src="https://res.cloudinary.com/matsi/image/upload/v1543332132/Toledo/collegioToledo.png" alt="Toledo" className="navlogoImg" /></Col>
           <Col> Parent Portal</Col>
        </Row>
      </div>
    );
  }
}
