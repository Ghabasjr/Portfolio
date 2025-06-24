import React from "react";
import "./Myprojects.css";

function Myprojects() {
  const projects = [
    {
      title: "E-Commerce Web App",
      image: "/E-commerce.png", // 🔁 Replace with your actual image path
      link: "https://e-commerce-rouge-xi.vercel.app",
    },
    {
      title: "Edu Connect",
      image: "/Edu connect.png",
      link: "https://edu-connect-7fh6.vercel.app/",
    },
    {
      title: "Sync Learning",
      image: "/S-learning.png",
      link: "https://sync-learnin.vercel.app/",
    },
    {
      title:"CropnCarry",
      image:"/Cropncarry.png",
      link:"https://cropncarry.com/"
    },
    {
      title: "Forkhive",
      image: "/Forkhive.png",
      link: "https://Forkhive.com",
    },
    {
      title: "Marycharis Foundation",
      image: "/Marycharis.png",
      link: "https://https://www.marycharisfoundation.org/",
    },
    {
      title:"SplitEasy",
      image:"/Easy.png",
      link:"https://split-easy-sepia.vercel.app/"
    }
  ];

  return (
    <div className="projects-sec">
      <section id="myprojects">
        <h2 className="header-project">My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <p className="project-title">{project.title}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Myprojects;
