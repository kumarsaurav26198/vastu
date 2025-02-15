import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./VSTRC.png";
import homecal from "./asse/Homecalimage.jpg";
import finance from "./asse/finance.jpg";
import certifiedVastu from "./asse/certifiedVastu.jpg";
import growth from "./asse/growth.jpg";
import vision from "./asse/vision.jpg";
import mission from "./asse/mission.jpg";
import aboutus from "../assets/clients/aboutus.jpg";


function About() {
  return (
    <Container fluid className="project-section p-0" style={{ overflowX: "hidden" }}>
      <Container fluid className="custom-bg p-0">
        <Container fluid className="px-0 ">
          {/* About Us Section */}
          <Row className="mx-0 g-0" style={{ minHeight: "auto", marginTop: "70px" }}>

            
          <Col
  className="p-0 d-flex justify-content-center align-items-center" 
  style={{
    flex: "0 0 100%", 
    width: "100%", 
    minHeight: "30vh", 
    marginTop: "50px",
    marginBottom: "50px",
    overflow: "hidden",
  }}
>
  <div 
    className="mobile-width" 
    style={{ 
      width: "90%", // Slight margin on mobile 
      height: "100%", 
      textAlign: "center" 
    }}
  >
    <img 
      src={aboutus} 
      alt="About Us" 
      style={{
        width: "100%", // Ensures full width 
        height: "auto", // Adjusts height automatically for responsiveness
        maxHeight: "40vh", // Prevents it from becoming too large
        objectFit: "cover", 
        borderRadius: "15px", 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      }} 
    />
  </div>
</Col>

<style>
  {`
    @media (max-width: 768px) {
      .mobile-width img {
        width: 90%;  /* Reduce width for better fit */
        max-height: 30vh;  /* Prevents excessive height */
        border-radius: 10px;  /* Slightly smaller rounding */
      }
    }
  `}
</style>


            <Col
              xs={12}
              md={8}
              className="order-2 order-md-1 px-0 bg-white p-3 p-md-4 d-flex align-items-center justify-content-center"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div style={{ padding: "45px" }}>
                <h1 className="project-heading">
                  <strong className="yellow"> About Us</strong>
                </h1>
                <p className="text-black large-text">
                  Welcome to <strong>Vivek Singh – The Real Consultant</strong>,
                  where expertise meets passion and innovation drives exceptional
                  outcomes. Led by Vivek Singh, a seasoned professional with
                  over <strong>14 years of experience</strong> in mortgage
                  lending products, our mission is to provide you with tailored
                  financial solutions that meet your unique needs.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
              className="order-1 order-md-2 d-flex align-items-center justify-content-center bg-white p-3 p-md-4"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="ratio ratio-1x1 w-75">
                <img
                  src={homecal}
                  alt="About Us"
                  className="img-fluid rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>
          </Row>

          {/* Our Expertise Section */}
          <Row className="mx-0 g-0" style={{ minHeight: "auto" }}>
            <Col
              xs={12}
              md={4}
              className="order-1 order-md-1 d-flex align-items-center justify-content-center bg-white p-3 p-md-4"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="ratio ratio-1x1 w-75">
                <img
                  src={finance}
                  alt="Our Expertise"
                  className="img-fluid rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>
            <Col
              xs={12}
              md={8}
              className="order-2 order-md-2 px-0 bg-white p-3 p-md-4 d-flex align-items-center justify-content-center"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div style={{ padding: "15px" }}>
                <h2 className="project-subheading text-black text-center">
                  Our Expertise
                </h2>
                <p className="text-black large-text">
                  With specialization in <strong>home loans</strong>,{" "}
                  <strong>loans against property</strong>, and a range of other
                  loan products, Vivek Singh combines industry knowledge with a
                  client-first approach to ensure seamless and efficient
                  financial services. His academic achievements, including a{" "}
                  <strong>Bachelor’s degree in Commerce</strong>, a{" "}
                  <strong>
                    Post Graduate Diploma in Computer Applications (PGDCA)
                  </strong>
                  , and an <strong>MBA in Marketing and Finance</strong>, form
                  the foundation of his expertise.
                </p>
              </div>
            </Col>
          </Row>

          {/* Beyond Finance Section */}
          <Row className="mx-0 g-0" style={{ minHeight: "auto" }}>
            <Col
              xs={12}
              md={8}
              className="order-2 order-md-1 px-0 bg-white p-3 p-md-4 d-flex align-items-center justify-content-center"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div style={{ padding: "15px" }}>
                <h2 className="project-subheading text-black text-center">
                  Beyond Finance
                </h2>
                <p className="text-black large-text">
                  Vivek’s credentials extend beyond the financial realm. As a{" "}
                  <strong>certified Vastu consultant</strong>, trained by the
                  esteemed{" "}
                  <strong>All India Institute of Occult Sciences</strong>, he
                  integrates ancient wisdom into modern living. Additionally, as
                  a <strong>certified technical analyst</strong> from the{" "}
                  <strong>NSE Academy</strong>, Vivek empowers clients with
                  personalized stock market trading strategies, enabling them to
                  navigate and succeed in a dynamic market environment.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
              className="order-1 order-md-2 d-flex align-items-center justify-content-center bg-white p-3 p-md-4"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="ratio ratio-1x1 w-75">
                <img
                  src={certifiedVastu}
                  alt="Beyond Finance"
                  className="img-fluid rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>
          </Row>

          {/* Commitment to Growth Section */}
          <Row className="mx-0 g-0" style={{ minHeight: "auto" }}>
            <Col
              xs={12}
              md={4}
              className="order-1 order-md-1 d-flex align-items-center justify-content-center bg-white p-3 p-md-4"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="ratio ratio-1x1 w-75">
                <img
                  src={growth}
                  alt="Commitment to Growth"
                  className="img-fluid rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>
            <Col
              xs={12}
              md={8}
              className="order-2 order-md-2 px-0 bg-white p-3 p-md-4 d-flex align-items-center justify-content-center"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div style={{ padding: "15px" }}>
                <h2 className="project-subheading text-black text-center">
                  Commitment to Growth
                </h2>
                <p className="text-black large-text">
                  At <strong>Vivek Singh – The Real Consultant</strong>, we
                  believe in continuous learning and growth. Vivek’s ongoing
                  pursuit of knowledge in <strong>astrology</strong>,{" "}
                  <strong>numerology</strong>, <strong>Reiki healing</strong>,{" "}
                  <strong>tarot reading</strong>, and other esoteric disciplines
                  reflects our commitment to holistic solutions. Combined with
                  his dedication to advanced meditation and spiritual practices,
                  this unique blend of skills ensures a comprehensive approach
                  to addressing client needs.
                </p>
              </div>
            </Col>
          </Row>

          {/* Our Vision Section */}
          <Row className="mx-0 g-0" style={{ minHeight: "auto" }}>
            <Col
              xs={12}
              md={8}
              className="order-2 order-md-1 px-0 bg-white p-3 p-md-4 d-flex align-items-center justify-content-center"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div style={{ padding: "15px" }}>
                <h2 className="project-subheading text-black text-center">
                  Our Vision
                </h2>
                <p className="text-black large-text">
                  At <strong>Vivek Singh – The Real Consultant</strong>, our
                  vision is to be a globally recognized leader in providing
                  comprehensive financial solutions, personalized trading
                  strategies, and holistic living consultancy. We aim to empower
                  individuals and businesses to achieve financial stability,
                  spiritual harmony, and sustainable growth through innovative,
                  client-centric approaches and a commitment to lifelong
                  learning.
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              md={4}
              className="order-1 order-md-2 d-flex align-items-center justify-content-center bg-white p-3 p-md-4"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="ratio ratio-1x1 w-75">
                <img
                  src={vision}
                  alt="About Us"
                  className="img-fluid rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>
          </Row>

          {/* Our Mission Section */}
          <Row className="mx-0 g-0" style={{ minHeight: "auto" }}>
            <Col
              xs={12}
              md={4}
              className="order-1 order-md-1 d-flex align-items-center justify-content-center bg-white p-3 p-md-4"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="ratio ratio-1x1 w-75">
                <img
                  src={mission}
                  alt="Our Expertise"
                  className="img-fluid rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>
            <Col
              xs={12}
              md={8}
              className="order-2 order-md-2 px-0 bg-white p-3 p-md-4 d-flex align-items-center justify-content-center"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div style={{ padding: "15px" }}>
                <h2 className="project-subheading text-black text-center">
                  Our Mission
                </h2>
                <p className="text-black large-text">
                  Our mission is to deliver exceptional services in mortgage
                  lending, financial strategy, and holistic consulting by
                  combining expertise, integrity, and innovation. We strive to:
                </p>
                <ol className="text-black large-text">
                  <li>
                    <strong>Empower Financial Success:</strong> Provide tailored
                    solutions for home loans, loans against property, and other
                    financial products to help clients achieve their financial
                    goals.
                  </li>
                  <li>
                    <strong>Simplify Stock Market Navigation:</strong> Offer
                    personalized trading strategies backed by technical
                    expertise to ensure informed investment decisions.
                  </li>
                  <li>
                    <strong>Promote Holistic Well-Being:</strong> Integrate
                    ancient wisdom, such as Vastu consultancy and esoteric
                    practices, with modern methodologies to create balanced and
                    prosperous living and working environments.
                  </li>
                  <li>
                    <strong>Foster Lifelong Growth:</strong> Encourage
                    continuous learning and personal development through
                    spiritual practices and expanding knowledge in astrology,
                    numerology, Reiki, and more.
                  </li>
                  <li>
                    <strong>Build Lasting Relationships:</strong> Uphold a
                    client-first philosophy by delivering customized,
                    result-oriented solutions that align with individual needs
                    and aspirations.
                  </li>
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default About;