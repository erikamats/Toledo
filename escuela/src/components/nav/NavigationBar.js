import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'

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
  DropdownItem
} from 'reactstrap';


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
        <Navbar  light expand="md">
          {/* <NavbarBrand href="/"><img src="https://res.cloudinary.com/matsi/image/upload/v1543332132/Toledo/collegioToledo.png" alt="Toledo" className="navlogoImg" />Colegio Bilingüe Toledo</NavbarBrand> */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/" className="nav-link" >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/assignment" className="nav-link" >
                  Assignment
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







