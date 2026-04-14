import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "./Section.css";

function Section() {
  return (
    <section className="section" id="hero">
      {/* Text Section */}
      <motion.div
        className="section-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text">
          <span className="hello-text">HELLO, I'M</span>
          <br />
          <span className="name-text">
  <Typewriter
    words={["KHALID UMAR MUHAMMAD", "K. U. MUHAMMAD"]}
    loop={Infinity}
    cursor
    cursorStyle="|"
    typeSpeed={60}
    deleteSpeed={40}
    delaySpeed={1500}
  />
</span>

<span className="role-text">
  <Typewriter
    words={["FRONTEND & MOBILE DEVELOPER","REACT NATIVE (EXPO) DEVELOPER", "REACT & NEXT.JS SPECIALIST", "UI/UX ENGINEER"]}
    loop={Infinity}
    cursor
    cursorStyle="_"
    typeSpeed={60}
    deleteSpeed={40}
    delaySpeed={2000}
  />
</span>

        </h1>

        <motion.p
          className="para-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          Mobile and Frontend Developer with experience building and deploying scalable apps for fintech, real estate, and cultural platforms. Published My Invest fintech app on the Google Play Store. Passionate about delivering responsive, high-performance mobile and web solutions.
        </motion.p>

        <motion.div
          className="btn-group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: true }}
        >
          <a href="#skills" className="btn-link">
            <button className="btn">HIRE ME</button>
          </a>
          <a
            href="https://drive.google.com/file/d/1_eiwe1MR5hlrYTKpenXa1B6RVPyxs2jH/view?usp=sharing"
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn">DOWNLOAD CV</button>
          </a>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="section-image"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img className="image" src="_MG_2698.jpg" alt="Khalid Umar Muhammad" />
      </motion.div>
    </section>
  );
}

export default Section;
