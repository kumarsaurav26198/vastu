import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // For routing

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#047478", // Updated background color
        padding: "40px 0",
        borderTop: "1px solid #e9ecef",
        marginTop: "auto", // Push footer to the bottom if needed
        color: "#fff", // Set text color to white for better contrast
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
                    color: "#fff", // White text color
                    transition: "color 0.3s ease, text-decoration 0.3s ease",
                    cursor: "pointer", // Change cursor to pointer
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffcc00"; // Yellow color on hover
                    e.currentTarget.style.textDecoration = "underline"; // Underline on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#fff"; // Reset color on leave
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
                    color: "#fff", // White text color
                    transition: "color 0.3s ease, text-decoration 0.3s ease",
                    cursor: "pointer", // Change cursor to pointer
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffcc00"; // Yellow color on hover
                    e.currentTarget.style.textDecoration = "underline"; // Underline on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#fff"; // Reset color on leave
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
                    color: "#fff", // White text color
                    transition: "color 0.3s ease, text-decoration 0.3s ease",
                    cursor: "pointer", // Change cursor to pointer
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffcc00"; // Yellow color on hover
                    e.currentTarget.style.textDecoration = "underline"; // Underline on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#fff"; // Reset color on leave
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
                    color: "#fff", // White text color
                    transition: "color 0.3s ease, text-decoration 0.3s ease",
                    cursor: "pointer", // Change cursor to pointer
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffcc00"; // Yellow color on hover
                    e.currentTarget.style.textDecoration = "underline"; // Underline on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#fff"; // Reset color on leave
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
            <p style={{ color: "#fff", marginBottom: "0" }}> {/* White text color */}
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
            <p style={{ color: "#fff", marginBottom: "0" }}> {/* White text color */}
              Phone: 9878987
              <br />
              Email: info@example.com
            </p>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center mt-4">
            <p style={{ color: "#fff", marginBottom: "0" }}> {/* White text color */}
              &copy; {new Date().getFullYear()} VSTRC. All Rights Reserved.
             
            </p>
            <p style={{ color: "#fff", marginBottom: "0" }}> Developed by ARV MULTIMEDIA
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;