import * as React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";

import {
  ApplicationProcess,
  SectionFeaturedArticles,
  TestimonialSlider,
  SectionOpenRoles,
  Link,
  SEO,
  VideoSection,
  AppHead,
} from "@app/components";

import * as styles from "./index.module.scss";

const CareersPage = () => {
  return (
    <>
      <div className={styles.heroBg}>
        <Container>
          <Row className={styles.heroContent}>
            <Col lg="5">
              <h1 className="mb-5">Become the next Double Agent</h1>
              <Button
                as={Link}
                to="#roles"
                variant="light"
                className="mb-lg-0 mb-4"
              >
                Open roles
              </Button>
            </Col>
            <Col lg="7">
              <h3>We’re on a fast-track mission</h3>
              <Row>
                <Col md="10" sm="10" xs="10">
                  <h3 className="mb-2">to help awesome companies scale.</h3>
                  <h3 className="mb-2"> Want to join in on the action?</h3>
                </Col>
                <Col md="2" sm="2" xs="2">
                  <div className={styles.triangleIcon}></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <div className={`mt-lg-7 mb-lg-8 my-5 + ${styles.sectionLines}`}>
          <Row className={styles.content}>
            <Col lg="2"></Col>
            <Col lg="8" md="11" sm="11" xs="11">
              <h2 className="text-right mb-4">Who we are and what we do </h2>
              <p>
                Double is made up of specialists and marketing generalists who
                join forces to deliver the best results for our clients.
              </p>
              <p>
                We learn together, laugh together, and work really, really hard.
              </p>
              <p>
                Our team is growing all the time and we’re always hungry to
                bring someone new and exciting to the table. *Note: we don’t
                want to eat you, just work with you.
              </p>
              <Button
                as={Link}
                to=""
                variant="outline-secondary"
                className="mt-3"
              >
                More about us
              </Button>
            </Col>
          </Row>
          <div className={styles.arrowLine}>
            <div></div>
          </div>
        </div>

        <Row>
          <Col className="mb-5 mt-lg-0 mt-4" md="3" sm="6" xs="6" lg="3">
            <Parallax speed={5}>
              <StaticImage src="./member-1.jpeg" alt="Member 1" />
            </Parallax>
          </Col>
          <Col className="mb-5 mt-lg-0 mt-4" md="3" sm="6" xs="6" lg="3">
            <Parallax speed={10}>
              <StaticImage
                src="./member-2.jpeg"
                alt="Member 2"
                className="mt-4"
              />
            </Parallax>
          </Col>
          <Col className="mb-5" md="3" sm="6" xs="6" lg="3">
            <Parallax speed={15}>
              <StaticImage src="./member-3.jpeg" alt="Member 3" />
            </Parallax>
          </Col>
          <Col className="mb-5" md="3" sm="6" xs="6" lg="3">
            <Parallax speed={20}>
              <StaticImage
                src="./member-4.jpeg"
                alt="Member 4"
                className="mt-4"
              />
            </Parallax>
          </Col>
        </Row>
      </Container>

      <Container>
        <SectionOpenRoles />
      </Container>
      <VideoSection />
      <Container>
        <TestimonialSlider />
      </Container>

      <ApplicationProcess></ApplicationProcess>
      <Container>
        <h2 className="text-center mt-lg-7 mb-lg-8 my-5">How we work</h2>
      </Container>
      <Container>
        <Row className="pt-lg-7 pb-lg-7 py-5">
          <Col lg="4" md="5" sm="12">
            <h3 className="mb-5 mt-3">Title of the step</h3>
          </Col>
          <Col
            lg="2"
            md="1"
            sm="2"
            xs="2"
            className="d-flex justify-content-lg-end my-3 my-lg-0"
          >
            <div className="number">01</div>
          </Col>
          <Col lg="6" md="5" sm="10" xs="10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="gray-bg">
        <Container>
          <Row className="pt-lg-7 pb-lg-7 py-5">
            <Col lg="4" md="5" sm="12">
              <h3 className="mb-5 mt-3">Title of the step</h3>
            </Col>
            <Col
              lg="2"
              md="1"
              sm="2"
              xs="2"
              className="d-flex justify-content-lg-end my-3 my-lg-0"
            >
              <div className="number">02</div>
            </Col>
            <Col lg="6" md="5" sm="10" xs="10">
              <p>
                Loremm ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="pt-lg-7 pb-lg-7 py-5">
          <Col lg="4" md="5" sm="12">
            <h3 className="mb-5 mt-3">Title of the step</h3>
          </Col>
          <Col
            lg="2"
            md="1"
            sm="2"
            xs="2"
            className="d-flex justify-content-lg-end my-3 my-lg-0"
          >
            <div className="number">01</div>
          </Col>
          <Col lg="6" md="5" sm="10" xs="10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <SectionFeaturedArticles posts={[]}></SectionFeaturedArticles>
      </Container>
    </>
  );
};

export default CareersPage;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO title="Careers" />
    </>
  );
};
