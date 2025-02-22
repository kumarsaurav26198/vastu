import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom"; // Import useLocation to read query parameters
import ContactForm from "../components/Contact/Contact";
import ContactFormpopup from "../pages/welcomepop/ContactFormpopup"; // Import the popup form
import Social from "../components/Contact/Social";

const Contact = () => {
  const location = useLocation(); // Get the current location object
  const searchParams = new URLSearchParams(location.search); // Parse query parameters
  const fromPopup = searchParams.get("fromPopup"); // Check if fromPopup=true

  return (
    <Container fluid className="project-section">
      {/* Render ContactFormpopup if fromPopup=true, otherwise render ContactForm */}
      {fromPopup ? <ContactFormpopup /> : <ContactForm />}

      {/* Social Media Links */}
      <Social />
    </Container>
  );
};

export default Contact;