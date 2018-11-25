import React from 'react';
import { NavLink } from 'react-router-dom';


export default () => {
  return (
    <nav className="navbar navbar-expand-lg  navbar-light text-white " style={{backgroundColor:"#b5d4fd"}}>
      <a class="navbar-brand text-white" href="/" >Colegio Bilingüe Toledo</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end " id="navbarNav" >
      
        <ul className="nav nav-justified-right">
          <li className="nav-item"  >
            <NavLink to="/" className="nav-link" >
              Home
						</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/signup" className="nav-link" >
              Register
						</NavLink>
          </li>
          <li className="nav-item"  >
            <NavLink to="/gradebook" className="nav-link" >
              Gradebook
						</NavLink>
          </li>
        
          <li className="nav-item ">
            <NavLink to="/users" className="nav-link">
              DB Users
						</NavLink>
          </li>

             
             <li className="nav-item ">
            <NavLink to="/addclass" className="nav-link">
              Add Class
						</NavLink>
          </li>
       
        </ul>
      </div>
    </nav>
  );
};
