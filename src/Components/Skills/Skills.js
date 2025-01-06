import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div id="skills" className="co-skills">
      <div className="connect">
        <h5 className="connect-text">Let's Connect</h5>
        <p className="connect-para">
          I'm currently looking for new opportunities; my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="logo">
          <a href="https://github.com/Ghabasjr" aria-label="GitHub">
            <img className="logo-image" alt="GitHub Logo" src="/github.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/khalid-umar-muhammad-21a831276"
            aria-label="LinkedIn"
          >
            <img
              className="logo-image"
              alt="LinkedIn Logo"
              src="/linkden.png"
            />
          </a>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              placeholder="khalid@gmail.com"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              placeholder="Just saying hello"
              type="text"
              id="subject"
              name="subject"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Let's talk about..."
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Skills;
