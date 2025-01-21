import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/Particle";
import logo from "./VSTRC.png";
import homecal from "./asse/Homecalimage.jpg";
import finance from "./asse/finance.jpg";
import certifiedVastu from "./asse/certifiedVastu.jpg";
import growth from "./asse/growth.jpg";

function About() {
  return (
    <Container fluid className="project-section p-4">
      <Container fluid className="custom-bg p-0">
        <Particle />
        <Container fluid className="px-4">
          {/* About Us Section */}
          <Row className="mx-0 mb-5 g-0">
            {/* First Column - About Us Content */}
            <Col
              xs={12}
              md={8} // Increased width for text column
              className="px-4 text-center bg-white p-4 d-flex align-items-center justify-content-center"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div>
                <h1 className="project-heading">
                  <strong className="yellow"> About Us</strong>
                </h1>
                <p className="text-black large-text">
                  Welcome to <strong>Vivek Singh – The Real Consultant</strong>,
                  where expertise meets passion and innovation drives exceptional
                  outcomes. Led by Vivek Singh, a seasoned professional with over{" "}
                  <strong>14 years of experience</strong> in mortgage lending
                  products, our mission is to provide you with tailored financial
                  solutions that meet your unique needs.
                </p>
              </div>
            </Col>

            {/* Second Column - Image */}
            <Col
              xs={12}
              md={4} // Reduced width for image column
              className="d-flex align-items-center justify-content-center bg-white p-4"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="ratio ratio-1x1 w-75"> {/* Reduced width of the image container */}
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
          <Row className="mx-0 mb-5 g-0">
            {/* First Column - Image */}
            <Col
              xs={12}
              md={4} // Reduced width for image column
              className="d-flex align-items-center justify-content-center bg-white p-4"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="ratio ratio-1x1 w-75"> {/* Reduced width of the image container */}
                <img
                  src={finance}
                  alt="Our Expertise"
                  className="img-fluid rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>

            {/* Second Column - Our Expertise Content */}
            <Col
              xs={12}
              md={8} // Increased width for text column
              className="px-4 bg-white p-4 d-flex align-items-center justify-content-center"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div>
                <h2 className="project-subheading text-black text-center">
                  Our Expertise
                </h2>
                <p className="text-black large-text">
                  With specialization in <strong>home loans</strong>,{" "}
                  <strong>loans against property</strong>, and a range of other
                  loan products, Vivek Singh combines industry knowledge with a
                  client-first approach to ensure seamless and efficient financial
                  services. His academic achievements, including a{" "}
                  <strong>Bachelor’s degree in Commerce</strong>, a{" "}
                  <strong>
                    Post Graduate Diploma in Computer Applications (PGDCA)
                  </strong>
                  , and an <strong>MBA in Marketing and Finance</strong>, form the
                  foundation of his expertise.
                </p>
              </div>
            </Col>
          </Row>

          {/* Beyond Finance Section */}
          <Row className="mx-0 mb-5">
            {/* First Column - Beyond Finance Content */}
            <Col
              xs={12}
              md={8} // Increased width for text column
              className="px-4 bg-white rounded shadow-sm p-4 d-flex align-items-center justify-content-center"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div>
                <h2 className="project-subheading text-black text-center">
                  Beyond Finance
                </h2>
                <p className="text-black large-text">
                  Vivek’s credentials extend beyond the financial realm. As a{" "}
                  <strong>certified Vastu consultant</strong>, trained by the
                  esteemed <strong>All India Institute of Occult Sciences</strong>
                  , he integrates ancient wisdom into modern living. Additionally,
                  as a <strong>certified technical analyst</strong> from the{" "}
                  <strong>NSE Academy</strong>, Vivek empowers clients with
                  personalized stock market trading strategies, enabling them to
                  navigate and succeed in a dynamic market environment.
                </p>
              </div>
            </Col>

            {/* Second Column - Image */}
            <Col
              xs={12}
              md={4} // Reduced width for image column
              className="d-flex align-items-center justify-content-center bg-white p-4"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="ratio ratio-1x1 w-75"> {/* Reduced width of the image container */}
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
          <Row className="mx-0 mb-5">
            {/* First Column - Image */}
            <Col
              xs={12}
              md={4} // Reduced width for image column
              className="d-flex align-items-center justify-content-center bg-white p-4"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="ratio ratio-1x1 w-75"> {/* Reduced width of the image container */}
                <img
                  src={growth}
                  alt="Commitment to Growth"
                  className="img-fluid rounded"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Col>

            {/* Second Column - Commitment to Growth Content */}
            <Col
              xs={12}
              md={8} // Increased width for text column
              className="px-4 bg-white rounded shadow-sm p-4 d-flex align-items-center justify-content-center"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <div>
                <h2 className="project-subheading text-black text-center">
                  Commitment to Growth
                </h2>
                <p className="text-black large-text">
                  At <strong>Vivek Singh – The Real Consultant</strong>, we
                  believe in continuous learning and growth. Vivek’s ongoing
                  pursuit of knowledge in <strong>astrology</strong>,{" "}
                  <strong>numerology</strong>, <strong>Reiki healing</strong>,{" "}
                  <strong>tarot reading</strong>, and other esoteric disciplines
                  reflects our commitment to holistic solutions. Combined with his
                  dedication to advanced meditation and spiritual practices, this
                  unique blend of skills ensures a comprehensive approach to
                  addressing client needs.
                </p>
              </div>
            </Col>
          </Row>

          {/* Why Choose Us Section */}
          <Row className="mx-0 mb-5">
            <Col
              className="px-4 bg-white rounded shadow-sm p-4"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
              <h2 className="project-subheading text-black text-center">
                Why Choose Us?
              </h2>
              <ul className="text-black large-text">
                <li>
                  Over <strong>14 years of experience</strong> in financial
                  solutions
                </li>
                <li>
                  Expertise in <strong>mortgage lending products</strong> and{" "}
                  <strong>stock market analysis</strong>
                </li>
                <li>
                  Certified <strong>Vastu consultant</strong> for integrated
                  living solutions
                </li>
                <li>
                  Personalized services with a{" "}
                  <strong>client-centric approach</strong>
                </li>
                <li>
                  A <strong>holistic philosophy</strong> that blends traditional
                  wisdom with modern techniques
                </li>
              </ul>
              <p className="text-black large-text">
                At <strong>Vivek Singh – The Real Consultant</strong>, our goal
                is to empower you to achieve financial success and personal
                well-being. Whether you seek expert advice on loans, investment
                strategies, or holistic living, we’re here to guide you every
                step of the way.
              </p>
              <p className="text-black large-text">
                <strong>Let’s embark on this journey together!</strong>
              </p>
            </Col>
          </Row>

          {/* Our Vision Section */}
          <Row className="mx-0 mb-5">
            <Col
              className="px-4 bg-white rounded shadow-sm p-4"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
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
                client-centric approaches and a commitment to lifelong learning.
              </p>
            </Col>
          </Row>

          {/* Our Mission Section */}
          <Row className="mx-0 mb-5">
            <Col
              className="px-4 bg-white rounded shadow-sm p-4"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            >
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
                  personalized trading strategies backed by technical expertise
                  to ensure informed investment decisions.
                </li>
                <li>
                  <strong>Promote Holistic Well-Being:</strong> Integrate
                  ancient wisdom, such as Vastu consultancy and esoteric
                  practices, with modern methodologies to create balanced and
                  prosperous living and working environments.
                </li>
                <li>
                  <strong>Foster Lifelong Growth:</strong> Encourage continuous
                  learning and personal development through spiritual practices
                  and expanding knowledge in astrology, numerology, Reiki, and
                  more.
                </li>
                <li>
                  <strong>Build Lasting Relationships:</strong> Uphold a
                  client-first philosophy by delivering customized,
                  result-oriented solutions that align with individual needs and
                  aspirations.
                </li>
              </ol>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default About;