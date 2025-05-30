import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import vastupurush from "../pages/asse/vastupurush.jpg"; // Ensure the path is correct

function Service() {
  const navigate = useNavigate();

  // Service data
  const services = [
    {
      title: "Home Loan",
      description:
        "Get the best home loan deals with low interest rates and flexible repayment options. Our experts guide you through the entire process, from application to approval, ensuring a hassle-free experience.",
      icon: "🏠",
      path: "/homeloan", // Updated path to match the routing setup
      details: [
        "Competitive interest rates",
        "Flexible repayment options",
        "Quick approval process",
        "Expert guidance",
      ],
    },
    {
      title: "Vastu",
      description:
        "Consult our Vastu experts to bring positivity and harmony to your living space. We provide personalized Vastu solutions for homes, offices, and commercial spaces.",
      Image: vastupurush, // Use the imported image here
      path: "/vastu", // Updated path to match the routing setup
      details: [
        "Personalized Vastu consultations",
        "Home and office solutions",
        "Energy flow optimization",
        "Holistic living advice",
      ],
    },
    {
      title: "Stocks",
      description:
        "Invest in the stock market with expert advice and maximize your returns. Our certified technical analysts provide tailored strategies to help you make informed investment decisions.",
      icon: "📈",
      path: "/stocks", // Updated path to match the routing setup
      details: [
        "Personalized trading strategies",
        "Market analysis and insights",
        "Risk management",
        "Long-term investment planning",
      ],
    },
  ];

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Our <strong className="yellow">Services</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the services we offer to help you achieve your goals.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {services.map((service, index) => (
            <Col key={index} md={4} className="project-card">
              <div
                style={{
                  textAlign: "center",
                  padding: "20px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  height: "100%",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Added box shadow
                  transition: "transform 0.3s, box-shadow 0.3s", // Smooth hover effect
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                }}
              >
                <div
                  style={{
                    fontSize: "4rem", // Increased icon size
                    marginBottom: "20px",
                  }}
                >
                  {service.icon ? ( // Check if icon exists
                    <span>{service.icon}</span> // Render emoji if icon is present
                  ) : (
                    <img
                      src={service.Image} // Render image if icon is not present
                      alt={service.title}
                      style={{ width: "80px", height: "80px", borderRadius: "50%" }} // Adjust size and style as needed
                    />
                  )}
                </div>
                <h3 style={{ color: "black", marginBottom: "15px" }}>
                  {service.title}
                </h3>
                <p style={{ color: "black", marginBottom: "15px" }}>
                  {service.description}
                </p>
                <ul
                  style={{
                    color: "black",
                    textAlign: "left",
                    paddingLeft: "20px",
                    marginBottom: "30px",
                  }}
                >
                  {service.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
                <button
                  className="hov"
                  style={{
                    padding: "5px",
                    borderRadius: "5px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                  }}
                  onClick={() => navigate(service.path)} // Navigate to the route
                >
                  More Info
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Service;