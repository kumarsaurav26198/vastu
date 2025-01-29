import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import contact from "../../pages/asse/contactUs.jpg";
import { FaUser, FaEnvelope, FaComment, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [homeloan, setHomeloan] = useState(false);
  const [vastu, setVastu] = useState(false);
  const [stocks, setStocks] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [mathAnswer, setMathAnswer] = useState("");
  const [mathError, setMathError] = useState("");
  const [randomNumbers, setRandomNumbers] = useState({ num1: 0, num2: 0 });
  const [checkboxError, setCheckboxError] = useState(""); // State for checkbox validation error
  const navigate = useNavigate();

  // Generate random numbers between 2 and 10
  useEffect(() => {
    const num1 = Math.floor(Math.random() * 9) + 2;
    const num2 = Math.floor(Math.random() * 9) + 2;
    setRandomNumbers({ num1, num2 });
  }, []);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    if (name === "homeloan") setHomeloan(checked);
    else if (name === "vastu") setVastu(checked);
    else if (name === "stocks") setStocks(checked);
    setCheckboxError(""); // Clear error when user selects a checkbox
  };

  const handleHumanCheckboxChange = (e) => {
    setIsHuman(e.target.checked);
  };

  const handleMathAnswerChange = (e) => {
    setMathAnswer(e.target.value);
    setMathError("");
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhone(value);
      if (value.length === 10) {
        setPhoneError("");
      } else {
        setPhoneError("Phone number must be exactly 10 digits.");
      }
    }
  };

  const SubmitEvent = async (e) => {
    e.preventDefault();

    // Check if at least one checkbox is selected
    if (!homeloan && !vastu && !stocks) {
      setCheckboxError("Please select at least one service.");
      return; // Stop form submission if no service is selected
    } else {
      setCheckboxError(""); // Clear error if at least one checkbox is selected
    }

    // Phone number validation
    if (phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits.");
      return;
    }

    // Human verification check
    const correctAnswer = randomNumbers.num1 + randomNumbers.num2;
    if (!isHuman || mathAnswer !== correctAnswer.toString()) {
      setMathError(
        "Please verify that you are a human and provide the correct answer."
      );
      return;
    }

    // Show the submission confirmation UI immediately
    setIsSubmitted(true);

    // Prepare the payload to send to Google Sheets
    const payload = {
      name: name,
      email: email,
      phone: phone,
      message: message,
      homeloan: homeloan ? "homeloan" : " ",
      vastu: vastu ? "vastu" : " ",
      stocks: stocks ? "stocks" : " ",
    };

    // Reset form fields after submission
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setHomeloan(false);
    setVastu(false);
    setStocks(false);
    setIsHuman(false);
    setMathAnswer("");

    // Send the data to Google Sheets in the background
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyqp9eNXKG2LuP2IuJ65QkRjiz7HxnLEtBvc7wwqYDVbJXZTc5CYW-PgbI3X-mLPLcWjA/exec",
        {
          method: "POST",
          body: new URLSearchParams(payload),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          mode: "no-cors",
        }
      );

      // Handle the response (optional)
      const result = await response.text();
      console.log("Form submitted successfully:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const goToHomePage = () => {
    navigate("/");
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
          className="mb-4 mb-md-0 mx-5 "
          style={{
            textAlign: "left",
            padding: "40px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            marginRight: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              color: "#343a40",
              marginBottom: "20px",
              marginTop: "120px",
            }}
          >
            Get in Touch
          </h1>
          <h1
            style={{
              fontSize: "2.5rem",
              color: "#ffc107",
              marginBottom: "20px",
            }}
          >
            Contact Me
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#6c757d",
              marginBottom: "40px",
            }}
          >
            Have a question or want to work together? Feel free to reach out!
          </p>
        </Col>

        {/* Right Column - Form or Submission Confirmation */}
        <Col
          md={5}
          style={{
            backgroundColor: "white",
            padding: "40px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {isSubmitted ? (
            // Submission Confirmation UI
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: "2rem",
                  color: "#343a40",
                  textAlign: "center",
                }}
              >
                Thank you!
              </h2>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#6c757d",
                  textAlign: "center",
                }}
              >
                Your request has been successfully submitted. We will contact
                you as soon as possible.
              </p>
              <Button
                onClick={goToHomePage}
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
              >
                Go to Home Page
              </Button>
            </div>
          ) : (
            // Form UI
            <form
              onSubmit={SubmitEvent}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
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
                  required
                  style={{
                    width: "100%",
                    padding: "12px 12px 12px 40px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "16px",
                    backgroundColor: "white",
                    color: "#343a40",
                    outline: "none",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
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
                  required
                  style={{
                    width: "100%",
                    padding: "12px 12px 12px 40px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "16px",
                    backgroundColor: "white",
                    color: "#343a40",
                    outline: "none",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                />
              </div>

              {/* Phone Number Field */}
              <div style={{ position: "relative" }}>
                <FaPhone
                  style={{
                    position: "absolute",
                    left: "12px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#6c757d",
                  }}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit phone number"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength="10"
                  pattern="\d{10}"
                  required
                  style={{
                    width: "100%",
                    padding: "12px 12px 12px 40px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    fontSize: "16px",
                    backgroundColor: "white",
                    color: "#343a40",
                    outline: "none",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                />
                {phoneError && (
                  <p
                    style={{ color: "red", fontSize: "14px", marginTop: "5px" }}
                  >
                    {phoneError}
                  </p>
                )}
              </div>

              {/* Checkbox Field */}
              <div
                style={{ display: "flex", gap: "20px", alignItems: "center" }}
              >
                <label
                  style={{
                    fontSize: "16px",
                    color: "#343a40",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    name="homeloan"
                    checked={homeloan}
                    onChange={handleCheckboxChange}
                    style={{ marginRight: "10px" }}
                  />
                  Home Loan
                </label>
                <label
                  style={{
                    fontSize: "16px",
                    color: "#343a40",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    name="vastu"
                    checked={vastu}
                    onChange={handleCheckboxChange}
                    style={{ marginRight: "10px" }}
                  />
                  Vastu
                </label>
                <label
                  style={{
                    fontSize: "16px",
                    color: "#343a40",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    name="stocks"
                    checked={stocks}
                    onChange={handleCheckboxChange}
                    style={{ marginRight: "10px" }}
                  />
                  Stocks
                </label>
              </div>
              {checkboxError && (
                <p style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
                  {checkboxError}
                </p>
              )}

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
                    padding: "12px 12px 12px 40px",
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
                />
              </div>

              {/* Human Verification */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <label
                  style={{
                    fontSize: "16px",
                    color: "#343a40",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    name="isHuman"
                    checked={isHuman}
                    onChange={handleHumanCheckboxChange}
                    style={{ marginRight: "10px" }}
                  />
                  I am a human
                </label>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <span style={{ fontSize: "16px", color: "#343a40" }}>
                    {randomNumbers.num1} + {randomNumbers.num2} =
                  </span>
                  <input
                    type="text"
                    value={mathAnswer}
                    onChange={handleMathAnswerChange}
                    style={{
                      width: "60px",
                      padding: "8px",
                      border: "1px solid #ddd",
                      borderRadius: "5px",
                      fontSize: "16px",
                      outline: "none",
                    }}
                  />
                </div>
                {mathError && (
                  <p style={{ color: "red", fontSize: "14px" }}>{mathError}</p>
                )}
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
              >
                Send
              </Button>
            </form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;