import React from "react";
import MovieBrowsing from "../assets/MovieBrowsing.jpg";

const FirstProject = () => {
  return (
    <div className="project-wrapper">
      <h2 className="project-title">Movie Browsing</h2>
      <div className="project-ribbon">
        <img className="project-image" src={MovieBrowsing} />
      </div>
    </div>
  );
};

export default FirstProject;
