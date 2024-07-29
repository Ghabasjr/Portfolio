import React from "react";
import "./Section.css";

function Section() {
  return (
    <div className="section">
      <div className="section-text">
        <h1 className="text">
          <span className="hello-text">HELLO, IM</span>
          <br />
          <span>KHALID UMAR MUHAMMAD</span>
          <br />
          <span>FRONTEND ENGINEER</span>
        </h1>
        <p className="para-text">EXPERIENCE FRONTEND ENGINEER</p>
        {/* //not finished yet */}
        <div className="btn-like">
          <a href="hireme">
            <button>HIRE ME</button>
          </a>
          <a href="cv">
            <button>
              <span>DOWNLOAD CV</span>
            </button>
          </a>
        </div>
      </div>

      <div>
        <img className="image" src="hero-image.jpg" alt="" />
      </div>
    </div>
  );
}

export default Section;
