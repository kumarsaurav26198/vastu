import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import vastu from "../assets/clients/vastu.jpg";
import homeloan from "../assets/clients/homeloan.jpg";
import stocks from "../assets/clients/stocks.jpg";

const images = [vastu, homeloan, stocks];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Stop interval if mobile

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // 3s pause + 0.5s transition

    return () => clearInterval(interval);
  }, [isMobile]);

  if (isMobile) return null; // Hide banner on mobile

  return (
    <Container fluid className="p-0  mb-2 d-flex justify-content-center align-items-center" >
      <div style={styles.bannerContainer}>
        {images.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{
              ...styles.slide,
              backgroundImage: `url(${image})`,
              opacity: index === currentIndex ? 1 : 0,
            }}
          />
        ))}
      </div>

      <style>
        {`
          .slide {
            position: absolute;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            transition: opacity 0.5s ease-in-out;
          }
        `}
      </style>
    </Container>
  );
};

const styles = {
  bannerContainer: {
    position: "relative",
    width: "100%",
    height: "600px",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  slide: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "opacity 0.5s ease-in-out",
  },
};

export default Banner;
