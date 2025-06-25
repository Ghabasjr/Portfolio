import React from "react";
import { useState } from "react";
import "./Aboutme.css";

function Aboutme() {
  const [activeSection, setActiveSection] = useState("skills");
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="about" id="about">
      <div className="about-img">
        <img className="about-img1" src="about-image.jpg" alt="About Me" />
      </div>

      <div className="about-text">
        <h2 className="about-header">About Me</h2>
<p className="text-p">
  I’m a Frontend Developer with hands-on experience in building responsive and scalable applications using <strong>ReactJS</strong>, <strong>Next.js</strong>, and <strong>React Native (Expo CLI)</strong>. I specialize in transforming UI/UX designs into functional interfaces and bringing ideas from concept to deployment with performance and usability in mind.
</p>
<p className="text-p">
  My key strengths include writing clean, maintainable code using HTML5, CSS3, JavaScript (ES6+), and TypeScript. I collaborate effectively with cross-functional teams and have a solid understanding of REST APIs, authentication systems, and modern component-based architecture.
</p>
<p className="text-p">
  I'm passionate about improving user experience, optimizing performance, and following best practices such as version control, modular design, and responsive design principles. I stay updated with the latest frontend trends and continuously seek new challenges to grow as a developer.
</p>
<p className="text-p">
  <strong>Technologies & Tools:</strong> <br />
  ✅ HTML5, CSS3, JavaScript (ES6+), TypeScript<br />
  ✅ Frameworks & Libraries: ReactJS, Next.js, React Native (Expo CLI)<br />
  ✅ Tools: Git, GitHub, Figma, REST APIs, Firebase, VS Code<br />
  ✅ Others: Authentication, API Integration, Mobile-First Design
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
          <button className="btn0">
            <p
              className="about-btn"
              onClick={() => handleSectionChange("experience")}
            >
              Experience
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
              <li>React-Native(Expo CLI)</li>
              <li>Next.js</li>
              <li>Figma</li>
              <li>Jira</li>
              <li>Click Up</li>
              <li>Microsoft Teams</li>
              <li>REST APIs</li>
              <li>Firebase</li>
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
        {activeSection === "experience" && (
          <div className="mt-experience">
            <ul>
              <li>Frontend Developer at ForkHive - Developed CropnCarry, CronCarry Couriers, MyInvest, and Eloniecommerce using Expo CLI and web technologies.</li>
              <li>Frontend Developer at TalenVo - Built EduConnect from scratch.</li>
              <li>Frontend Developer at Appentus - Developed the Tender Management System from scratch and worked on Samsung and LG TV apps.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Aboutme;
