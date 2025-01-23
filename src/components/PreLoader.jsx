import React from "react";
import logo from "../pages/VSTRC.png"; // Ensure the path to your image is correct
import { RingLoader } from "react-spinners";

function PreLoader(props) {
  const preloaderStyles = {
    display: props.load ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#f7ede2", // Background color
    zIndex: 1000,
  };

  const containerStyles = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyles = {
    width: "120px", // Size of the logo
    height: "120px",
    borderRadius: "50%", // Circular logo
  };

  const ringLoaderStyles = {
    position: "absolute", // Position the RingLoader above the logo
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", // Center the RingLoader
  };

  return (
    <div id={props.load ? "preloader" : "preloader-none"} style={preloaderStyles}>
      <div style={containerStyles}>
        <img src={logo} alt="Loading..." style={imageStyles} /> {/* Static logo */}
        <div style={ringLoaderStyles}>
          {/* Increase the size of the RingLoader using the `size` prop */}
          <RingLoader color="#333333" speedMultiplier={0.8} size={140} />
        </div>
      </div>
    </div>
  );
}

export default PreLoader;