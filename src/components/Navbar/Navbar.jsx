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
  const navigate = useNavigate(); // Ensure the useNavigate hook is used properly
  const [expand, updateExpanded] = useState(false);

  return (
    <div className="imp">
      {/* Logo above the Navbar */}
      <div
        style={{
          textAlign: "start",
          padding: "10px 60px",
          display: "none", // Hide by default
        }}
        className="logo-container"
      >
       <img
  src={VSTRC}
  alt="brand"
  style={{
    width: "150px",
    height: "auto",
    cursor: "pointer",
    transition: "transform 0.7s ease",
    position: "fixed", // Fix the logo at the top
    top: "10px", // Adjust the distance from the top
    left: "60px", // Adjust the distance from the left
    zIndex: 1001, // Ensure the logo is above all other content
    backgroundColor: "transparent", // Optional: Add a background color if needed
  }}
  onClick={() => navigate("/")} // Correctly using the navigate function
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.37)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
/>
      </div>

      {/* Navigation Bar */}
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        style={{
          zIndex: 1000, // Ensure the navbar is above other content
          backgroundColor: "#04767A", // Set the background color to #04767A
        }}
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
                    color: "white", // Set text color to white for better contrast
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
                    color: "white", // Set text color to white for better contrast
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
                    color: "white", // Set text color to white for better contrast
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
                    color: "white", // Set text color to white for better contrast
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

      {/* Inline CSS for Media Query */}
      <style>
        {`
          @media (min-width: 768px) {
            .logo-container {
              display: block !important; /* Show logo on screens larger than 768px */
            }
          }
        `}
      </style>
    </div>
  );
}

export default NavBar;