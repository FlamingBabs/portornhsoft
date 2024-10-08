import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Replace the text with the logo image */}
      <div className="navbar-brand">
        <img src="/logo.png" alt="RNH Software Logo" className="navbar-logo" />
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>

      {/* Right side - Menu items */}
      <ul className={`navbar-menu ${isMenuOpen ? "show" : ""}`}>
        <li className="nav-item">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/business"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Business
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/resume"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/skills"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/projects"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            exact
            to="/contact"
            activeClassName="active"
            className="nav-links"
            onClick={handleClick}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
