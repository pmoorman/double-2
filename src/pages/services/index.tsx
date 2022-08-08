import * as React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "@app/components";

import * as styles from "./index.module.scss";
const ServicesPage = () => {
  return (
    <div>
      <Container>
        <Row className="pt-lg-7 pb-lg-8 py-4">
          <Col lg="8" md="8">
            <h1 className="mb-lg-5 mb-4">
              We’re a full-stack Growth Marketing agency{" "}
            </h1>
            <div className="subtitle mb-lg-5 mb-4">
              You’re in the right place whether you’re looking to hire a paid
              ads expert, a sales funnel architect, or a product marketer.
            </div>
            <Button as={Link} to="/contact" variant="secondary">
              Get in touch
            </Button>
          </Col>
          <Col lg="4" md="4" className="my-lg-0 my-4">
            <StaticImage src="./union.svg" alt="Union" />
          </Col>
        </Row>
      </Container>

      <div>
        <Container>
          <h2 className="mb-5">Find out more about our services</h2>
        </Container>
        <div className="hoverAnimation blue">
          <a href="#" className="text-decoration-none">
            <Container>
              <Row className={`py-lg-7 py-5 + ${styles.borderContainer}`}>
                <Col lg="4" md="5" className="d-flex mb-lg=0 mb-4">
                  <div className={`title-icon + ${styles.iconStrategy}`}></div>
                  <h3 className="mb-0">Strategy</h3>
                </Col>
                <Col lg="8" md="7">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim.
                  </p>
                  <Button
                    as={Link}
                    to="/#"
                    variant="outline-secondary"
                    className="d-lg-none d-md-none d-block mt-3"
                  >
                    More about strategy
                  </Button>
                </Col>
              </Row>
            </Container>
          </a>
        </div>
        <div className="hoverAnimation blue">
          <a href="#" className="text-decoration-none">
            <Container>
              <Row className={`py-lg-7 py-5 + ${styles.borderContainer}`}>
                <Col lg="4" md="5" className="d-flex mb-lg=0 mb-4">
                  <div
                    className={`title-icon + ${styles.iconInfrastructure}`}
                  ></div>
                  <h3 className="mb-0">Infrastructure</h3>
                </Col>
                <Col lg="8" md="7">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim.
                  </p>
                  <Button
                    as={Link}
                    to="/#"
                    variant="outline-secondary"
                    className="d-lg-none d-md-none d-block mt-3"
                  >
                    More about Infrastructure
                  </Button>
                </Col>
              </Row>
            </Container>
          </a>
        </div>
        <div className="hoverAnimation blue">
          <a href="#" className="text-decoration-none">
            <Container>
              <Row className={`py-lg-7 py-5 + ${styles.borderContainer}`}>
                <Col lg="4" md="5" className="d-flex mb-lg=0 mb-4">
                  <div className={`title-icon + ${styles.iconCreative}`}></div>
                  <h3 className="mb-0">Creative</h3>
                </Col>
                <Col lg="8" md="7">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim.
                  </p>
                  <Button
                    as={Link}
                    to="/#"
                    variant="outline-secondary"
                    className="d-lg-none d-md-none d-block mt-3"
                  >
                    More about creative
                  </Button>
                </Col>
              </Row>
            </Container>
          </a>
        </div>
        <div className="hoverAnimation blue">
          <a href="#" className="text-decoration-none">
            <Container>
              <Row className={`py-lg-7 py-5 + ${styles.borderContainer}`}>
                <Col lg="4" md="5" className="d-flex mb-lg=0 mb-4">
                  <div
                    className={`title-icon + ${styles.iconPerformance}`}
                  ></div>
                  <h3 className="mb-0">Performance</h3>
                </Col>
                <Col lg="8" md="7">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim.
                  </p>
                  <Button
                    as={Link}
                    to="/#"
                    variant="outline-secondary"
                    className="d-lg-none d-md-none d-block mt-3"
                  >
                    More about performance
                  </Button>
                </Col>
              </Row>
            </Container>
          </a>
        </div>
      </div>

      <Container>
        <Row className="my-lg-7 my-5">
          <Col xl="5" lg="6" md="6">
            <h2 className="mb-4">
              See our services in action with our client case studies
            </h2>
            <StaticImage
              src="./services.jpeg"
              alt="services"
              className="cutted_image_double d-lg-none d-block mb-3"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
            <Button as={Link} to="/case-study" variant="outline-secondary">
              See all case studies
            </Button>
          </Col>
          <Col lg="1" className="d-none d-xl-flex"></Col>
          <Col lg="6" md="6" className="d-none d-lg-flex">
            <StaticImage
              src="./services.jpeg"
              alt="services"
              className="cutted_image"
            />
          </Col>
        </Row>
      </Container>

      <div>
        <Container>
          <h2 className="d-flex justify-content-center mb-5">Our approach</h2>
        </Container>

        <div>
          <Container>
            <Row className="pt-lg-7 pb-lg-7 py-5">
              <Col lg="4" md="5" sm="12">
                <h3 className="mb-5">Hypothesize</h3>
                <StaticImage
                  src="./milestone1.jpeg"
                  alt="Milestone 1"
                  className="cutted_image d-none d-lg-block d-md-block"
                />
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="gray-bg">
          <Container>
            <Row className="pt-lg-7 pb-lg-7 py-5">
              <Col lg="4" md="5" sm="12">
                <h3 className="mb-5">Test</h3>
                <StaticImage
                  src="./milestone1.jpeg"
                  alt="Milestone 1"
                  className="cutted_image d-none d-lg-block d-md-block"
                />
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <Container>
            <Row className="pt-lg-7 pb-lg-7 py-5">
              <Col lg="4" md="5" sm="12">
                <h3 className="mb-5">Learn</h3>
                <StaticImage
                  src="./milestone1.jpeg"
                  alt="Milestone 1"
                  className="cutted_image d-none d-lg-block d-md-block"
                />
              </Col>
              <Col
                lg="2"
                md="1"
                sm="2"
                xs="2"
                className="d-flex justify-content-lg-end my-3 my-lg-0"
              >
                <div className="number">03</div>
              </Col>
              <Col lg="6" md="5" sm="10" xs="10">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
