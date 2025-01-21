import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import contact from "../../pages/asse/contactUs.jpg";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa"; // Icons for form fields

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    const userId = "YOUR_USER_ID";

    // Add your EmailJS logic here
  };

  return (
    <Container
      fluid
      style={{
        padding: "80px 20px",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${contact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay with transparency */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <Row
        className="justify-content-center w-100"
        style={{ position: "relative", zIndex: 2 }}
      >
        {/* Left Column */}
        <Col
          md={5}
          className="mb-4 mb-md-0" // Add margin-bottom on small screens
          style={{
            textAlign: "left",
            padding: "40px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            marginRight: "20px",
          }}
        >
          <h1 style={{ fontSize: "2.5rem", color: "#343a40", marginBottom: "20px" }}>
            Get in Touch
          </h1>
          <h1 style={{ fontSize: "2.5rem", color: "#ffc107", marginBottom: "20px" }}>
            Contact Me
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#6c757d", marginBottom: "40px" }}>
            Have a question or want to work together? Feel free to reach out!
          </p>
        </Col>

        {/* Right Column - Form */}
        <Col
          md={5}
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <form
            onSubmit={sendEmail}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* Name Field */}
            <div style={{ position: "relative" }}>
              <FaUser
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#6c757d",
                }}
              />
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 12px 12px 40px", // Add padding for the icon
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                  backgroundColor: "white",
                  color: "#343a40",
                  outline: "none",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#007bff";
                  e.currentTarget.style.boxShadow = "0 0 8px rgba(0, 123, 255, 0.5)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#ddd";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Email Field */}
            <div style={{ position: "relative" }}>
              <FaEnvelope
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#6c757d",
                }}
              />
              <input
                type="email"
                name="reply_to"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 12px 12px 40px", // Add padding for the icon
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                  backgroundColor: "white",
                  color: "#343a40",
                  outline: "none",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#007bff";
                  e.currentTarget.style.boxShadow = "0 0 8px rgba(0, 123, 255, 0.5)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#ddd";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Message Field */}
            <div style={{ position: "relative" }}>
              <FaComment
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "20px",
                  color: "#6c757d",
                }}
              />
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 12px 12px 40px", // Add padding for the icon
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  fontSize: "16px",
                  backgroundColor: "white",
                  color: "#343a40",
                  resize: "vertical",
                  minHeight: "150px",
                  outline: "none",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#007bff";
                  e.currentTarget.style.boxShadow = "0 0 8px rgba(0, 123, 255, 0.5)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#ddd";
                  e.currentTarget.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
                width: "100%",
                transition: "background-color 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0056b3";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#007bff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Send
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;