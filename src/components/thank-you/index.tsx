import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link, SEO, GifSection } from "@app/components";

import * as styles from "./index.module.scss";

export const ThankYou = () => {
  return (
    <>
      <SEO title="Thank you" />
      <div className={styles.thankYouHero}>
        <Container>
          <GifSection />
          <h1 className="mb-4">Success! Your PDF is on its way!</h1>
          <h3>Please check your email for the guide.</h3>
        </Container>
      </div>

      <div>
        <Container>
          <Row className="mt-lg-8 mb-lg-9 my-5">
            <Col lg="8">
              <h2 className="mb-lg-6 mb-4">
                Interested in solutions tailored to your business?
              </h2>
              <p>
                We are a full-stack Growth Marketing Agency who help awesome
                companies scale. We are marketing nerds, who plan, strategize,
                build and execute systems that sell.
              </p>
              <p>
                Reach out to us if you prefer letting a bunch of experts do the
                heavy lifting.
              </p>
              <div className="mt-5">
                <Button
                  as={Link}
                  to="/contact"
                  variant="secondary"
                  className={styles.spacing}
                >
                  Get in touch
                </Button>
                <Button
                  as={Link}
                  to="/services"
                  variant="secondary"
                  className="mb-5"
                >
                  Our services
                </Button>
              </div>
            </Col>
            <Col lg="4" className="text-center">
              <StaticImage
                src="./Union.svg"
                alt="UNion"
                className={`mt-lg-0 mt-5 + ${styles.imageStyles}`}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
