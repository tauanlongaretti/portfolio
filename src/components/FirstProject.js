import React from "react";
import MovieBrowsing from "../assets/MovieBrowsing.jpg";
import {FiArrowRightCircle, FiArrowLeftCircle} from "react-icons/fi";

const FirstProject = () => {
  return (
    <div className="project-wrapper">
      <FiArrowLeftCircle className="switch-icon"/>
      <div className="project-container">
        <h2 className="project-title">Movie Browsing</h2>
        <div className="project-ribbon">
          <img className="project-image" src={MovieBrowsing} />
        </div>
        <h2 className="project-description">A movie library app that provides the user many ways of browsing for a movie. React, Javascript and The Movie Database API were used in the development of this application. "Click Here" or on the image above to view this project. </h2>
      </div>
      <FiArrowRightCircle className="switch-icon"/>
    </div>
  );
};

export default FirstProject;
