import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

import { AppHead, SEO } from "@app/components";
import { submitNetlifyForm } from "@app/helpers";
import { useSiteMetadata } from "@app/hooks";

import * as styles from "./index.module.scss";

const ContactPage = () => {
  const { contact_email, contact_phone, contactRecaptchaKey } =
    useSiteMetadata();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { response, form } = await submitNetlifyForm(e);

    if (response.status === 303) {
      setError("Recaptcha failed. Please try again.");
      setMessage("");
      return;
    }

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
    <div className="">
      <Container>
        <div className={styles.heading}>
          <h1>Get in touch</h1>
        </div>
      </Container>
      <div className="d-lg-flex">
        <div className={styles.blueSection}>
          <Container className="d-block d-lg-none">
            <div>
              <h1>Get in touch</h1>
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
          netlify-honeypot="bott-field"
          // data-netlify-recaptcha="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="bott-field" />

          <input type="hidden" name="form-name" value="contact" />
          <Container>
            <h2 className="mb-2">Interested? </h2>
            <h3>We’d love to hear from you.</h3>
            <Row>
              <Col lg="6" md="12" className="mt-5">
                <Form.Label htmlFor="first-name">First name</Form.Label>
                <Form.Control
                  required
                  placeholder="Your first name"
                  aria-describedby="first-name"
                  name="first_name"
                />
              </Col>
              <Col lg="6" md="12" className="mt-5">
                <Form.Label htmlFor="last-name">Last name</Form.Label>
                <Form.Control
                  required
                  placeholder="Your last name"
                  aria-describedby="last-name"
                  name="last_name"
                />
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="12" className="mt-5">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  required
                  placeholder="Your email address"
                  aria-describedby="email"
                  name="email"
                />
              </Col>
              <Col lg="6" md="12" className="mt-5">
                <Form.Label htmlFor="phone-number">Phone Number</Form.Label>
                <Form.Control
                  placeholder="Your phone number"
                  aria-describedby="phone-number"
                  name="phone_number"
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12" md="12" className="mt-5">
                <Form.Label htmlFor="Enter your message">Message</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter your message"
                  aria-describedby="Enter your message"
                  name="message"
                />
              </Col>
            </Row>

            {/* <Row>
              <Col lg="6" md="12" className="mt-5">
                <ReCAPTCHA
                  sitekey={contactRecaptchaKey}
                  onChange={() => setVerified(true)}
                />
              </Col>
            </Row> */}

            {!message && (
              <div className="mt-5">
                <Button
                  variant="secondary"
                  type="submit"
                  // disabled={!verified}
                >
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
    </div>
  );
};

export default ContactPage;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO
        title="Contact Double - The Growth Marketing Agency"
        keywords="Contact Double Agency, Contact Growth Marketing Agency"
        description="Looking for a growth marketing agency? Contact us today for a free consultation! Let us explore how we can help you grow your business with growth marketing."
      />
    </>
  );
};
