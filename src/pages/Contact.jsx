import React from "react";
import { Container } from "react-bootstrap";

import ContactForm from "../components/Contact/Contact";
import Social from "../components/Contact/Social";

const Contact = () => {
  return (
    <Container fluid className="project-section">
      <ContactForm />
      <Social />
    </Container>
  );
};

export default Contact;
