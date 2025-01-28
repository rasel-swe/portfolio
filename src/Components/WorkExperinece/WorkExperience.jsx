import React, { useState, useEffect } from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const experiences = [
    {
      id: 1,
      role: "Software Engineer",
      company: "Acme Corp",
      companyLogo: "path/to/acme-logo.png",
      dates: "January 2020 - Present",
      responsibilities: [
        "Developed and maintained web applications using React and Node.js.",
        "Collaborated with cross-functional teams to deliver high-quality products.",
        "Implemented unit tests and conducted code reviews.",
      ],
      skills: ["React", "Node.js", "JavaScript", "HTML", "CSS", "Git", "Agile"],
    },
    {
      id: 2,
      role: "Junior Software Engineer",
      company: "Tech Solutions Inc.",
      companyLogo: "path/to/tech-solutions-logo.png",
      dates: "June 2018 - December 2019",
      responsibilities: [
        "Contributed to the development of a mobile application using React Native.",
        "Participated in daily stand-up meetings and sprint planning sessions.",
        "Gained experience in agile development methodologies.",
      ],
      skills: ["React Native", "JavaScript", "Mobile Development", "Agile"],
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Creative Studios",
      companyLogo: "path/to/creative-studios-logo.png",
      dates: "March 2017 - May 2018",
      responsibilities: [
        "Designed and implemented responsive web interfaces.",
        "Worked closely with designers to create user-friendly UIs.",
        "Optimized website performance and SEO.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "SEO", "Bootstrap"],
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === experiences.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // 4-second smooth transition
      return () => clearInterval(interval);
    }
  }, [isHovered, experiences.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? experiences.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === experiences.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section id="work-experience" className="work-experience">
      <h2>Work Experience</h2>
      <div className="slider">
        <button className="nav-button prev" onClick={goToPrevious}>
          &#9664;
        </button>
        <div
          className="slider-content"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="experience-card"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="card-header">
                <img
                  className="company-logo"
                  src={experience.companyLogo}
                  alt={`${experience.company} logo`}
                />
                <h3>{experience.role}</h3>
                <h4>{experience.company}</h4>
                <p>{experience.dates}</p>
              </div>
              <div className="card-body">
                <ul className="responsibilities">
                  {experience.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
                <div className="skills">
                  <h5>Skills Used:</h5>
                  <div className="skills-tags">
                    {experience.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button next" onClick={goToNext}>
          &#9654;
        </button>
      </div>
    </section>
  );
};

export default WorkExperience;
