import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { NavLink } from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Colegio Bilingüe Toledo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" className="nav-link" >
                  Home
                </NavLink>              
              </NavItem>
              <NavItem>
                <NavLink to="/signup" className="nav-link" >
                  Register
                </NavLink>              
              </NavItem>
              <NavItem>
                <NavLink to="/gradebook" className="nav-link" >
                  Gradebook
                </NavLink>              
              </NavItem>
              <NavItem>
                <NavLink to="/users" className="nav-link" >
                  DB Users
                </NavLink>              
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Courses
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/courses">
                      View Courses
                  </DropdownItem>
                  <DropdownItem href="/addCourses">
                      Add Courses
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
