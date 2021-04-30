import React from "react";
import Calcumpare from "../assets/Calcumpare.jpg"
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const SecondProject = () => {
  return (
    <div className="project-wrapper">
      <Link to="first-project" className="link-position">  
          <FiArrowLeftCircle className="switch-icon"/>
      </Link>
      <div className="project-container">
        <h2 className="project-title">Calcumpare</h2>
        <div className="project-ribbon">
            <a href="https://calcumpare.netlify.app/" target="_blank">
          <img className="project-image" src={Calcumpare}/></a>
        </div>
        <h2 className="project-description-two">
          This application features two different calculators. They return information based on custom inputs for real estate compound interest investments. React, Javascript, Redux, Bootstrap and Figma were used in the development of this application. <a className="hyperlink" href="https://calcumpare.netlify.app/" target="_blank">"Click Here"</a> or on the image above to
          view this project.
        </h2>
      </div>
      <Link to="third-project" className="link-position">  
          <FiArrowRightCircle className="switch-icon"/>
      </Link>
    </div>
  );
};

export default SecondProject;
