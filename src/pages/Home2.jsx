import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import vastuM from "../pages/asse/VastuM.webp";
import stockM from "../pages/asse/stocksM.jpg";
import homeM from "../pages/asse/HomeloanM.jpg";

const Home2 = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Row className="align-items-center content-section">
        {/* Left Column - Carousel */}
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center"
          style={{ padding: "20px" }}
        >
          <Carousel
            interval={2000}
            controls={false}
            indicators={false}
            pause={false}
            style={{
              width: "100%",
              maxWidth: "500px",
              aspectRatio: "1 / 1", // Maintain square aspect ratio
            }}
          >
            {[vastuM, stockM, homeM].map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  src={img}
                  alt={`Slide ${idx}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        {/* Right Column - Text Section */}
        <Col
          md={6}
          className="d-flex flex-column justify-content-center"
          style={{ padding: "20px" }}
        >
          <h1 style={{ fontSize: "2.5rem", color: "black", marginBottom: "20px" }}>
            Why Choose Our Vastu Consultancy Services?
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            Certified Expertise: Vivek Singh is a certified Vastu consultant trained by the All
            India Institute of Occult Sciences.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            Customized Solutions: Our recommendations are tailored to your property’s layout and
            your personal goals.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            Practical and Affordable: We provide cost-effective solutions that align with modern
            lifestyles without requiring major structural changes.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            Holistic Approach: We combine Vastu with other esoteric practices like astrology and
            numerology for a comprehensive solution.
          </p>
          <h2 style={{ fontSize: "1.8rem", color: "black", marginBottom: "20px" }}>
            Our Vastu Services Include:
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            Residential Vastu: Ensure your home is a sanctuary of peace and prosperity.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            Commercial Vastu: Optimize your office or business space for success and productivity.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            Land Selection: Guidance on choosing the right plot or property to maximize positive
            energy.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            Remedial Vastu: Effective corrections for existing properties without significant
            renovations.
          </p>
          <h2 style={{ fontSize: "1.8rem", color: "black", marginBottom: "20px" }}>
            Benefits of Vastu Consultancy
          </h2>
          <ul>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Enhance financial stability.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Improve health and relationships.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Boost business growth and career success.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Create a peaceful and harmonious living environment.
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Home2;
