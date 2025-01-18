import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { GrServices } from "react-icons/gr";
import VSTRC from "../../pages/VSTRC.png"; // Ensure the path is correct
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineContacts,
} from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
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
          style={{ width: "150px", height: "auto" }} // Adjust size as needed
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
            onClick={() => {
              updateExpanded(!expand);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" style={{marginTop:"30px"}} defaultActiveKey="#home">
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff8c42"; // Orange text color on hover
                    e.currentTarget.style.borderBottom = "2px solid #ff8c42"; // Orange underline on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "black"; // Reset text color on leave
                    e.currentTarget.style.borderBottom = "none"; // Remove underline on leave
                  }}
                >
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff8c42"; // Orange text color on hover
                    e.currentTarget.style.borderBottom = "2px solid #ff8c42"; // Orange underline on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "black"; // Reset text color on leave
                    e.currentTarget.style.borderBottom = "none"; // Remove underline on leave
                  }}
                >
                  <GrServices style={{ marginBottom: "2px" }} /> Service
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff8c42"; // Orange text color on hover
                    e.currentTarget.style.borderBottom = "2px solid #ff8c42"; // Orange underline on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "black"; // Reset text color on leave
                    e.currentTarget.style.borderBottom = "none"; // Remove underline on leave
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
                  to="/contact"
                  onClick={() => updateExpanded(false)}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff8c42"; // Orange text color on hover
                    e.currentTarget.style.borderBottom = "2px solid #ff8c42"; // Orange underline on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "black"; // Reset text color on leave
                    e.currentTarget.style.borderBottom = "none"; // Remove underline on leave
                  }}
                >
                  <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact Us
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