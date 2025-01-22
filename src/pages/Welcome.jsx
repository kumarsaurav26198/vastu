import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import vastuM from "../pages/asse/VastuM.webp";
import stockM from "../pages/asse/stocksM.jpg";
import homeM from "../pages/asse/HomeloanM.jpg";

const Welcome = () => {
  return (
    
    <div style={{ minHeight: "100vh" }}>
      
      <Row className="align-items-center content-section">
        {/* Left Column - Carousel */}
        <Col
          md={6}
          xs={12} // Full width on mobile
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
          xs={12} // Full width on mobile
          className="d-flex flex-column justify-content-center"
          style={{ padding: "20px" }}
        >
          <h1 style={{ fontSize: "2.5rem", color: "black", marginBottom: "20px" }}>
            Welcome to Vivek Singh – The Real Consultant
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            Empowering Financial Success, Holistic Living, and Personal Growth
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
            At Vivek Singh – The Real Consultant, we bring over 14 years of expertise in mortgage lending products, stock market strategies, and holistic consulting to offer personalized solutions designed specifically for your unique needs. Under the leadership of Vivek Singh, a seasoned professional and visionary, we are committed to helping you achieve financial stability, personal well-being, and spiritual harmony.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            Whether you're looking to enhance your financial portfolio, improve your life balance, or make informed decisions for a prosperous future, we are here to guide you every step of the way. Vivek Singh welcomes you to join us on this transformative journey toward lasting success.
          </p>

          <h2 style={{ fontSize: "1.8rem", color: "black", marginBottom: "20px" }}>
            What We Offer:
          </h2>
          <ul>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Tailored Mortgage Solutions: Leveraging extensive experience in mortgage lending to provide you with the best financing options for home ownership or investment properties.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Stock Market Expertise: Offering strategic guidance to navigate the complexities of the stock market and optimize your investments for long-term growth and security.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Holistic Consulting: Providing a balanced approach to life, helping you align your personal, professional, and spiritual goals to create harmony and success.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Financial Stability: Helping you manage your finances, plan for the future, and achieve your financial goals with expert advice and support.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Personal Growth: Empowering you to achieve mental clarity, emotional well-being, and self-awareness through holistic practices and customized coaching.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Visionary Leadership: Guided by Vivek Singh, who has a deep passion for helping individuals and businesses achieve their full potential.
            </li>
          </ul>
        </Col>
      </Row>

    </div>
  );
};

export default Welcome;