import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'

export default () => {
  return (

    <nav className="navbar navbar-expand-lg  navbar-light text-white " style={{backgroundColor:"var(--navy)"}} >
           
      <a className="navbar-brand" href="/" ><img src="https://res.cloudinary.com/matsi/image/upload/v1543332132/Toledo/collegioToledo.png" alt="Toledo" className="w-25" /></a>
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
      <div className="collapse navbar-collapse justify-content-end  " id="navbarNav" >
      
        <ul className="nav nav-justified-right text-warning">
          <li className="nav-item"  >
            <NavLink to="/" className="nav-link" >
              Home
						</NavLink>
          </li>
          <li className="nav-item" >
            <NavLink to="/assignment" className="nav-link" >
              Assignment
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
