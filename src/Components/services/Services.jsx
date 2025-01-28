import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  const handleReadMore = (serviceName) => {
    console.log(`Read more about ${serviceName}`);
    // Add functionality for opening a modal or navigating to a detailed page.
  };

  return (
    <div id="service" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Decorative Pattern" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-card">
            <div className="services-icon">{service.icon}</div>
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div
              className="services-readmore"
              onClick={() => handleReadMore(service.s_name)}
            >
              <p>Read More</p>
              <img src={arrow_icon} alt="Arrow Icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
