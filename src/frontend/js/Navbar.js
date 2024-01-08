import { Link } from "react-router-dom";
import "../css/Navbar.css";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <span className="logo">Urban Vogue </span>
      </div>
      <div className={`center-section ${showMenu ? "show-menu" : ""}`}>
        <ul className={`nav-list ${showMenu ? "show-menu" : ""}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/acc" className="nav-link">
              Rooms
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/booking" className="nav-link">
              Booking
            </Link>
          </li>
        </ul>
      </div>

      <div className="right-section">
        <ul className={`nav-list ${showMenu ? "show-menu" : ""}`}>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              <FaSignInAlt style={{marginRight:8}} />
              Sign in
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              <FaUserPlus style={{marginRight:6}} />
              Sign up
            </Link>
          </li>
        </ul>

        <div className="menu-icon" onClick={handleToggleMenu}>
          <FiMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
