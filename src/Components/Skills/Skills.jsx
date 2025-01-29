// Skills.js
import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="about-skills">
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
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <motion.div
      className="skills-category"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <h3>{title}</h3>
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <span>{skill.name}</span>
          <div className="progress-container">
            <motion.div
              className="progress-bar"
              data-width={skill.level}
              initial={{ width: 0 }}
              animate={{ width: skill.level }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            ></motion.div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Skills;
