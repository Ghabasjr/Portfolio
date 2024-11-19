import React from "react";
import { useState } from "react";
import "./Aboutme.css";

function Aboutme() {
  const [activeSection, setActiveSection] = useState("skills");
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="about">
      <div className="about-img">
        <img className="about-img1" src="about-image.jpg" alt="About Me" />
      </div>

      <div className="about-text">
        <h2 className="about-header">About Me</h2>
        <p className="text-p">
          I am a Junior Frontend Developer with expertise in ReactJS,{" "}
          <b>React</b>, React-Native, and . I specialize in building scalable
          web applications, handling front-end. I take projects from concept to
          deployment, focusing on intuitive user interface design.
        </p>
        <p className="text-p">
          My key skills include HTML5, CSS3, JavaScript, and RESTful APIs. I
          excel in problem-solving and work effectively with cross-functional
          teams to ensure high-quality code delivery within project timelines.
        </p>
        <p className="text-p">
          I am passionate about optimizing performance, enhancing user
          experience, and embracing continuous integration and test-driven
          development. Staying updated with industry trends and best practices
          is a priority for me, and I am always open to new challenges and
          opportunities for growth.
        </p>
        <p className="text-p">
          <strong>Technologies and Tools:</strong> <br />
          ✅ API
          <br />
          ✅ Authentication
          <br />✅ UI Frameworks: ReactJS, React-Native.
        </p>
        <div className="btn-about">
          <button className="btn0">
            <p
              className="about-btn"
              onClick={() => handleSectionChange("skills")}
            >
              Skills
            </p>
          </button>
          <button className="btn0">
            <p
              className="about-btn"
              onClick={() => handleSectionChange("education")}
            >
              Education
            </p>
          </button>
          <button className="btn0">
            <p
              className="about-btn"
              onClick={() => handleSectionChange("certification")}
            >
              Certifications
            </p>
          </button>
        </div>
        {activeSection === "skills" && (
          <div className="mt-skills">
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
              <li>ReactJS</li>
              <li>React-Native</li>
              {/* <li>Next.js</li> */}
              <li>Git/GitHub</li>
              <li>TypeScript</li>
            </ul>
          </div>
        )}
        {activeSection === "education" && (
          <div className="mt-education">
            <ul>
              <li>Bachelor's Degree in Microbiology</li>
              <li>Online Courses: Udemy.</li>
            </ul>
          </div>
        )}
        {activeSection === "certification" && (
          <div className="mt-certifications">
            <ul>
              <li>Certified JavaScript Developer</li>
              <li>React Professional Certification</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Aboutme;
