import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="main-container">
      <nav className="nav-bar">
        <div className="flex-container">
          <div className="logo-container">
            <img className="logo" src="_MG_2698.JPG" alt="logo" />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#myprojects" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link">
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
