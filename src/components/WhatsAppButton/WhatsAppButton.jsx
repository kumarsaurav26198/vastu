

import React from 'react';
import './WhatsAppButton.css'; // Optional: For styling
import whatsapplogo from "../../assets/whatsapp.avif"; // Path to your WhatsApp logo/
const WhatsAppButton = () => {
  return (
    <div className="whatsapp-button">
      <a
        href="https://wa.me/8130498444"  // Replace with your WhatsApp link
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={whatsapplogo} // Use the imported logo
          alt="WhatsApp"
          className="whatsapp-logo"
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;