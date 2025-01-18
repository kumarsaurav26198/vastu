import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    const serviceId = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
    const templateId = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
    const userId = "YOUR_USER_ID"; // Replace with your EmailJS user ID

    // Add your EmailJS logic here
  };

  return (
    <Container
      fluid // Make the container fluid for full-width responsiveness
      style={{
        padding: "80px 20px",
        backgroundColor: "#f8f9fa", // Light gray background
        minHeight: "100vh", // Ensure the container takes at least 100% of the viewport height
        display: "flex",
        alignItems: "center", // Vertically center the content
      }}
    >
      <Row className="justify-content-center w-100">
        {/* Left Column */}
        <Col
          md={5}
          style={{
            textAlign: "left",
            padding: "40px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
            marginRight: "20px", // Add spacing between columns
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
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow
          }}
        >
          <form
            onSubmit={sendEmail}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px", // Space between form elements
            }}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px",
                backgroundColor: "white",
                color: "#343a40",
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#007bff"; // Highlight border on focus
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "#ddd"; // Reset border on blur
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
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px",
                backgroundColor: "white",
                color: "#343a40",
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#007bff"; // Highlight border on focus
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "#ddd"; // Reset border on blur
              }}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                fontSize: "16px",
                backgroundColor: "white",
                color: "#343a40",
                resize: "vertical", // Allow vertical resizing
                minHeight: "150px", // Minimum height for textarea
                outline: "none",
                transition: "border-color 0.3s ease",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#007bff"; // Highlight border on focus
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "#ddd"; // Reset border on blur
              }}
            />
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
                width: "100%", // Full-width button
                transition: "background-color 0.3s ease, transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0056b3"; // Darker blue on hover
                e.currentTarget.style.transform = "translateY(-2px)"; // Slight lift on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#007bff"; // Reset color on leave
                e.currentTarget.style.transform = "translateY(0)"; // Reset position on leave
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