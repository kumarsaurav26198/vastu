import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // For routing
import axios from "axios"; // Import Axios for API calls

const Footer = () => {
  const [totalVisitors, setTotalVisitors] = useState("Loading...");
  const [todayVisitors, setTodayVisitors] = useState("Loading...");

  // Fetch visitor data from Google Apps Script
  useEffect(() => {
    const fetchVisitorData = async () => {
      try {
        const response = await axios.get(
          "https://script.google.com/macros/s/AKfycbwvmUygbSv1eFQCGkGENpPUXgEn141eLqyu-4ULx_cT9AYisIIw2W1tt_izgJSAXjVZLw/exec" // Replace with your Google Apps Script Web App URL
        );
        const { totalVisitors, todayVisitors } = response.data;
        setTotalVisitors(totalVisitors);
        setTodayVisitors(todayVisitors);
      } catch (error) {
        console.error("Error fetching visitor data:", error);
        setTotalVisitors("Error");
        setTodayVisitors("Error");
      }
    };

    fetchVisitorData();
  }, []);

  return (
    <footer
      style={{
        backgroundColor: "#047478",
        padding: "40px 0",
        borderTop: "1px solid #e9ecef",
        marginTop: "auto",
        color: "#fff",
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
                    color: "#fff",
                    transition: "color 0.3s ease, text-decoration 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffcc00";
                    e.currentTarget.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.textDecoration = "none";
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
                    color: "#fff",
                    transition: "color 0.3s ease, text-decoration 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffcc00";
                    e.currentTarget.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.textDecoration = "none";
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
                    color: "#fff",
                    transition: "color 0.3s ease, text-decoration 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffcc00";
                    e.currentTarget.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.textDecoration = "none";
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
                    color: "#fff",
                    transition: "color 0.3s ease, text-decoration 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ffcc00";
                    e.currentTarget.style.textDecoration = "underline";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.textDecoration = "none";
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
            <p style={{ color: "#fff", marginBottom: "0" }}>
              193, Sector 12 Dwarka,
              <br />
              New Delhi, South West Delhi - 110078
              <br />
            </p>
          </Col>

          {/* Contact */}
          <Col md={4} className="mb-4">
            <h5 style={{ fontWeight: "bold", marginBottom: "20px" }}>
              Contact
            </h5>
            <p style={{ color: "#fff", marginBottom: "0" }}>
              Email: vstrc07@gmail.com
              <br />
              Total Visitors: {totalVisitors}
              <br />
              Today's Visitors: {todayVisitors}
            </p>
          </Col>
        </Row>

        {/* Copyright */}
        <Row>
          <Col className="text-center mt-4">
            <p style={{ color: "#fff", marginBottom: "0" }}>
              &copy; {new Date().getFullYear()} VSTRC. All Rights Reserved.
            </p>
            <p style={{ color: "#fff", marginBottom: "0" }}>
              Developed by{" "}
              <a
                href="https://arvmultimedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                ARV MULTIMEDIA
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;