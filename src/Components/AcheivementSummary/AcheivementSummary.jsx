import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const AchievementSummary = () => {
  const targetAchievements = {
    experience: 10,
    projects: 90,
    services: 900,
  };

  const [achievements, setAchievements] = useState({
    experience: 0,
    projects: 0,
    services: 0,
  });

  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setAchievements((prev) => {
        const updated = { ...prev };
        if (updated.experience < targetAchievements.experience) {
          updated.experience += 1;
        }
        if (updated.projects < targetAchievements.projects) {
          updated.projects += 3;
        }
        if (updated.services < targetAchievements.services) {
          updated.services += 30;
        }
        return updated;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div
      ref={sectionRef}
      className="flex items-center justify-center"
      style={{ backgroundColor: "#121212", color: "#ffffff" }}
    >
      <div
        className="container mx-auto px-6 py-16 text-center"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <motion.h2
          className="text-xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            background: "linear-gradient(264deg, #df8908, #b415ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Experience */}
          <motion.div
            className="p-8 rounded-lg bg-#121212; shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.p
              className="text-5xl font-bold mt-4 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                background: "linear-gradient(264deg, #df8908, #b415ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {achievements.experience}+
            </motion.p>
            <p className="text-s font-medium">Years of Experience</p>
          </motion.div>

          {/* Projects */}
          <motion.div
            className="p-8 rounded-lg bg-bg-#121212 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.p
              className="text-5xl font-bold mb-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                background: "linear-gradient(264deg, #df8908, #b415ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {achievements.projects}+
            </motion.p>
            <p className="text-l font-medium">Completed Projects</p>
          </motion.div>

          {/* Services */}
          <motion.div
            className="p-8 rounded-lg bg-bg-#121212 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.p
              className="text-5xl font-bold mb-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                background: "linear-gradient(264deg, #df8908, #b415ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {achievements.services}+
            </motion.p>
            <p className="text-l font-medium">Satisfied Services</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AchievementSummary;
