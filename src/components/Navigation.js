import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar className="nav-bar bg-dark" variant="dark" expand="sm" sticky="top">
      <Navbar.Brand href="/">Tauan Longaretti</Navbar.Brand>
      <Nav defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link as={Link} eventKey="link-2" to="/about">
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="link-3" to="/projects">
            Projects
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
