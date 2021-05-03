import React from "react";

const About = () => {
  return (
    <div className="d-flex flex-wrap about-container">
      <div className="about-wrapper">
        <div className="about-section">
          <h1 className="gold-text text-center about-header">About Me</h1>
          <p className="light-text paragraph-font mt-3">
            I have a strong background in math and visual arts. I love working
            in teams with the goal of achieving exceptional results. Dedication
            and ambition are a few of my traits. I am also a content creator and
            competitive gamer. Always curious and excited to learn new things.
          </p>
        </div>
        <div className="attributes">
          <h2 className="gold-text text-center skills-header">
            Languages - Frameworks - Skills
          </h2>
          <ul className="light-text unordered-list mt-3">
            <div className="d-flex flex-row justify-content-between">
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>Styled Comp</li>
              <li>Bootstrap</li>
              <li>Redux</li>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <li>React</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Postgress</li>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <li>Photoshop</li>
              <li>Adobe Premiere</li>
              <li>Portuguese</li>
              <li>Spanish</li>
              <li>Math</li>
            </div>
          </ul>
          <ul className="flex-row light-text unordered-list-mob">
            <div className="d-flex flex-column unordered-list-mob-columns">
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>Styled Comp</li>
              <li>Bootstrap</li>
              <li>Redux</li>
            </div>
            <div className="d-flex flex-column unordered-list-mob-columns">
              <li>React</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Postgress</li>
            </div>
            <div className="d-flex flex-column unordered-list-mob-columns">
              <li>Portuguese</li>
              <li>Spanish</li>
              <li>Math</li>
              <li>Photoshop</li>
              <li>Adobe Premiere</li>
            </div>
          </ul>
          <ul className="flex-row light-text unordered-list-smallest">
            <div className="d-flex flex-column unordered-list-mob-columns">
              <li>HTML</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>Styled Comp</li>
              <li>Bootstrap</li>
              <li>Redux</li>
              <li>React</li>
              <li>Javascript</li>
              <li>Python</li>
            </div>
            <div className="d-flex flex-column unordered-list-mob-columns">
              <li>Node.js</li>
              <li>Express</li>
              <li>Postgress</li>
              <li>Portuguese</li>
              <li>Spanish</li>
              <li>Math</li>
              <li>Photoshop</li>
              <li>Adobe Prem.</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
