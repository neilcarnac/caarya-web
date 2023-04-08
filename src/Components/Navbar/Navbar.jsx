import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Spaceship
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/communityconnect" className="nav-link">
            Community Connect
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/infocards" className="nav-link">
            Infocards
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/quests" className="nav-link">
            Quests
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/experiencemaps" className="nav-link">
            Experience Maps
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
