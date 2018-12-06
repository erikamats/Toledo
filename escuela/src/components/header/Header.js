import React, { Component } from "react";
import { NavLink, NavItem } from "reactstrap";
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
        <div className="header-main">
            <h1> Yolo</h1>
        </div>
      </div>
    );
  }
}
