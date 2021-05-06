import React from "react";
import MovieBrowsing from "../assets/MovieBrowsing.jpg";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const FirstProject = () => {
  return (
    <div className="project-wrapper">
      <Link to="third-project" className="link-position">
        <FiArrowLeftCircle className="switch-icon" />
      </Link>
      <div className="project-container">
        <h1 className="project-title">Movie Browsing</h1>
        <div className="project-ribbon">
          <a href="https://moviebrowsing.netlify.app/" target="_blank">
            <img className="project-image" src={MovieBrowsing} />
          </a>
        </div>
        <h2 className="project-description">
          A movie library app that provides the user many ways of browsing for a
          movie. React, Javascript and The Movie Database API were used in the
          development of this application.{" "}
          <a
            className="hyperlink"
            href="https://moviebrowsing.netlify.app/"
            target="_blank"
          >
            "Click Here"
          </a>{" "}
          or on the image above to view this project.
        </h2>
      </div>
      <Link to="second-project" className="link-position">
        <FiArrowRightCircle className="switch-icon" />
      </Link>
    </div>
  );
};

export default FirstProject;
