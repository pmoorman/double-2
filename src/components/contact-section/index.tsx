import React from "react";
import { Link } from "gatsby";
import { Button, Col, Container, Row } from "react-bootstrap";

export const ContactSection = () => {
  return (
    <section className="bg-primary">
      <Container className="py-7">
        <Row className="justify-content-center text-center text-white">
          <Col md={8}>
            <h2 className="mb-4">
              We’re a growth marketing agency with double the drive
            </h2>
          </Col>
          <Col md={6}>
            <p className="mb-4">
              Double is a close-knit team of experts from around the world, who
              are obsessed with building systems that drive growth on autopilot.
            </p>
            <Button as={Link} to="/contact" variant="secondary" type="submit">
              Contact us
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
