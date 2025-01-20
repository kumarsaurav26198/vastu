import React, { useState, useEffect } from "react";
import vastuM from "../pages/asse/VastuM.webp";
import stockM from "../pages/asse/stocksM.jpg";
import homeM from "../pages/asse/HomeloanM.jpg";
import { Container, Row, Col } from "react-bootstrap";
import "../../src/HomeBackground.css"; // Import the CSS file
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Welcome from "./Welcome";

const Home = () => {
  const [currentBg, setCurrentBg] = useState(0);

  // Array of background images
  const backgroundImages = [homeM, vastuM, stockM];

  // Change background every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 3500); // 3.5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <Container
      fluid
      style={{
        padding: "60px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image Slideshow */}
      <div
        className="background-slideshow"
        style={{
          backgroundImage: `url(${backgroundImages[currentBg]})`,
          opacity: 0.4, // Adjust opacity for visibility
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>

      {/* Content Section */}
      <Row
        className="no-gutters" // Remove default gutters (spacing) between columns
        style={{
          display: "flex",
          flexDirection: "row", // Ensure horizontal layout
          width: "100%", // Take full width
          overflowX: "auto", // Enable horizontal scrolling if needed
        }}
      >
         <Col
          style={{
            flex: "0 0 100%", // Each component takes 100% width
            minWidth: "100%", // Ensure it doesn't shrink
          }}
        >
          <Welcome />
        </Col>
        {/* Home1 */}
        <Col
          style={{
            flex: "0 0 100%", // Each component takes 100% width
            minWidth: "100%", // Ensure it doesn't shrink
          }}
        >
          <Home1 />
        </Col>

        {/* Home2 */}
        <Col
          style={{
            flex: "0 0 100%", // Each component takes 100% width
            minWidth: "100%", // Ensure it doesn't shrink
          }}
        >
          <Home2 />
        </Col>

        {/* Home3 */}
        <Col
          style={{
            flex: "0 0 100%", // Each component takes 100% width
            minWidth: "100%", // Ensure it doesn't shrink
          }}
        >
          <Home3 />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;