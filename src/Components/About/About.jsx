// AboutMe.js
import React, { useEffect } from "react";
import profileImg from "../../assets/about_profile.jpg";
import { motion } from "framer-motion";
import "./About.css";

const AboutMe = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const animateProgressBars = () => {
      progressBars.forEach((bar) => {
        const targetWidth = bar.getAttribute("data-width");
        bar.style.width = targetWidth;
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProgressBars();
        }
      });
    });

    const skillsSection = document.querySelector(".about-skills");
    if (skillsSection) observer.observe(skillsSection);

    return () => {
      if (skillsSection) observer.unobserve(skillsSection);
    };
  }, []);

  return (
    <motion.div
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="about-header">
        <h1>About Me</h1>
      </div>

      <div className="about-container">
        <motion.div
          className="about-left"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <img className="profile-img" src={profileImg} alt="Profile" />
        </motion.div>

        <div className="about-right">
          <motion.div
            className="about-description"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="introduction-text">
              <span className="highlight">Hello, I’m Kanij Fatema,</span>
              <span className="color-gradient">
                an <strong>Assistant Exam Officer</strong> at Daffodil International University
              </span>. I’m passionate about <strong>streamlining academic processes</strong> and
              using <strong>technology</strong> to enhance efficiency. My strengths lie in balancing
              <em>technical expertise</em> with <em>dynamic management skills</em>.
            </p>
            <div className="personal-info">
              <p className="info-intro">Quick Overview:</p>
              <ul>
                <li><strong>Name:</strong> Kanij Fatema</li>
                <li><strong>Employee ID:</strong> 710002981</li>
                <li><strong>Designation:</strong> Assistant Exam Officer</li>
                <li><strong>Department:</strong> Office of The Controller of Examination</li>
                <li><strong>Blood Group:</strong> O+</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;