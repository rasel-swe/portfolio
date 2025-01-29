import React, { useState, useEffect } from "react";
import "./WorkExperience.css";
import job_diu from "../../assets/job-diu.jpeg";
import job_labane from "../../assets/job-labane.png";
import jo_R_B from "../../assets/job-r&b.png";
import job_hotel_icon from "../../assets/job-hotel.png";
import jon_cab from "../../assets/job-cab.jpg";
import diu from "../../assets/diu.jpg";

const WorkExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const experiences = [
    {
      id: 1,
      role: "Assistant Exam Officer ",
      company:
        "Office of the Controller of Examination | Daffodil International University",
      companyLogo: job_diu,
      dates: "January 2020 - Present",
      responsibilities: [
        "Student counseling is provided in-person, online, and via phone, addressing academic, document, and verification needs. Tasks include portal assistance, official calls, transcript searches, WES/form support, document verification, data entry, alumni registration, email management, and report updates. Administrative duties involve processing applications and maintaining records.",
      ],
      skills: ["Google Sheets ", "WES/ECA", "Word", "Excel", "Drive", "Docs"],
    },
    {
      id: 2,
      role: "Digital Marketer",
      company: "Labane.com",
      companyLogo: job_labane,
      dates: "January 2022 - June 2022",
      responsibilities: [
        "I focused on product marketing by understanding customer needs, researching products, and writing customer-friendly articles optimized with SEO. I created and edited product videos, conducted keyword research for articles and videos, and ensured content aligned with customer preferences and search engine requirements.",
      ],
      skills: ["SEO Tools ", "WordPress", "MoAdobe Premiere Pro ", "Canva"],
    },
    {
      id: 3,
      role: "Graphics Designer (Intern)",
      company: "R&B Creative Studio",
      companyLogo: jo_R_B,
      dates: "March 2021 - December 2021",
      responsibilities: [
        " I communicated directly with clients, researched their requirements, and collaborated with the team to deliver final designs. Using Adobe Photoshop and Illustrator, I created and finalized designs, ensuring client satisfaction by submitting complete files",
      ],
      skills: [
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Design Research",
        "Creative Problem-Solving",
      ],
    },
    {
      id: 4,
      role: "Hotel Tropical Daisy",
      company: "R&B Creative Studio",
      companyLogo: job_hotel_icon,
      dates: "January 2021- February 2021",
      responsibilities: [
        "I managed document registration in software, negotiated pricing with clients/guests, and reviewed billing processes. I also addressed client inquiries politely and provided clear explanations to ensure excellent customer service.",
      ],
      skills: [
        "Time Managemen",
        "Billing and Accounting Processes",
        "Problem-Solving",
        "Data Entry ",
      ],
    },
    {
      id: 5,
      role: "Call Center and Admin & Customer Support",
      company: "Consumers Association of Bangladesh (CAB)",
      companyLogo: jon_cab,
      dates: "March 2019 - September 2019",
      responsibilities: [
        "I handled incoming and outgoing calls to update customers on their queries. I provided administrative and office support, assisted with customer and office-related issues, and maintained required documentation for smooth operations.",
      ],
      skills: [
        "MS Office",
        "Google Workspace",
        "Problem-Solving",
        "Administrative Support",
      ],
    },
    {
      id: 6,
      role: "Student Associate",
      company:
        "Office of the Controller of Examination | Daffodil International University",
      companyLogo: diu,
      dates: "September 2018 - February 2019",
      responsibilities: [
        " I organized and managed student files for convocation, contacted students post-degree completion, and supported office administration in managing challenge events. I collaborated with the team to share tasks and ensure smooth operations.",
      ],
      skills: [
        "File and Data Management",
        "Google Workspace",
        "Problem-Solving",
        "Event Coordination",
      ],
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
                  alt={`${experience.companyLogo} logo`}
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
