import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import vastuM from "../pages/asse/VastuM.webp";
import stockM from "../pages/asse/stocksM.jpg";
import homeM from "../pages/asse/HomeloanM.jpg";

const Home1 = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Row className="align-items-center content-section">
        {/* Left Column - Home Loan Services Section */}
        <Col
          md={6}
          className="d-flex flex-column justify-content-center order-2 order-md-1" // Reorder for mobile
          style={{ padding: "20px" }}
        >
          <h1 style={{ fontSize: "2.5rem", color: "black", marginBottom: "20px" }}>
            Home Loan Services
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            Achieve Your Dream Home with Ease
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            Buying a home is one of the most significant milestones in life. At Vivek Singh – The
            Real Consultant, we simplify the process by offering expert guidance and customized home
            loan solutions tailored to your financial goals.
          </p>
          <h2 style={{ fontSize: "1.8rem", color: "black", marginBottom: "20px" }}>
            Why Choose Our Home Loan Services?
          </h2>
          <ul
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            <li>Extensive Expertise: With years of experience in mortgage lending, we help you navigate the complexities of home loans effortlessly.</li>
            <li>Tailored Solutions: We assess your financial profile to provide the best loan options suited to your needs.</li>
            <li>Trusted Network: Partnered with leading banks and financial institutions, we ensure you get competitive interest rates and favorable terms.</li>
            <li>End-to-End Support: From documentation to loan disbursement, we guide you every step of the way.</li>
          </ul>
          <h3 style={{ fontSize: "1.5rem", color: "black", marginBottom: "20px" }}>
            Types of Home Loans We Offer:
          </h3>
          <ul
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            <li>New Home Purchase Loans: For first-time buyers or those upgrading to a new property.</li>
            <li>Home Loan Balance Transfer: Reduce your EMI burden by transferring your existing loan to a lower interest rate.</li>
            <li>Loan Against Property: Unlock the value of your property for personal or business needs.</li>
            <li>Top-Up Loans: Access additional funds on your existing home loan.</li>
          </ul>
          <p
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginBottom: "20px",
              lineHeight: "1.8",
            }}
          >
            Our process includes a detailed consultation to understand your requirements, evaluating
            your eligibility, and connecting you with the right lender. We also assist with credit
            score improvements and documentation to maximize your chances of approval.
          </p>
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

export default Home1;