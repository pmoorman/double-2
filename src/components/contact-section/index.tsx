import React, { FC } from "react";
import { Link } from "gatsby";
import { Button, Col, Container, Row } from "react-bootstrap";

import * as styles from "./index.module.scss";

export type ContactSectionProps = {
  title?: string;
  body?: string;
};

export const ContactSection: FC<ContactSectionProps> = ({
  title = "We’re a growth marketing agency with double the drive",
  body = "Double is a close-knit team of experts from around the world, who are obsessed with building systems that drive growth on autopilot.",
}) => {
  return (
    <section className="bg-primary">
      <Container className="py-7">
        <Row className="justify-content-center text-center text-white">
          <Col md={8}>
            <h2 className="mb-4">{title}</h2>
          </Col>
          <Col md={6}>
            <p className="mb-4">{body}</p>
            <Button
              className={styles.button}
              as={Link}
              to="/contact"
              variant="secondary"
              type="submit"
            >
              Contact us
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
