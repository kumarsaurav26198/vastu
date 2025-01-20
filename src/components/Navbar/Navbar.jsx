import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import VSTRC from "../../pages/VSTRC.png"; // Ensure the path is correct
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from "react-icons/ai";
import { GrServices } from "react-icons/gr";

function NavBar() {
  const navigate = useNavigate();  // Ensure the useNavigate hook is used properly
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <div className="imp">
      {/* Logo above the Navbar */}
      <div style={{ textAlign: "start", padding: "10px 60px" }}>
        <img
          src={VSTRC}
          alt="brand"
          style={{
            width: "150px",
            height: "auto",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          onClick={() => navigate("/")} // Correctly using the navigate function
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        />
      </div>

      {/* Navigation Bar */}
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => updateExpanded(!expand)}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="ms-auto"
              style={{ marginTop: "30px" }}
              defaultActiveKey="#home"
            >
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    position: "relative",
                  }}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    position: "relative",
                  }}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                  About Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/service"
                  onClick={() => updateExpanded(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    position: "relative",
                  }}
                >
                  <GrServices style={{ marginBottom: "2px" }} /> Service
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={() => updateExpanded(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    position: "relative",
                  }}
                >
                  <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact
                  Us
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
