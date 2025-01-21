import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Social = () => {
  return (
    <Container
      fluid // Make the container fluid for full-width responsiveness
      style={{
        padding: "30px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh", // Ensure the container takes at least 50% of the viewport height
      }}
    >
      <Row className="justify-content-center text-center">
        <Col md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Text Section */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h1 style={{ fontSize: "2.5rem", color: "black" }}>FIND ME ON</h1>
            <p style={{ fontSize: "1.2rem", color: "black" }}>
              Please don't hesitate to reach out to me and{" "}
              <span style={{ color: "#ffc107" }}>connect.</span>
            </p>
          </div>

          {/* Social Icons Section */}
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              listStyle: "none",
              padding: "0",
              margin: "0",
            }}
          >
            <li style={{ margin: "0 15px" }}>
              <a
                href="https://github.com/kumarsaurav26198"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "black",
                  fontSize: "2rem",
                  transition: "color 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#007bff"; // Change icon color on hover
                  e.currentTarget.style.transform = "scale(1.2)"; // Slightly enlarge icon on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "black"; // Reset icon color on leave
                  e.currentTarget.style.transform = "scale(1)"; // Reset icon size on leave
                }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li style={{ margin: "0 15px" }}>
              <a
                href="https://twitter.com/magnetsaurav"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "black",
                  fontSize: "2rem",
                  transition: "color 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#007bff"; // Change icon color on hover
                  e.currentTarget.style.transform = "scale(1.2)"; // Slightly enlarge icon on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "black"; // Reset icon color on leave
                  e.currentTarget.style.transform = "scale(1)"; // Reset icon size on leave
                }}
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li style={{ margin: "0 15px" }}>
              <a
                href="https://www.linkedin.com/in/saurav-kumar-55b5131ab/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "black",
                  fontSize: "2rem",
                  transition: "color 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#007bff"; // Change icon color on hover
                  e.currentTarget.style.transform = "scale(1.2)"; // Slightly enlarge icon on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "black"; // Reset icon color on leave
                  e.currentTarget.style.transform = "scale(1)"; // Reset icon size on leave
                }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li style={{ margin: "0 15px" }}>
              <a
                href="https://www.instagram.com/magnetsaurav/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "black",
                  fontSize: "2rem",
                  transition: "color 0.3s ease, transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#007bff"; // Change icon color on hover
                  e.currentTarget.style.transform = "scale(1.2)"; // Slightly enlarge icon on hover
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "black"; // Reset icon color on leave
                  e.currentTarget.style.transform = "scale(1)"; // Reset icon size on leave
                }}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;