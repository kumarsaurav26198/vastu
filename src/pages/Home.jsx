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
import Client from "./Client";
import Banner from "../pages/Banner";
const Home = () => {
  // const [currentBg, setCurrentBg] = useState(0);

  // // Array of background images
  // const backgroundImages = [homeM, vastuM, stockM];

  // // Change background every 3.5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
  //   }, 3500); // 3.5 seconds

  //   return () => clearInterval(interval); // Cleanup interval on unmount
  // }, []);

  return (
    <Container
      fluid
      className="p-lg-0 p-md-4 p-0 " // Responsive padding: large screens (5), medium screens (4), mobile (0)
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Image Slideshow */}
      {/* <div
        className="background-slideshow"
        style={{
          // backgroundImage: `url(${backgroundImages[currentBg]})`,
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
      ></div> */}

      {/* Content Section */}
      <Row
        className="no-gutters m-0 mt-5" // Remove default gutters and margin
        style={{
          display: "flex",
          flexDirection: "row", // Ensure horizontal layout
          width: "100%", // Take full width
          overflowX: "auto", // Enable horizontal scrolling if needed
        }}
      >


        {/* Welcome */}

        <Col
          className="p-0" // Remove padding for all screens
          style={{
            flex: "0 0 100%", // Each component takes 100% width
            minWidth: "100%", // Ensure it doesn't shrink
          }}
        >
          <div className="mobile-width"> {/* Wrapper for mobile width */}
            <Banner />
          </div>
        </Col>
        <Col
          className="p-0" // Remove padding for all screens
          style={{
            flex: "0 0 100%", // Each component takes 100% width
            minWidth: "100%", // Ensure it doesn't shrink
          }}
        >
          <div className="mobile-width"> {/* Wrapper for mobile width */}
            <Welcome />
          </div>
        </Col>

        {/* Home1 */}
        <Col
          className="p-0" // Remove padding for all screens
          style={{
            flex: "0 0 100%", // Each component takes 100% width
            minWidth: "100%", // Ensure it doesn't shrink
          }}
        >
          <div className="mobile-width"> {/* Wrapper for mobile width */}
            <Home1 />
          </div>
        </Col>

        {/* Home2 */}
        <Col
          className="p-0" // Remove padding for all screens
          style={{
            flex: "0 0 100%", // Each component takes 100% width
            minWidth: "100%", // Ensure it doesn't shrink
          }}
        >
          <div className="mobile-width"> {/* Wrapper for mobile width */}
            <Home2 />
          </div>
        </Col>

        {/* Home3 */}
        <Col
          className="p-0" // Remove padding for all screens
          style={{
            flex: "0 0 100%", // Each component takes 100% width
            minWidth: "100%", // Ensure it doesn't shrink
          }}
        >
          <div className="mobile-width"> {/* Wrapper for mobile width */}
            <Home3 />
          </div>
        </Col>

        {/* client */}
        <Col
          className="p-0" // Remove padding for all screens
          style={{
            flex: "0 0 100%", // Each component takes 100% width
            minWidth: "100%", // Ensure it doesn't shrink
          }}
        >
          <div className="mobile-width"> {/* Wrapper for mobile width */}
            <Client/>
          </div>
        </Col>
      </Row>

      {/* Inline CSS for Media Query */}
      <style>
        {`
          @media (max-width: 767.98px) {
            .mobile-width {
              width: 100% !important; /* Set width to 100% on mobile */
              margin: 0 !important; /* Remove margin on mobile */
              padding: 0 !important; /* Remove padding on mobile */
            }
          }
        `}
      </style>
    </Container>
  );
};

export default Home;