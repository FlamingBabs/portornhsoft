// src/Resume.js
import React from "react";
import "./Resume.css"; // Ensure you have the CSS file for styling

const Resume = () => {
  return (
    <div className="resume-page">
      {/* Experience Section */}
      <h2 className="resume-title">Experience</h2>
      <div className="resume-section">
        {/* Example Experience 1 */}
        <div className="resume-item">
          <div className="resume-item-left">
            <h3 className="company-name">PT Matrixnet Global Indonesia</h3>
            <p className="job-position">Database Administrator</p>
            <p className="job-dates">February 2020 - February 2021</p>
          </div>
          <div className="resume-item-right">
            <p className="job-description">
              - Developed and maintained web applications using React and Node.js.
              <br />
              - Collaborated with cross-functional teams to define, design, and ship new features.
              <br />
              - Optimized applications for maximum speed and scalability.
            </p>
          </div>
        </div>

        {/* Example Experience 2 */}
        <div className="resume-item">
          <div className="resume-item-left">
            <h3 className="company-name">PT Pinq Andalan Utama</h3>
            <p className="job-position">Application Developer</p>
            <p className="job-dates">February 2022 - Current</p>
          </div>
          <div className="resume-item-right">
            <p className="job-description">
              - Designed and developed user-friendly web pages using HTML, CSS, and JavaScript.
              <br />
              - Ensured high performance on both mobile and desktop.
              <br />
              - Improved the overall UX by implementing responsive design principles.
            </p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <h2 className="resume-title">Education</h2>
      <div className="resume-section">
        {/* Example Education 1 */}
        <div className="resume-item">
          <div className="resume-item-left">
            <h3 className="company-name">Binus University</h3>
            <p className="job-position">Bachelor of Computer Science</p>
            <p className="job-dates">2019 - 2023</p>
          </div>
          <div className="resume-item-right">
            <p className="job-description">
              - Specialized in software development, data structures and object oriented programming. 
              <br />
              - Completed a thesis on alternative funding website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
