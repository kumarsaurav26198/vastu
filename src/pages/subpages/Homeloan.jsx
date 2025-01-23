import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import homeloan from "../asse/HomeLink.jpg";
import { useNavigate } from "react-router-dom";

const Homeloan = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid style={{ backgroundColor: 'white', padding: '50px 0' }}>
        <Container>
          <Row className="align-items-center mt-5">
            <Col md={8} style={{ textAlign: 'left', paddingRight: '20px' }}>
              <h1 style={{ color: 'black' }}>Home Loan Solutions</h1>
              <p style={{ color: 'black' }}>
                Unlock Your Dream Home with Expert Home Loan Guidance
              </p>
              <p style={{ color: 'black' }}>
                At Vivek Singh – The Real Consultant, we simplify the process of securing the perfect home loan. With over 14 years of experience in mortgage lending, we provide personalized financial solutions tailored to your needs.
              </p>
              <Row>
                <Col>
                  <h3 style={{ color: 'black' }}>What We Offer:</h3>
                  <ul style={{ color: 'black', listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Assistance in finding the best interest rates and repayment terms.</li>
                    <li>Guidance through the loan application process for seamless approvals.</li>
                    <li>Support for first-time home buyers and individuals looking to upgrade or refinance.</li>
                    <li>Expertise in managing loans against property for additional financial flexibility.</li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3 style={{ color: 'black' }}>Why Choose Us?</h3>
                  <p style={{ color: 'black' }}>
                    Our client-first approach ensures you receive transparent advice, competitive rates, and stress-free loan approvals. Let us help you turn your dream home into reality.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <button
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      fontSize: '16px',
                      cursor: 'pointer',
                    }}
                    onClick={() => navigate("/contact")}
                  >
                    Get Started Today!
                  </button>
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <img src={homeloan} alt="Home Loan" style={{ width: '100%', borderRadius: '10px' }} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Homeloan;
