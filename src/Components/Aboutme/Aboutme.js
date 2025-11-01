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
  I'm a <strong>Mobile and Frontend Developer</strong> with experience building and deploying scalable apps for <strong>fintech, real estate, and cultural platforms</strong>. I specialize in <strong>React Native (Expo)</strong>, <strong>React</strong>, and modern frontend frameworks with a strong background in API-driven development and user-focused design.
</p>
<p className="text-p">
  I have successfully <strong>published the My Invest fintech app on the Google Play Store</strong>, implementing secure authentication and real-time investment tracking. My work spans across <strong>Britkings (real estate)</strong> with map integration and advanced search features, and <strong>Globalroots (cultural app)</strong> with multimedia content delivery.
</p>
<p className="text-p">
  I'm passionate about delivering <strong>responsive, high-performance mobile and web solutions</strong>. My key strengths include writing clean, maintainable code using <strong>TypeScript, JavaScript (ES6+)</strong>, integrating <strong>REST APIs</strong>, implementing <strong>Redux Toolkit</strong> for state management, and ensuring seamless CI/CD workflows with <strong>Git and Vercel</strong>.
</p>
<p className="text-p">
  <strong>Core Competencies:</strong> <br />
  ✅ React Native (Expo), React, Next.js, TypeScript, JavaScript<br />
  ✅ REST API Integration, Redux Toolkit, Authentication Systems<br />
  ✅ UI/UX Design with Figma, Tailwind CSS, Responsive Design<br />
  ✅ Mobile Deployment (Google Play Store), Git, Vercel, CI/CD<br />
  ✅ Cross-functional Collaboration, Agile Development
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
              <li>React Native (Expo)</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>JavaScript (ES6+)</li>
              <li>Next.js</li>
              <li>REST API Integration</li>
              <li>Redux Toolkit</li>
              <li>Authentication Systems</li>
              <li>UI/UX Design with Figma</li>
              <li>Tailwind CSS</li>
              <li>HTML5 & CSS3</li>
              <li>Mobile Deployment (Play Store)</li>
              <li>Git & GitHub</li>
              <li>Vercel</li>
              <li>CI/CD Workflows</li>
              <li>Agile Development</li>
            </ul>
          </div>
        )}
        {activeSection === "education" && (
          <div className="mt-education">
            <ul>
              <li><strong>B.Sc. Microbiology</strong> - University of Maiduguri (2017 - 2021)</li>
              <li>Second Class Upper Division</li>
              <li>Advanced Frontend Development - Udemy</li>
              <li>Redux Essentials - Udemy</li>
            </ul>
          </div>
        )}
        {activeSection === "certification" && (
          <div className="mt-certifications">
            <ul>
              <li><strong>LagUp Africa Fellowship:</strong></li>
              <li>Frontend Development</li>
              <li>Business Writing & Communication</li>
              <li>Critical Thinking</li>
              <li>Workplace Culture & People Management</li>
              <li>Customer Value & Product Thinking</li>
              <li>Ideas to Business</li>
              <li><strong>Udemy:</strong></li>
              <li>Advanced Frontend Development</li>
              <li>Redux Essentials</li>
            </ul>
          </div>
        )}
        {activeSection === "experience" && (
          <div className="mt-experience">
            <ul>
              <li><strong>Mobile & Frontend Developer — FORKHIVE</strong> (Remote | Jan 2024 - Present)
                <ul>
                  <li>Built and deployed My Invest fintech app on Google Play Store using React Native (Expo)</li>
                  <li>Integrated secure authentication and real-time investment tracking</li>
                  <li>Developed Britkings (real estate) and Globalroots (cultural app)</li>
                  <li>Implemented map integration, search, and multimedia features</li>
                  <li>Maintained and optimized responsive web apps with React and Tailwind CSS</li>
                  <li>Ensured app scalability, CI/CD workflows, and version control with Git and Vercel</li>
                </ul>
              </li>
              <li><strong>Frontend Developer — APPENTUS (Tender Management System)</strong> (Remote | Jan 2024 - Mar 2025)
                <ul>
                  <li>Architected and implemented tender management system frontend using React</li>
                  <li>Integrated secure login/authentication and optimized REST API communication</li>
                </ul>
              </li>
              <li><strong>Frontend Developer — TALENVO (EduConnect)</strong> (Remote | Jan 2023 - Dec 2023)
                <ul>
                  <li>Developed EduConnect EdTech app with React and Tailwind CSS</li>
                  <li>Integrated third-party APIs and managed state with Redux Toolkit</li>
                  <li>Collaborated with designers to deliver mobile-first, responsive UIs</li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Aboutme;
