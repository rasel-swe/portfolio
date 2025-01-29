import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import education_icon from "../../assets/education.png";
import award_icon from "../../assets/award.png";
import certification_icon from "../../assets/Certification.png";
import extracurricular_icon from "../../assets/Extra-curriculam.png";
import "./SkillsExperience.css";
import { duration } from "@mui/material";

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
        {
          title: "Master of Information Technology (IT)",
          description: "Jahangirnagar University",
          duration: "06/17/2022 - Current",
        },
        {
          title:
            "Bachelor of Science in Multimedia & Creative Technology (MCT)",
          description: "Daffodil International University",
          duration: "09/01/2017 - 04/27/2022",
        },
        {
          title: "Higher Secondary School Certificate (H.S.C)",
          description: "Rajshahi Division",
          duration: "01/01/2015 - 08/18/2016",
        },
        {
          title: "Secondary School Certificate (S.S.C)",
          description: "Rajshahi Division",
          duration: "01/01/2012 - 05/17/2014",
        },
      ],
    },
    {
      title: "Certifications",
      icon: certification_icon,
      items: [
        { title: "Power and Energy Hackathon-2017", description: "GoEdu | Skill.jobs | HRDI", duration: "02/18/2023 - 02/21/2023",},
    
        {
          title: "Career Planning from News Media: Advanced Techniques",
          description: "GoEdu | Skill.jobs | HRDI",
          duration: "04/01/2022 - 04/05/2022",
        },
        
        {
          title: "Employability Skills (Part 1): Improve Job Opportunities",
          description: "GoEdu | Skill.jobs | HRDI",
          duration: "04/01/2022 - 04/05/2022",
        },
        {
          title: "Start-up Entrepreneurship: Complete Guidelines",
          description: "GoEdu | Skill.jobs | HRDI",
          duration: "04/01/2022 - 04/05/2022",
        },
        {
          title: "Setting and Achieving Focus, Goals and Targets",
          description: "GoEdu | Skill.jobs | HRDI",
          duration: "04/01/2022 - 04/05/2022",
        },
        {
          title: "Leadership Qualities - Boss VS Leader",
          description: "GoEdu | Skill.jobs | HRDI",
          duration: "04/01/2022 - 04/05/2022",
        },
        {
          title: "Soft skills & Hard Skills",
          description: "GoEdu | Skill.jobs | HRDI",
          duration: "04/01/2022 - 04/05/2022",
        },
        {
          title: "Positivity - How to Build Positive Mentality",
          description: "GoEdu | Skill.jobs | HRDI",
          duration: "04/01/2022 - 04/05/2022",
        },
        {
          title: "Become & Make A Leader: With Examples",
          description: "GoEdu | Skill.jobs | HRDI",
          duration: "04/01/2022 - 04/05/2022",
        },
        {
          title: "Instructory",
          description: "Logo Design Masters Course | Duration: 3 months",
          duration: "01/01/2022 - 03/29/2022",
        },
      ],
    },
    {
      title: "Awards",
      icon: award_icon,
      items: [
        { title: "Power and Energy Hackathon-2017", description: "Ministry of power, Energy and Mineral Resources", duration: "03/01/2017 - 03/05/2017",},
        {
          title: "Best Student's Performance Award",
          description: "Cambrian Education Group",
          duration: "09/01/2016 - 09/07/2016",
        },
        {
          title: "Youth Leadership Development Award",
          description: "Cambrian Education Group",
          duration: "09/01/2016 - 09/07/2016",
        },
      ],
    },
    {
      title: "Extra-Curricular Activities",
      icon: extracurricular_icon,
      items: [
        {
          title: "Registered Member",
          description: "CCID Bangladesh",
          duration: "01/01/2021 - Current",
        },
        {
          title: "Cadet",
          description: "Bangladesh National Cadet Corps (BNCC) | Daffodil International University",
          duration: "09/15/2019 - 03/31/2022",
        },
        {
          title: "Vice President",
          description: "MCT Sports Association | Daffodil International University",
          duration: "12/01/2020 - 02/28/2022",
        },
        {
          title: "Executive Member",
          description: "DIU Karate-Do Club - DIUKC | Daffodil International University",
          duration: "08/01/2019 - 12/31/2021",
        },
        {
          title: "Executive Member",
          description: "Daffodil Prothom Alo BondhuSova | Daffodil International University",
          duration: "05/01/2018 - 12/31/2018",
        },


       
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
            <div
              className="accordion-header"
              onClick={() => toggleSection(index)}
            >
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
                      {item.duration && (
                        <p className="duration">{item.duration}</p>
                      )}
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
