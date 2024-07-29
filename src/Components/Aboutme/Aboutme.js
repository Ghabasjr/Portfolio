import React from "react";
import "./Aboutme.css";

function Aboutme() {
  return (
    <div>
      <div className="about">
        <div className="about-img">
          <img className="about-img1" src="about-image.jpg" alt="" />
        </div>
        <div className="about-text">
          <h2 className="about-header">About Me</h2>
          <p className="text-p">
            Experienced Full Stack Developer skilled in Java, React, Nexjs and
            Angular, with a focus on building scalable web applications.
            Proficient in front-end and back-end development, I deliver projects
            from concept to deployment, employing intuitive user interface
            design and robust server-side logic. Key skills: Java, Microservices
            architecture, Python, Angular, Nexjs, HTML5, CSS3, JavaScript,
            RESTful APIs. I excel in problem-solving and collaborate effectively
            with cross-functional teams, ensuring high-quality code within
            project timelines.
          </p>
          <p className="text-p">
            Highlights: Optimize performance and enhance user experience Embrace
            continuous integration and test-driven development Stay updated with
            industry trends and best practices Passionate about delivering
            innovative solutions that exceed expectations. Open to new
            challenges and opportunities for growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
