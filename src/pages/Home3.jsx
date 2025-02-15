import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import vastuM from "../pages/asse/VastuM.webp";
import stockM from "../pages/asse/stocksM.jpg";
import homeM from "../pages/asse/HomeloanM.jpg";

const Home3 = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Row className="align-items-center content-section">
        {/* Left Column - Text Section */}
        <Col
          md={6}
          className="d-flex flex-column justify-content-center order-2 order-md-1" // Reorder for mobile
          style={{ padding: "20px" }}
        >
          <h1 style={{ fontSize: "2.5rem", color: "black", marginBottom: "20px" }}>
            Stock Market Strategies
          </h1>
          <h2 style={{ fontSize: "1.8rem", color: "black", marginBottom: "20px" }}>
            Navigate the Stock Market with Confidence
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            The stock market can be daunting, but with the right guidance, it becomes a powerful tool for wealth creation. At Vivek Singh – The Real Consultant, we provide personalized trading strategies to help you achieve your financial goals.
          </p>
          <h3 style={{ fontSize: "1.5rem", color: "black", marginBottom: "20px" }}>
            Why Choose Us for Stock Market Guidance?
          </h3>
          <ul>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Certified Technical Analyst: Vivek Singh is certified by NSE Academy, ensuring reliable and informed strategies.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Personalized Plans: Every investor is different, and we craft strategies based on your risk appetite, financial goals, and market knowledge.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Proven Track Record: Over 14 years of experience in helping clients succeed in a dynamic market.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Comprehensive Support: From technical analysis to portfolio management, we provide end-to-end services.
            </li>
          </ul>
          <h3 style={{ fontSize: "1.5rem", color: "black", marginBottom: "20px" }}>
            Our Stock Market Services Include:
          </h3>
          <ul>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Beginner Guidance: Perfect for those new to investing, we simplify market concepts and help you get started.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Portfolio Management: Build and optimize a diversified portfolio for long-term growth.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Trading Strategies: Learn technical analysis and strategies for day trading, swing trading, and long-term investments.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Risk Management: Minimize losses and maximize returns with smart risk management techniques.
            </li>
          </ul>
          <h3 style={{ fontSize: "1.5rem", color: "black", marginBottom: "20px" }}>
            Educational Resources
          </h3>
          <p
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            We believe in empowering our clients with knowledge. That’s why we offer training sessions, webinars, and personalized coaching on topics such as:
          </p>
          <ul>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Reading charts and technical indicators.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Identifying profitable stocks.
            </li>
            <li style={{ fontSize: "1.1rem", color: "black", marginBottom: "10px" }}>
              Managing emotions in trading.
            </li>
          </ul>
        </Col>

        {/* Right Column - Carousel */}
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center order-1 order-md-2" // Reorder for mobile
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
                  className="carousel-imagehehe" 
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default Home3;