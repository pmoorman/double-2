import { SEO } from "@app/components";
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ContactPage = () => {
  return (
    <>
      <SEO title="Contact" />
      <Container>
        <Row>
          <Col>
            <h1>ContactPage</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactPage;
