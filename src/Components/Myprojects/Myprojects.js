// import React from "react";
// import "./Myprojects.css";

// function Myprojects() {
//   return (
//     <div className="projects-sec">
//       <section id="projects">
//         <h2 className="header-project">My projects</h2>
//         <div className="projects-buttons">
//           <button className="project-btn">All</button>

//           <button className="project-btn">web</button>
//           <button className="project-btn">Mobile</button>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Myprojects;

import React from "react";
import "./Myprojects.css";

function Myprojects() {
  return (
    <div className="projects-sec">
      <section id="projects">
        <h2 className="header-project">My projects</h2>

        <div className="projects-buttons">
          <button className="project-btn">All</button>
          <button className="project-btn">Web</button>
          <button className="project-btn">Mobile</button>
        </div>

        {/* Add the e-commerce web app link here */}
        <div className="project-link">
          <a
            href="https://e-commerce-rouge-xi.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
          >
            View E-Commerce Web App
          </a>
        </div>
      </section>
    </div>
  );
}

export default Myprojects;
