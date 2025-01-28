import React, { useState } from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "5ad7d5dc-992e-4d90-a92d-d6bc7ce7e3eb");

    if (!formData.get("name") || !formData.get("email") || !formData.get("message")) {
      setResult("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult("Error: " + data.message);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div id="contact" className="contact dark-theme">
      <div className="contact-title">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left glass-effect">
          <h1>Get in Touch</h1>
          <p>
            Have questions or feedback? Reach out to us, and we'll get back to you as soon as possible.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email Icon" />
              <p>support@yourdomain.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Phone Icon" />
              <p>+8801757930344</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right glass-effect">
          <label htmlFor="name">Your Name</label>
          <input id="name" type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="email">Your Email</label>
          <input id="email" type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor="message">Write Your Message</label>
          <textarea id="message" name="message" rows="6" placeholder="Enter your message"></textarea>
          <p className="form-result">{result}</p>
          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
