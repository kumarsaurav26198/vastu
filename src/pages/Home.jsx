import React from "react";
import vastu from "../pages/asse/vastu.png";
import stock from "../pages/asse/stock.jpg";
import home from "../pages/asse/home.jpg";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <Container
      fluid // Make the container fluid for full-width responsiveness
      style={{
        padding: "60px",
        backgroundColor: "white",
        minHeight: "100vh", // Ensure the container takes at least 100% of the viewport height
        display: "flex",
        alignItems: "center", // Vertically center the content
      }}
    >
      <Row className="align-items-center">
        {/* Left Column - Text */}
        <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
          <h1 style={{ fontSize: "2.5rem", color: "black", marginBottom: "20px" }}>
            Welcome to My Portfolio
          </h1>
          <p style={{ fontSize: "1.2rem", color: "black", marginBottom: "20px" }}>
            Hi, I'm Saurav Kumar, a passionate developer with expertise in web development,
            mobile apps, and more. Let's build something amazing together!
          </p>
          <button
            style={{
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "5px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#0056b3"; // Darker blue on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#007bff"; // Reset color on leave
            }}
          >
            Get Started
          </button>
        </Col>

        {/* Right Column - Carousel */}
        <Col md={6} className="text-center">
          <Carousel
            interval={2000} // Change slide every 2 seconds (2000 milliseconds)
            controls={false} // Hide default controls (optional)
            indicators={false} // Hide default indicators (optional)
            pause={false} // Disable pause on hover
            style={{
              width: "400px", // Fixed width for square shape
              height: "400px", // Fixed height for square shape
              margin: "0 auto", // Center the carousel
            }}
          >
            {/* Carousel Item 1 */}
            <Carousel.Item>
              <img
                src={vastu}
                alt="Vastu"
                style={{
                  width: "100%",
                  height: "100%", // Fill the carousel item
                  objectFit: "cover", // Ensure the image covers the area
                  borderRadius: "10px", // Rounded corners
                }}
              />
            </Carousel.Item>

            {/* Carousel Item 2 */}
            <Carousel.Item>
              <img
                src={stock}
                alt="Stock"
                style={{
                  width: "100%",
                  height: "100%", // Fill the carousel item
                  objectFit: "cover", // Ensure the image covers the area
                  borderRadius: "10px", // Rounded corners
                }}
              />
            </Carousel.Item>

            {/* Carousel Item 3 */}
            <Carousel.Item>
              <img
                src={home}
                alt="Home"
                style={{
                  width: "100%",
                  height: "100%", // Fill the carousel item
                  objectFit: "cover", // Ensure the image covers the area
                  borderRadius: "10px", // Rounded corners
                }}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;