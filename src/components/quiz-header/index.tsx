import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import { Link } from "@app/components";

export const QuizHeader = () => {
  return (
    <>
      <div className="mt-lg-8 mb-lg-9 my-5">
        <Container>
          <Row>
            <Col lg="7">
              <h1>What’s stopping you from growing faster?</h1>
              <Button
                as={Link}
                to="#audit"
                variant="secondary"
                className="mt-lg-6 mt-4"
              >
                Get Free Report
              </Button>
            </Col>
            <Col lg="5">
              <StaticImage
                src="./hero.jpg"
                alt="hero"
                className="my-5 mx-5 mx-lg-0 my-lg-0"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
