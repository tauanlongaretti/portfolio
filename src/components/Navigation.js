import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar className="nav-bar mx-4" variant="dark" expand="sm" sticky="top">
        <Navbar.Brand href="/" className="home-link">
          Tauan Longaretti
        </Navbar.Brand>
        <div className="ml-auto">
          <Nav defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link
                as={Link}
                className="nav-link"
                eventKey="link-2"
                to="/about"
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                className="nav-link ml-5"
                eventKey="link-3"
                to="/first-project"
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                className="nav-link ml-5"
                eventKey="link-4"
                to="/contact"
              >
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </Navbar>
      <div className="accent-nav"></div>
    </div>
  );
};

export default Navigation;
