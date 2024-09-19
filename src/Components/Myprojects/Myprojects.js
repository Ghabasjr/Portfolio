import React from "react";
import "./Myprojects.css";

function Myprojects() {
  return (
    <div className="projects-sec">
      <section id="projects">
        <h2 className="header-project">My projects</h2>
        <div className="projects-buttons">
          <button className="project-btn">All</button>
          <button className="project-btn">web</button>
          <button className="project-btn">Mobile</button>
        </div>
      </section>
    </div>
  );
}

export default Myprojects;
