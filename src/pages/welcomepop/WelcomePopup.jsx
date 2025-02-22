import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "bootstrap/dist/css/bootstrap.min.css";

const WelcomePopup = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Show the popup every time the component mounts (site loads or page refreshes)
  useEffect(() => {
    setShow(true);
  }, []);

  const handleClose = () => setShow(false);

  // Function to handle the "Contact Us" button click
  const handleContactUs = () => {
    handleClose(); // Close the popup
    navigate("/contact"); // Navigate to the /contact route
  };

  return (
    <>
      {/* Inject the keyframes into a style tag */}
      <style>
        {`
          @keyframes slideInFromRight {
            0% {
              transform: translateX(100%);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .slide-in-popup .modal-dialog {
            animation: slideInFromRight 0.5s ease-out;
            margin: auto; /* Center the modal */
            max-width: 500px; /* Adjust the width as needed */
            width: 100%;
          }

          @media (max-width: 768px) {
            .slide-in-popup .modal-dialog {
              max-width: 90%; /* Smaller width for mobile */
            }
          }
        `}
      </style>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        centered
        className="slide-in-popup" // Add the custom class for animation
      >
        <Modal.Header closeButton style={{ border: "none", paddingBottom: "0", textAlign: "center" }}>
          <Modal.Title style={{ color: "#2c3e50", fontSize: "30px", fontWeight: "bold", width: "100%" }}>
            🎉 Special Offer! 🎉
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "20px", textAlign: "center" }}>
          <p style={{ fontSize: "20px", color: "#34495e", marginBottom: "20px" }}>
            We are excited to offer <strong>FREE Vastu Consultation</strong> to the first{" "}
            <strong>101 clients</strong> who take a home loan through us!
          </p>
          <p style={{ fontSize: "16px", color: "#7f8c8d" }}>
            Hurry up and avail this exclusive offer before it runs out!
          </p>
        </Modal.Body>
        <Modal.Footer style={{ border: "none", paddingTop: "0", justifyContent: "center" }}>
          <Button
            variant="primary"
            onClick={handleContactUs} // Use the handleContactUs function
            style={{
              backgroundColor: "#3498db",
              border: "none",
              padding: "10px 30px",
              fontSize: "18px",
              borderRadius: "5px",
            }}
          >
            Contact Us
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WelcomePopup;