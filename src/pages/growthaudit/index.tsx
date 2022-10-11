import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link, SEO, ImageRow, Image, QuizHeader } from "@app/components";

import * as styles from "./index.module.scss";

const GrowthAudit = () => {
  return (
    <>
      <SEO title="Growth audit" />

      <QuizHeader></QuizHeader>

      <div id="audit"></div>

      <div className={styles.result}>
        <Container>
          <ImageRow
            imageOrder="last"
            image={
              <Image double className="mb-lg-0 mb-3">
                <StaticImage
                  src="./result.png"
                  alt="Double Team photo"
                  className={styles.mobileImage}
                />
              </Image>
            }
          >
            <h2 className="mb-lg-3 mb-4">‘How accurate will my results be?’</h2>
            <p>Scary accurate.</p>
            <p>
              We’ll dive deep into your answers, scour your online presence and
              competitors and create an actionable growth roadmap that will
              precisely identify your bottlnecks and how to smash them.
            </p>
          </ImageRow>
        </Container>
      </div>

      <div className="py-lg-8 py-5">
        <Container>
          <h2 className="mb-lg-6 mb-4">
            You’ll be scored against 4 main areas
          </h2>
        </Container>
        <div>
          <Container>
            <Row className={`py-lg-7 py-5 + ${styles.borderContainer}`}>
              <Col
                lg="4"
                md="5"
                className="d-flex align-items-center mb-lg-0 mb-4"
              >
                <div className={`title-icon + ${styles.iconStrategy}`}></div>
                <h3 className="mb-0">Strategy</h3>
              </Col>
              <Col lg="8" md="7">
                <p>
                  Growth rests on systems thinking. Marketing isn’t just about
                  acquisition, but every part of the funnel has a role in
                  growth. From building engaged audiences to designing growth
                  loops, we build funnels with exponential growth in mind.
                </p>
              </Col>
            </Row>
            <Row className={`py-lg-7 py-5 + ${styles.borderContainer}`}>
              <Col
                lg="4"
                md="5"
                className="d-flex align-items-center mb-lg-0 mb-4"
              >
                <div
                  className={`title-icon + ${styles.iconInfrastructure}`}
                ></div>
                <h3 className="mb-0">Infrastructure</h3>
              </Col>
              <Col lg="8" md="7">
                <p>
                  The behind-the-scenes. The underlying technology that ensures
                  everything works smoothly (from data collection to
                  automations).
                </p>
              </Col>
            </Row>
            <Row className={`py-lg-7 py-5 + ${styles.borderContainer}`}>
              <Col
                lg="4"
                md="5"
                className="d-flex align-items-center mb-lg-0 mb-4"
              >
                <div className={`title-icon + ${styles.iconCreative}`}></div>
                <h3 className="mb-0">Creative</h3>
              </Col>
              <Col lg="8" md="7">
                <p>
                  Get the most out of marketing channels by creating quality
                  content. Clear deliverables (website design, blogpost,
                  emails).
                </p>
              </Col>
            </Row>
            <Row className={`py-lg-7 py-5 + ${styles.borderContainer}`}>
              <Col
                lg="4"
                md="5"
                className="d-flex align-items-center mb-lg-0 mb-4"
              >
                <div className={`title-icon + ${styles.iconPerformance}`}></div>
                <h3 className="mb-0">Performance</h3>
              </Col>
              <Col lg="8" md="7">
                <p>
                  Find the winning channel that suits business goals. Measure
                  what works and optimise for traffic, lead generation, and
                  conversions.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className={styles.footer}>
        <Container>
          <Col
            xl={{ span: 8, offset: 2 }}
            lg={{ span: 10, offset: 1 }}
            md="12"
            className="text-center"
          >
            <h2 className="mb-lg-5 mb-4">
              Discover what’s blocking growth, get unstuck and start winning.
            </h2>
            <h4>P.S. It only takes 5 minutes</h4>
            <Button
              as={Link}
              to="#audit"
              variant="primary"
              className=" mt-5 mb-4 text-white"
            >
              Audit my growth
            </Button>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default GrowthAudit;
