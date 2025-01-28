import React from 'react';
// import themePattern from '../../assets/theme_pattern.svg';
import myWorkData from '../../assets/mywork_data';
import arrowIcon from '../../assets/arrow_icon.svg';
import './MyWork.css';

const MyWork = () => {
  const handleShowMore = () => {
    console.log('Show more projects clicked!');
    // Add functionality for navigation or lazy loading projects.
  };

  return (
    <div id="portfolio" className="mywork">
      <div className="mywork-header">
        <h1>My Latest Work</h1>
        <img src="" alt="Background Pattern" />
      </div>
      <div className="mywork-grid">
        {myWorkData.map((work, index) => (
          <div key={index} className="mywork-card">
            <img src={work.w_img} alt={`Project ${index + 1}`} className="work-image" />
            <div className="work-overlay">
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <a href={work.link} target="_blank" rel="noopener noreferrer" className="view-button">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="mywork-showmore" onClick={handleShowMore}>
        <p>Show More</p>
        <img src={arrowIcon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default MyWork;
