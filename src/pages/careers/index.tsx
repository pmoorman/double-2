import * as React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";

import {
  ApplicationProcess,
  SectionFeaturedArticles,
  QuoteSlider,
<<<<<<< HEAD
  SectionOpenRoles,
  Link,
  SEO,
=======
<<<<<<< HEAD
>>>>>>> c69a99989799b21eb613ea44c59d7cd51bb40f8c
=======
>>>>>>> c69a999 (Blog pages)
>>>>>>> d8dfa00 (Blog pages)
} from "@app/components";

import * as styles from "./index.module.scss";

const CareersPage = () => {
  return (
    <>
      <SEO title="Careers" />
      <div className={styles.heroBg}>
        <Container>
          <Row className={styles.heroContent}>
            <Col lg="5">
              <h1 className="mb-5">Join the action </h1>
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
                  <h3 className="mb-2"> Are you the new Double Agent?</h3>
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
                Innovative companies need novel methods and ideas. That’s where
                we enter the equation – a modern digital growth agency.
              </p>
              <p>
                We’re a bunch of marketing nerds, spread around the world, who
                spend their days on finding systems that sell. We write,
                strategize, quantify, plan, execute, learn, and rethink. We take
                what works and make it work even better.
              </p>
              <p>
                Our clients are start-ups and scale-ups that want to grow in a
                systematic way.
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
        <Row className="my-5">
          <Col lg="6" xl="4" md="8">
            <h2>Our open roles</h2>
            <p>
              We are always on the look out for talent to join us. Check out our
              open roles below.
            </p>
          </Col>
        </Row>
        <CareersGridList />
        <QuoteSlider></QuoteSlider>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
        <SectionFeaturedArticles></SectionFeaturedArticles>
      </Container>
    </>
  );
};

export default CareersPage;
