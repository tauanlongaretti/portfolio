import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [navMenu, setNavMenu] = useState(false);

  const handleMenuToggle = () => {
    setNavMenu(!navMenu);
  };

  const setNavStyle = () => {
    if (navMenu) {
      return "open-nav";
    } else {
      return "closed-nav";
    }
  };
  return (
    <div className={`nav-wrapper ${setNavStyle()}`}>
      <Navbar className="nav-bar" variant="dark" expand="lg">
        <Navbar.Brand href="/" className="home-link">
          Tauan Longaretti
        </Navbar.Brand>
        <Navbar.Toggle
          className="nav-button"
          onClick={() => {
            handleMenuToggle();
          }}
        />
        <Navbar.Collapse className="flex-column nav-button">
          <div className="ml-auto nav-menu-items">
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
        </Navbar.Collapse>
      </Navbar>
      <div className="accent-nav"></div>
    </div>
  );
};

export default Navigation;
