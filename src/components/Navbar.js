import React from "react";
import { NavLink } from "react-router-dom";
import planetIcon from "../icons/planetIcon.png";
import "../styles/navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-header">
      <img src={planetIcon} className='planetIcon' alt=""/>
      <h1 className="header-heading">Space Travellers Hub</h1>
    </div>
    <div className="navbar-links">
      <NavLink exact activeClassName="navbar__link--active" className="navbar__link" to="/">
        Rockets
      </NavLink>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/products">
        Missions
      </NavLink>
      <span className="line"></span>
      <NavLink activeClassName="navbar__link--active" className="navbar__link" to="/contacts">
        My Profile
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
