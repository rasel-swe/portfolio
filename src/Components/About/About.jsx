import React, { useEffect } from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.jpg";

const About = () => {
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
    <div id="about" className="about">
      <div className="about-header">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="Decorative Pattern" />
      </div>
      <div className="about-container">
        <div className="about-left">
          <img className="profile-img" src={profile_img} alt="Profile" />
        </div>
        <div className="about-right">
          <div className="about-description">
            <p>
              I am a passionate software engineer who loves building innovative
              solutions and learning cutting-edge technologies.
            </p>
            <p>
              Skilled in front-end and back-end development, with a knack for
              creating engaging user experiences.
            </p>
          </div>
          <div className="about-skills">
            <h2>Skills</h2>
            <div className="skills-grid">
              <SkillCategory
                title="Technical Skills"
                skills={[
                  { name: "JavaScript", level: "90%" },
                  { name: "React", level: "85%" },
                  { name: "Node.js", level: "80%" },
                  { name: "Python", level: "75%" },
                  { name: "SQL", level: "70%" },
                ]}
              />
              <SkillCategory
                title="Soft Skills"
                skills={[
                  { name: "Communication", level: "95%" },
                  { name: "Teamwork", level: "90%" },
                  { name: "Problem-Solving", level: "85%" },
                  { name: "Time Management", level: "80%" },
                  { name: "Leadership", level: "75%" },
                ]}
              />
              <SkillCategory
                title="Other Skills"
                skills={[
                  { name: "Event Management", level: "100%" },
                  { name: "Microsoft Office", level: "85%" },
                  { name: "ERP", level: "70%" },
                  { name: "Data Management", level: "90%" },
                  { name: "Stress Management", level: "95%" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SkillCategory = ({ title, skills }) => {
  return (
    <div className="skills-category">
      <h3>{title}</h3>
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <span>{skill.name}</span>
          <div className="progress-container">
            <div
              className="progress-bar"
              data-width={skill.level}
              style={{ transitionDelay: `${index * 0.2}s` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
