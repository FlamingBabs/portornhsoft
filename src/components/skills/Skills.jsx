/* src/Skills.jsx */

import React from "react";
import "./Skills.css"; // Make sure to create the corresponding CSS file

export const Skills = () => {
  return (
    <div className="skills-page">
      <h2 className="skills-title">Skills</h2>

      {/* Hard Skills Section */}
      <div className="skills-section">
        <h3 className="section-title">Hard Skills</h3>
        <div className="skills-square">
          <div className="skills-list">
            <div className="skills-column">
              <ul>
                <li>Golang</li>
                <li>JavaScript</li>
                <li>React.JS</li>
                <li>Java</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="skills-column">
              <ul>
                <li>HTML/CSS</li>
                <li>Docker</li>
                <li>Git</li>
                <li>APIs</li>
                <li>Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="skills-section">
        <h3 className="section-title">Soft Skills</h3>
        <div className="skills-square">
          <div className="skills-list">
            <div className="skills-column">
              <ul>
                <li>Communication</li>
                <li>Teamwork</li>
                <li>Problem-Solving</li>
                <li>Adaptability</li>
                <li>Leadership</li>
                <li>Creativity</li>
              </ul>
            </div>
            <div className="skills-column">
              <ul>
                <li>Time Management</li>
                <li>Critical Thinking</li>
                <li>Conflict Resolution</li>
                <li>Organization</li>
                <li>Mentoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="skills-section">
        <h3 className="section-title">Languages</h3>
        <div className="skills-square">
          <div className="skills-list">
            <div className="skills-column">
              <ul>
                <li>
                  English
                  <p className="language-level">Fluent, TOEFL ITP:600</p>
                </li>
              </ul>
            </div>
            <div className="skills-column">
              <ul>
                <li>
                  Bahasa Indonesia
                  <p className="language-level">Native</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Certificates Section */}
      <div className="skills-section">
        <h3 className="section-title">Certificates</h3>
        <div className="skills-square">
          <div className="skills-list">
            <div className="skills-column">
              <ul>
                <li>Huawei HMS Foundation Course</li>
                <li>Udemy Working with React and Go Course</li>
                <li>Hackerrank SQL Advanced Certification</li>
              </ul>
            </div>
            <div className="skills-column">
              <ul>
                <li>Trevor Sawler Udemy Modern Web Application with Golang Course</li>
                <li>Hackerrank Intermediate Problem Solving Certification</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
