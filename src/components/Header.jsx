import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import styles
import logo from "../assets/256.avif"; // Ensure correct path

function Header() {
  return (
    <header>
      {/* Small top banner with Logo & University Name */}
      <div className="top-banner">
        <img src={logo} alt="University Logo" />
        <h2>The University of Tampa</h2>
      </div>

      {/* Large middle banner (CIRT + Subtitle) */}
      <div className="main-banner">
        <h1 className="cirt-title">CIRT <br /> 
        <span style={{ fontSize: "22px" }}>
          Criminology Institute for Research and Training
        </span>
        </h1>
      </div>

      {/* Navigation banner */}
      <nav className="nav-banner">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
