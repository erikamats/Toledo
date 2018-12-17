import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
export const NavMain = () =>{
    return(
        <Nav className="justify-content-center mainNav">
          <NavItem>
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/academics">Academics</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/pricing">Pricing</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact Us</NavLink>
          </NavItem>
        </Nav>
      
    );
};

export default NavMain;