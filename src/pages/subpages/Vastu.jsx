import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import vastu from "../asse/VastuLink.webp";

import { useNavigate } from "react-router-dom";



  

const Vastu = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid style={{ backgroundColor: 'white', padding: '50px 0' }}>
        <Container>
          <Row className="align-items-center">
            {/* Left side: Content (65% width) */}
            <Col md={8} style={{ textAlign: 'left', paddingRight: '20px' }}>
              <h1 style={{ color: 'black' }}>Vastu Consultancy</h1>
              <p style={{ color: 'black' }}>
                Harmonize Your Living and Working Spaces with Vastu Expertise
              </p>
              <p style={{ color: 'black' }}>
                Transform your home or workplace into a space of positivity, harmony, and success with our Vastu consultancy services. Certified by the All India Institute of Occult Sciences, Vivek Singh combines ancient Vastu wisdom with modern needs to create balanced environments.
              </p>

              <Row>
                <Col>
                  <h3 style={{ color: 'black' }}>Our Vastu Services Include:</h3>
                  <ul style={{ color: 'black', listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Comprehensive analysis of your home or office layout.</li>
                    <li>Customized Vastu solutions for improved energy flow and well-being.</li>
                    <li>Remedies for financial prosperity, health, and personal growth.</li>
                    <li>Practical suggestions that align with modern architecture.</li>
                  </ul>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h3 style={{ color: 'black' }}>Why Vastu Matters?</h3>
                  <p style={{ color: 'black' }}>
                    The principles of Vastu Shastra align natural forces to foster happiness, health, and financial stability. Our solutions are designed to make your space work for you.
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
                    Book a Consultation
                  </button >
                </Col>
              </Row>
            </Col>

            {/* Right side: Image (35% width) */}
            <Col md={4}>
              <img src={vastu} alt="Vastu" style={{ width: '100%', borderRadius: '10px' }} />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Vastu;
