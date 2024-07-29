import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <main className="main-container">
      <nav className="nav-bar">
        <div className="flex-container">
          <div className="log-o">
            <img className="logo" src="hero-image.jpg" alt="logo" />
          </div>
          <div className="container-text">
            <ul className="container-text1">
              <li>
                <a href="Aboutme">About</a>
              </li>
              <li>
                <a href="projects">Projects</a>
              </li>
              <li>
                <a href="contactme">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default Navbar;
