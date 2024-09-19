import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="main-container">
      <nav className="nav-bar">
        <div className="flex-container">
          <div className="logo-container">
            <img className="logo" src="hero-image.jpg" alt="logo" />
          </div>
          <ul className="nav-links">
            <li>
              <a href="Aboutme.js" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="Myprojects.js" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="contactme" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
