import React from 'react'
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  bg-primary">
  <div className="container-fluid col-10" >
     <NavLink className="navbar-brand" to="#">Navbar</NavLink> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" >Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/registration" className="nav-link" >Registration</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to="/card" className="nav-link" >Card</NavLink>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar