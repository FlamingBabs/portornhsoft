/* src/Business.jsx */

import React from "react";
import "./Business.css"; // Make sure to create the corresponding CSS file

export const Business = () => {
  return (
    <div className="business-page">
      <h2 className="business-title">Business Experience</h2>

      <div className="business-section">
        {/* Business Item Example */}
        <div className="business-item">
          <div className="business-item-left">
            <h3 className="company-name">Unverklei</h3>
            <p className="job-position">Founder</p>
            <p className="job-dates">March 2018 - Present</p>
          </div>

          <div className="business-item-right">
            <p className="job-description">
            Unverklei is your destination for premium t-shirts that combine comfort with standout style. Our collection features a diverse range of designs, from bold and edgy to classic and understated, allowing you to express your unique personality effortlessly.
            </p>
          </div>
        </div>

        <div className="business-item">
          <div className="business-item-left">
            <h3 className="company-name">PT Matel Digital Solution Division</h3>
            <p className="job-position">Co-Founder & Chief Technology Officer</p>
            <p className="job-dates">January 2019 - Present</p>
          </div>

          <div className="business-item-right">
            <p className="job-description">
            PT Matel Digital Solutions is a forward-thinking software house dedicated to delivering innovative digital solutions tailored to meet your business needs. Our team of skilled developers and tech experts specializes in creating cutting-edge software, from intuitive applications to robust backend systems.
            </p>
          </div>
        </div>
        <div className="business-item">
          <div className="business-item-left">
            <h3 className="company-name">Zig TV</h3>
            <p className="job-position">Co-Founder & Chief Technology Officer</p>
            <p className="job-dates">January 2020 - Present</p>
          </div>

          <div className="business-item-right">
            <p className="job-description">
                Zig TV is a Television Platform that creates a new enviroment for home to be like how they used to, Zig TV offers something that's been missing in home for years
                With the free internet that Zig Provides, it creates harmony and loving enviroment for your home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
