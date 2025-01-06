import React from "react";
import "./Section.css";

function Section() {
  return (
    <section className="section">
      <div className="section-text">
        <h1 className="text">
          <span className="hello-text">HELLO, I'M</span>
          <br />
          <span className="name-text">KHALID UMAR MUHAMMAD</span>
          <br />
          <span className="role-text">FRONTEND DEVELOPER</span>
        </h1>
        <p className="para-text">EXPERIENCED FRONTEND DEVELOPER</p>
        <div className="btn-group">
          <a href="#skills" className="btn-link">
            <button className="btn">HIRE ME</button>
          </a>
          <a
            href="https://drive.google.com/file/d/1k00xGsshg_eNpLtOdJWAENW4KXPHLKht/view?usp=drive_link"
            className="btn-link"
          >
            <button className="btn">DOWNLOAD CV</button>
          </a>
        </div>
      </div>

      <div>
        <img className="image" src="_MG_2698.jpg" alt="Khalid Umar Muhammad" />
      </div>
    </section>
  );
}

export default Section;
