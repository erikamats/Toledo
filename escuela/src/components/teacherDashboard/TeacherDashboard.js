import React from "react";
import "./TeacherDashboard.css"

import { Nav, NavItem, NavLink } from 'reactstrap';
export default class TeacherDashboard extends React.Component{

    componentDidMount(){
        window.scrollTo(0,145)
    }

    render(){
        return(
            <div className="dashNav">
              <Nav vertical>
              <NavItem className="dashNavItem">
                <NavLink href="/"> 
                <img
                src="https://res.cloudinary.com/matsi/image/upload/v1543332132/Toledo/collegioToledo.png"
                alt="Toledo"
                className="navlogoDash"
              /></NavLink>
              </NavItem>
              <NavItem className="dashNavItem">
                <NavLink href="/attendance">
                <img src="https://res.cloudinary.com/matsi/image/upload/v1545075319/Toledo/700ec7f3dd9e44f98275100390a089d0.png" alt="navPicture"  className="navIcon"/>
                    Attendance
                </NavLink>
              </NavItem>
              <NavItem className="dashNavItem">
                <NavLink href="/gradebook">
                <img src="https://res.cloudinary.com/matsi/image/upload/v1545075424/Toledo/48440538007e41e69cddfe5a23e050ff.png" alt="navPicture"  className="navIcon"/>Gradebook</NavLink>
              </NavItem>
              <NavItem className="dashNavItem">
                <NavLink href="/assignment">
                <img src="https://res.cloudinary.com/matsi/image/upload/v1545075408/Toledo/b393dbb2304c4aa1b03d146967f7a0c3.png" alt="navPicture"  className="navIcon"/>Assignments</NavLink>
              </NavItem>
              <NavItem className="dashNavItem">
                <NavLink href="/assignment">
                <img src="https://res.cloudinary.com/matsi/image/upload/v1545075391/Toledo/3b3f4372e1a34d19a7bba7f23a67ff61.png" alt="navPicture"  className="navIcon"/>CoursePlan</NavLink>
              </NavItem>
              <NavItem className="dashNavItem">
                <NavLink href="/assignment">
                <img src="https://res.cloudinary.com/matsi/image/upload/v1545075377/Toledo/10702135e21046e2b6d84f73e915f266.png" alt="navPicture"  className="navIcon"/>Reporting</NavLink>
              </NavItem>
              <NavItem className="dashNavItem">
                <NavLink href="/account">
                <img src="https://res.cloudinary.com/matsi/image/upload/v1545075363/Toledo/9264654821f04dd1b9c8b9474c59072c.png" alt="navPicture"  className="navIcon"/>Account</NavLink>
              </NavItem>



            </Nav>
        
          
          </div>
        )
    }
}

