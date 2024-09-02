import React from "react";
import { Link } from "react-router-dom";
import "./About.css"; // Make sure to create the corresponding CSS file

export const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        {/* Left Side */}
        <div className="about-left">
          <img
            src="/assets/images/Picture.jpeg"
            alt="Profile"
            className="profile-photo"
          />
          <h2 className="name">Muhammad Reyhan</h2>
          <p className="position">Software Engineer & Entrepreneur</p>
        </div>

        {/* Right Side */}
        <div className="about-right">
          <h2 className="title">Hello!</h2>
          <h3 className="subtitle">Who I Am?</h3>

          <div className="buttons">
            <Link to="/resume" className="btn">
              Resume
            </Link>
            <Link to="/business" className="btn">
              Business
            </Link>
            <Link to="/skills" className="btn">
              Skills
            </Link>
          </div>

          <p className="description">
            Hello! I'm Reyhan, a passionate software engineer. I have a strong background in building
            scalable applications and working with modern technologies like
            React, Golang etc. I also have businesses. In short i make things.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
