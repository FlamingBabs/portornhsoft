/* src/Contact.jsx */

import React from "react";
import "./Contact.css"; // Make sure to create the corresponding CSS file

export const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-title">Contact</div>

      <div className="contact-square">
        <div className="contact-content">
          <div className="social-media">
            <div className="social-item">
              <img
                src="/assets/svg/whatsapp.svg"
                alt="WhatsApp"
                className="social-icon"
              />
              <p className="social-info">+6285882028279</p>
            </div>
            <div className="social-item">
              <a href="https://www.instagram.com/mreyhan_r" target="_blank" rel="noopener noreferrer" className="social-link">
                <img
                  src="/assets/svg/instagram.svg"
                  alt="Instagram"
                  className="social-icon"
                />
                <p className="social-info">mreyhan_r</p>
              </a>
            </div>
            <div className="social-item">
              <a href="https://x.com/m_reyhan_r" target="_blank" rel="noopener noreferrer" className="social-link">
                <img
                  src="/assets/svg/twitter-x.svg"
                  alt="Twitter"
                  className="social-icon"
                />
                <p className="social-info">@m_reyhan_r</p>
              </a>
            </div>
            <div className="social-item">
              <a href="https://www.linkedin.com/in/muhammad-reyhan-6b85b3214/?trk=opento_sprofile_topcard" target="_blank" rel="noopener noreferrer" className="social-link">
                <img
                  src="/assets/svg/linkedin.svg"
                  alt="LinkedIn"
                  className="social-icon"
                />
                <p className="social-info">Muhammad Reyhan</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
