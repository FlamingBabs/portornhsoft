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
            - Create and maintained database for potential customer and sales. Create and maintained database server
            <br />
            - Design and create databases for various applications, including customer management, vendor management, payments, sales, and potential customer tracking.
            <br />
            - Develop database architecture, schema, and tables to optimize storage and performance.
            <br />
            - Implement and maintain database backup and recovery procedures.
            <br /> 
            - Establish and enforce database standards and guidelines to ensure consistent and efficient database operations.
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
              - Developing modular and reusable code components that streamline the development process, reduce redundancy, and enhance overall system efficiency.
            <br></br>
            - Designing, implementing, and maintaining high-performance APIs that serve as the backbone for various applications and services.
            <br />
            - Utilizing Object-Oriented Programming (OOP) principles to design and implement scalable and maintainable software architectures.
            <br />
            - Designed, developed, and implemented a customized Android launcher for Set-Top Box TV, providing an intuitive and user-friendly interface.
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
