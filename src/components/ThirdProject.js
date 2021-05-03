import React from "react";
import TidyHive from "../assets/TidyHive.jpg";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const ThirdProject = () => {
  return (
    <div className="project-wrapper">
      <Link to="second-project" className="link-position">
        <FiArrowLeftCircle className="switch-icon" />
      </Link>
      <div className="project-container">
        <h2 className="project-title">TidyHive</h2>
        <div className="project-ribbon">
          <a href="https://tidyhive-fe.herokuapp.com/" target="_blank">
            <img className="project-image" src={TidyHive} />
          </a>
        </div>
        <h2 className="project-description-three">
          An application that auxiliates with organization and delegation of
          tasks. React, Javascript, Redux, Jest, Node JS, Postgres, Knex,
          Tailwind, SendGrid, Trello and Figma were used in the development of
          this application.{" "}
          <a
            className="hyperlink"
            href="https://tidyhive-fe.herokuapp.com/"
            target="_blank"
          >
            "Click Here"
          </a>{" "}
          or on the image above to view this project.
        </h2>
      </div>
      <Link to="first-project" className="link-position">
        <FiArrowRightCircle className="switch-icon" />
      </Link>
    </div>
  );
};

export default ThirdProject;
