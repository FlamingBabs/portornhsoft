/* src/Projects.jsx */

import React from "react";
import "./Projects.css"; // Make sure to create the corresponding CSS file

export const Projects = () => {
  return (
    <div className="projects-page">
      <h2 className="projects-title">Personal Projects</h2>

      {/* Project 1 */}
      <div className="project-square">
        <div className="project-content">
          <div className="project-info">
            <h3 className="project-name">ANABEL</h3>
            <p className="project-description">
             ANABEL is an application to help businesses to get alternative funding rather than borrowing from a bank that could get a rates.
            </p>
          </div>
          <img
            src="/assets/images/anabelproj.png"
            alt="Project 1"
            className="project-image"
          />
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-square">
        <div className="project-content">
          <div className="project-info">
            <h3 className="project-name">Budget Finance</h3>
            <p className="project-description">
              Budget Finance is an application to help keep tracking expenses and also manage personal savings to reach a certain goals
            </p>
          </div>
          <img
            src="/assets/images/AboutPF.png"
            alt="Project 2"
            className="project-image"
          />
        </div>
      </div>

    </div>
  );
};

export default Projects;
