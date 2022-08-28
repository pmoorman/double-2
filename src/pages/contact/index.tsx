import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";

import { SEO } from "@app/components";
import { submitNetlifyForm } from "@app/helpers";
import { useSiteMetadata } from "@app/hooks";

import * as styles from "./index.module.scss";

const ContactPage = () => {
  const { contact_email, contact_phone } = useSiteMetadata();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { response, form } = await submitNetlifyForm(e);

    if (response.ok) {
      setError("");
      setMessage("Thank you, we received your submission");
      form.reset();
      return;
    }

    setError("Something went wrong. Please try again later.");
    setMessage("");
  };

  return (
    <>
      <SEO title="Contact" />
      <Container>
        <div className={styles.heading}>
          <h1>
            Interested? <div>We’d love to </div>
            <div>hear from you.</div>
          </h1>
        </div>
      </Container>
      <div className="d-lg-flex">
        <div className={styles.blueSection}>
          <Container className="d-block d-lg-none">
            <div>
              <h1>Interested? </h1>
              <h1>We’d love to hear from you.</h1>
            </div>
          </Container>
          <div className={styles.lines}></div>
          <div></div>
        </div>
        <Form
          className={styles.greySection}
          id="#contact"
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <Container>
            <h2>Get in touch</h2>
            <Row>
              <Col lg="6" md="12" className="mt-5">
                <Form.Label htmlFor="first-name">First name</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter your first name"
                  aria-describedby="first-name"
                />
              </Col>
              <Col lg="6" md="12" className="mt-5">
                <Form.Label htmlFor="last-name">Last name</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter your last name"
                  aria-describedby="last-name"
                />
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="12" className="mt-5">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter your email"
                  aria-describedby="email"
                />
              </Col>
              <Col lg="6" md="12" className="mt-5">
                <Form.Label htmlFor="phone-number">Phone Number</Form.Label>
                <Form.Control
                  placeholder="Enter your phone number"
                  aria-describedby="phone-number"
                />
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="12" className="mt-5">
                <Form.Label htmlFor="Enter your message">Message</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter your message"
                  aria-describedby="Enter your message"
                />
              </Col>
            </Row>
            {!message && (
              <div className="mt-5">
                <Button variant="secondary" type="submit">
                  Submit
                </Button>
              </div>
            )}
            {(error || message) && (
              <Alert variant={error ? "danger" : "success"} className={`mt-3`}>
                {error || message}
              </Alert>
            )}

            <div className="mt-5">
              <h4 className="mb-3">Email us</h4>
              <div className="mb-3">{contact_email}</div>
              <h4 className="mb-3 mt-lg-0 mt-5">Call us</h4>
              <div className="mb-4">{contact_phone}</div>
            </div>
          </Container>
        </Form>
      </div>
    </>
  );
};

export default ContactPage;
