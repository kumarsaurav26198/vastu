import React from "react";
import logo from "../pages/VSTRC.png"; 

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
    // backgroundColor: "rgba(255, 255, 255, 0.98)", // Increased opacity (less transparent)
    backgroundColor: "#f7ede2", // Increased opacity (less transparent)
    zIndex: 1000,
  };

  const squareStyles = {
    position: "relative",
    width: "100px",
    height: "100px",
    animation: "rotate 2s linear infinite", // Rotate the square
  };

  const squareInnerStyles = {
    position: "absolute",
    width: "100%",
    height: "100%",
    border: "4px solid #3498db", // Blue border for the square
    borderRadius: "10px", // Rounded corners
    boxSizing: "border-box",
  };

  const imageStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "120px", // Increased size of the image
    height: "120px",
    borderRadius: "50%", // Circular image
  };

  return (
    <div
      id={props.load ? "preloader" : "preloader-none"}
      style={preloaderStyles}
    >
      <div style={squareStyles}>
        <div style={squareInnerStyles}></div>
      </div>
      <img src={logo} alt="Loading..." style={imageStyles} />{" "}
      {/* Static logo */}
      <style>
        {`
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default PreLoader;
