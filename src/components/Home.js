import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../assets/ProfilePic.png";

const Home = () => {
  return (
    <div className="d-flex home-wrapper">
      <div>
        <img src={ProfilePic} className="profile-picture" />
      </div>
      <div className="home-right-section">
        <div>
          <h1 className="light-text home-header">Hello, I am</h1>
          <h1 className="gold-text">Tauan Longaretti</h1>
          <p className="light-text home-text">A full stack web developer</p>
        </div>
        <div className="home-buttons d-flex justify-content-between">
          <Link to="/about">
            <button className="white-button">About</button>
          </Link>
          <Link to="/first-project">
            <button className="gold-button">Projects</button>
          </Link>
          <Link to="/contact">
            <button className="white-button">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
