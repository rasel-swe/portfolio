import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./SkillsExperience.css";
import education_icon from "../../assets/education.png";
import award_icon from "../../assets/award.png";
import certification_icon from "../../assets/award.png";
import extracurricular_icon from "../../assets/award.png";

const SkillsExperiences = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Education",
      icon: education_icon,
      items: [
        { title: "Master of Information Technology (IT)", description: "Jahangirnagar University", duration: "06/17/2022 - Current" },
        { title: "Bachelor of Science in Multimedia & Creative Technology (MCT)", description: "Daffodil International University", duration: "09/01/2017 - 04/27/2022" },
        { title: "Higher Secondary School Certificate (H.S.C)", description: "Rajshahi Division", duration: "01/01/2015 - 08/18/2016" },
        { title: "Secondary School Certificate (S.S.C)", description: "Rajshahi Division", duration: "01/01/2012 - 05/17/2014" },
      ],
    },
    {
      title: "Certifications",
      icon: certification_icon,
      items: [
        { title: "Certified React Developer", description: "Udemy" },
        { title: "AWS Certified Solutions Architect", description: "Amazon Web Services" },
      ],
    },
    {
      title: "Awards",
      icon: award_icon,
      items: [
        { title: "Hackathon Winner", description: "National Coding Championship, 2022" },
        { title: "Dean's List", description: "Jahangirnagar University, 2023" },
      ],
    },
    {
      title: "Extra-Curricular Activities",
      icon: extracurricular_icon,
      items: [
        { title: "President of the Programming Club", description: "Daffodil International University" },
        { title: "Volunteer", description: "Tech for Good Hackathon, 2022" },
      ],
    },
  ];

  return (
    <div className="skills-experiences">
      <h2 className="section-heading">Skills & Experiences</h2>
      <div className="accordion">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="accordion-item"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="accordion-header" onClick={() => toggleSection(index)}>
              <div className="header-left">
                <img src={section.icon} alt={section.title} />
                <h3>{section.title}</h3>
              </div>
              <motion.div
                className="header-icon"
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ▶
              </motion.div>
              {hoverIndex === index && (
                <motion.div
                  className="countdown"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 1 }}
                >
                  Viewing...
                </motion.div>
              )}
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="accordion-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {section.items.map((item, i) => (
                    <div key={i} className="accordion-item-details">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      {item.duration && <p className="duration">{item.duration}</p>}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsExperiences;
