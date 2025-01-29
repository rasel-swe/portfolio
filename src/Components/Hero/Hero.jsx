import React from "react";
import "./Hero.css";
import profile_img from "../../assets/Profile.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FiChevronDown } from "react-icons/fi";

const Hero = () => {
  const handleResumeClick = () => {
    window.open("https://www.dropbox.com/scl/fi/usgc4t30lh1dkas6rw10s/Kanij-Fatema-CV.pdf?rlkey=asg16ylsir0ozjuhfi2z1ls1e&st=jwydjuhd&dl=0", "_blank"); // Update with your resume link
  };

  return (
    <div id="home" className="Hero">
      <div className="hero-background"></div>
      <img src={profile_img} alt="Profile" className="hero-image" />
      <h1 className="hero-title">
        Hello! I am <br />
        <span>Kanij Fatema</span>
      </h1>
      <h2 className="hero-subtitle">
        Assistant Exam Officer <br /> Daffodil International University
      </h2>

      <div className="hero-action">
        <AnchorLink
          className="hero-button connect-btn"
          offset={50}
          href="#contact"
        >
          Connect With Me
        </AnchorLink>
        <button className="hero-button resume-btn" onClick={handleResumeClick}>
          My Resume
        </button>
      </div>

      <div className="scroll-indicator">
        <AnchorLink href="#about" offset={50}>
          <FiChevronDown className="scroll-icon" />
        </AnchorLink>
      </div>
    </div>
  );
};

export default Hero;
