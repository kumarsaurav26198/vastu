import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import stock from "../asse/StockLink.jpg";
import { useNavigate } from "react-router-dom";

const Stocks = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid style={{ backgroundColor: 'white', padding: '50px 0' }}>
        <Container>
          <Row className="align-items-center mt-5">
            {/* Left side: Content (65% width) */}
            <Col md={8} style={{ textAlign: 'left', paddingRight: '20px' }}>
              <h1 style={{ color: 'black' }}>Stock Market Strategies</h1>
              <p style={{ color: 'black' }}>
                Empowering You with Personalized Stock Market Solutions
              </p>
              <p style={{ color: 'black' }}>
                Navigate the dynamic stock market with confidence! As a certified technical analyst from the NSE Academy, Vivek Singh provides expert guidance to help you make informed investment decisions and achieve financial success.
              </p>

              <Row>
                <Col>
                  <h3 style={{ color: 'black' }}>Our Stock Market Services Include:</h3>
                  <ul style={{ color: 'black', listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Personalized trading strategies tailored to your financial goals.</li>
                    <li>Expert analysis to identify profitable investment opportunities.</li>
                    <li>Tools and techniques to minimize risk and maximize returns.</li>
                    <li>Education on market trends, technical indicators, and effective trading practices.</li>
                  </ul>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h3 style={{ color: 'black' }}>Why Choose Us for Stock Market Guidance?</h3>
                  <p style={{ color: 'black' }}>
                    We go beyond technical analysis to provide actionable insights and strategic plans that suit your risk appetite and financial aspirations.
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
                    Take Control of Your Investments
                  </button>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h3 style={{ color: 'black' }}>Ready to Take the Next Step?</h3>
                  <p style={{ color: 'black' }}>
                    At Vivek Singh – The Real Consultant, we’re here to empower you with financial stability, holistic well-being, and investment success. Explore our services and let us help you achieve your goals.
                  </p>
                </Col>
              </Row>
            </Col>

            {/* Right side: Image (35% width) */}
            <Col md={4}>
              <img src={stock} alt="Stock Market" style={{ width: '100%', borderRadius: '10px' }} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Stocks;
