import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";

import { Link } from "@app/components";

export const QuizHeader = () => {
  return (
    <>
      {" "}
      <div className="mt-lg-8 mb-lg-9 my-5">
        <Container>
          <Row>
            <Col lg="8">
              <h1>What’s stopping you from growing faster?</h1>
              <Button
                as={Link}
                to="#audit"
                variant="secondary"
                className="mt-lg-6 mt-4"
              >
                Take the Double Audit
              </Button>
            </Col>
            <Col lg="4">
              <StaticImage
                src="./union.svg"
                alt="hero"
                className="my-5 my-lg-0"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={styles.logos}>
        <Container>
          <Row>
            <Col lg={{ span: 10, offset: 1 }} className="text-center">
              <h3>Companies we’ve helped explode</h3>
              <div className={styles.logosImage}>
                <StaticImage src="./klooker.svg" alt="klooker" />
                <StaticImage src="./glowforge.svg" alt="glowforge" />
                <StaticImage src="./sigrow.svg" alt="sigrow" />
                <StaticImage src="./babb.svg" alt="babb" />
                <StaticImage src="./sendcloud.svg" alt="sendcloud" />
                <StaticImage src="./insecto.svg" alt="insecto" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col lg={{ span: 10, offset: 1 }} className="text-center">
            <h2 className="my-6">
              Tell us how your startup’s doing - we’ll create a
              hyper-personalised roadmap that’ll show you exactly how to unlock
              growth
            </h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};
