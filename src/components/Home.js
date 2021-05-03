import React from "react";
import { Link } from "react-router-dom";
import ProfilePic from "../assets/ProfilePic.png";
import ProfileMob from "../assets/ProfileMob.png";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-mob">
        <h1 className="light-text home-mob-header">Full Stack Web Developer</h1>
        <img src={ProfileMob} className="profile-mob" />
      </div>
      <div className="home-tablet">
        <img src={ProfilePic} className="profile-picture" />
      </div>
      <div className="home-right-section">
        <div className="home-tablet">
          <h1 className="light-text home-header">Hello, I am</h1>
          <h1 className="gold-text home-header">Tauan Longaretti</h1>
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
