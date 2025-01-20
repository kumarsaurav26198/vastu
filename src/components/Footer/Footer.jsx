import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // For routing

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "white",
        padding: "40px 0",
        borderTop: "1px solid #e9ecef",
        marginTop: "auto", // Push footer to the bottom if needed
      }}
    >
      <Container>
        <Row>
          {/* Quick Links */}
          <Col md={4} className="mb-4">
            <h5 style={{ fontWeight: "bold", marginBottom: "20px" }}>
              Quick Links
            </h5>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              <li style={{ marginTop: "10px" }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    transition: "color 0.3s ease, text-decoration 0.3s ease",
                    cursor: "pointer", // Change cursor to pointer
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "none"; // Orange color on hover
                    e.currentTarget.style.textDecoration = "underline"; // Underline on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#333"; // Reset color on leave
                    e.currentTarget.style.textDecoration = "none"; // Remove underline on leave
                  }}
                >
                  Home
                </Link>
              </li>
              <li style={{ marginTop: "10px" }}>
                <Link
                  to="/service"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    transition: "color 0.3s ease, text-decoration 0.3s ease",
                    cursor: "pointer", // Change cursor to pointer
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "none"; // Orange color on hover
                    e.currentTarget.style.textDecoration = "underline"; // Underline on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#333"; // Reset color on leave
                    e.currentTarget.style.textDecoration = "none"; // Remove underline on leave
                  }}
                >
                  Service
                </Link>
              </li>
              <li style={{ marginTop: "10px" }}>
                <Link
                  to="/about"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    transition: "color 0.3s ease, text-decoration 0.3s ease",
                    cursor: "pointer", // Change cursor to pointer
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "none"; // Orange color on hover
                    e.currentTarget.style.textDecoration = "underline"; // Underline on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#333"; // Reset color on leave
                    e.currentTarget.style.textDecoration = "none"; // Remove underline on leave
                  }}
                >
                  About Us
                </Link>
                
              </li>
              <li style={{ marginTop: "10px" }}>
                <Link
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    color: "#333",
                    transition: "color 0.3s ease, text-decoration 0.3s ease",
                    cursor: "pointer", // Change cursor to pointer
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "none"; // Orange color on hover
                    e.currentTarget.style.textDecoration = "underline"; // Underline on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#333"; // Reset color on leave
                    e.currentTarget.style.textDecoration = "none"; // Remove underline on leave
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </Col>

          {/* Address */}
          <Col md={4} className="mb-4">
            <h5 style={{ fontWeight: "bold", marginBottom: "20px" }}>
              Address
            </h5>
            <p style={{ color: "#333", marginBottom: "0" }}>
              afcst,
              <br />
              abce1,
              <br />
             afdd
            </p>
          </Col>

          {/* Contact */}
          <Col md={4} className="mb-4">
            <h5 style={{ fontWeight: "bold", marginBottom: "20px" }}>
              Contact
            </h5>
            <p style={{ color: "#333", marginBottom: "0" }}>
              Phone: 9878987
              <br />
              Email: info@example.com
            </p>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center mt-4">
            <p style={{ color: "#666", marginBottom: "0" }}>
              &copy; {new Date().getFullYear()} Your Company. All Rights
              Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
