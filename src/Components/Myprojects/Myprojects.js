import React from "react";
import "./Myprojects.css";

function Myprojects() {
  return (
    <div className="projects-sec">
      <section id="myprojects">
        <h2 className="header-project">My projects</h2>

        <div className="projects-buttons">
          <button className="project-btn">All</button>
          <button className="project-btn">Web</button>
          <button className="project-btn">Mobile</button>
        </div>

        {/* Project links */}
        <div className="project-link">
          <a
            href="https://e-commerce-rouge-xi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
          >
            E-Commerce Web App
          </a>
        </div>
        <div className="project-link">
          <a
            href="https://edu-connect-7fh6.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
          >
            Edu Connect
          </a>
        </div>
        <div className="project-link">
          <a
            href="https://sync-learnin.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
          >
            Sync Learning
          </a>
        </div>
      </section>
    </div>
  );
}

export default Myprojects;
