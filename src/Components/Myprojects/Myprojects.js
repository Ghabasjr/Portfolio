import React from "react";
import "./Myprojects.css";

function Myprojects() {
  const highlightedProjects = [
    {
      title: "My Invest (Fintech App)",
      image: "/myInvest.webp",
      link: "https://play.google.com/store/apps/details?id=com.myinvestapp.myinvestmobileapp&hl=en",
      description: "Published on Google Play Store with investment tracking & secure authentication",
      isHighlighted: true
    },
    // {
    //   title: "Britkings (Real Estate App)",
    //   image: "/Britkings.png",
    //   link: "#",
    //   description: "Property listings with map integration and advanced search filters",
    //   isHighlighted: true
    // },
   
  ];

  const otherProjects = [
    {
      title: "CropnCarry",
      image: "/Cropncarry.png",
      link: "https://cropncarry.com/"
    },
    {
      title: "Benji Eco Rides",
      image: "/benji.png",
      link: "https://benji-eco-rides-web.vercel.app/"
    },
    {
      title: "African Data",
      image: "/africadata.png",
      link: "https://www.africadatasolutions.org/"
    },
    {
      title: "GMFB",
      image: "/gmfb.png",
      link: "https://www.gmfb.ng/"
    },
    {
      title: "Edu Connect",
      image: "/Edu connect.png",
      link: "https://edu-connect-7fh6.vercel.app/",
    },
    {
      title: "E-Commerce Web App",
      image: "/E-commerce.png",
      link: "https://e-commerce-rouge-xi.vercel.app",
    },
    {
      title: "Sync Learning",
      image: "/S-learning.png",
      link: "https://sync-learnin.vercel.app/",
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
      title: "SplitEasy",
      image: "/Easy.png",
      link: "https://split-easy-sepia.vercel.app/"
    },
    {
      title: "Xpertize Energy Limited",
      image: "/Xpertise.png",
      link: "https://www.xpertizeng.com/"
    },
    {
      title: "Chakadesmond",
      image: "/chadesmond.png",
      link: "https://chakadesmond.com/"
    }
  ];

  return (
    <div className="projects-sec">
      <section id="myprojects">
        <h2 className="header-project">My Projects</h2>

        <div className="highlighted-section">
          <h3 className="section-subtitle">Highlighted Projects</h3>
          <div className="projects-grid">
            {highlightedProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card highlighted"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
                <p className="project-title">{project.title}</p>
                {project.description && (
                  <p className="project-description">{project.description}</p>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className="other-projects-section">
          <h3 className="section-subtitle">Other Projects</h3>
          <div className="projects-grid">
            {otherProjects.map((project, index) => (
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
        </div>
      </section>
    </div>
  );
}

export default Myprojects;
