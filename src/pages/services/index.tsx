import * as React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import { AppHead, Hero, Image, Link, SEO } from "@app/components";
import hero from "./union.svg";

import * as styles from "./index.module.scss";

const ServicesPage = () => {
  return (
    <>
      <div className="mb-5">
        <Hero
          type={1}
          title="We’re a full-stack Growth Marketing agency"
          body="You’re in the right place whether you’re looking to hire a paid
              ads expert, a sales funnel architect, or a product marketer."
          buttonText="Get in touch"
          buttonLink="/contact"
          image={<img src={hero} alt="Union" />}
        />

        <div>
          <Container>
            <h2 className="mb-5">
              Find out more about our growth marketing services
            </h2>
          </Container>
          <div className="hoverAnimation blue">
            <Link to="strategy" className="text-decoration-none">
              <Container>
                <Row className={`py-lg-7 py-5 + ${styles.borderContainer}`}>
                  <Col
                    lg="4"
                    md="5"
                    className="d-flex align-items-center mb-lg-0 mb-4"
                  >
                    <div
                      className={`title-icon + ${styles.iconStrategy}`}
                    ></div>
                    <h3 className="mb-0">Strategy</h3>
                  </Col>
                  <Col lg="8" md="7">
                    <p>
                      Growth rests on systems thinking. Marketing isn’t just
                      about acquisition, but every part of the funnel has a role
                      in growth. From building engaged audiences to designing
                      growth loops, we build funnels with exponential growth in
                      mind.
                    </p>
                    <Button
                      as={Link}
                      to="strategy"
                      variant="outline-secondary"
                      className="d-lg-none d-md-none d-block mt-3"
                    >
                      More about strategy
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Link>
          </div>
          <div className="hoverAnimation blue">
            <Link to="infrastructure" className="text-decoration-none">
              <Container>
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
                      The behind-the-scenes. The underlying technology that
                      ensures everything works smoothly (from data collection to
                      automations).
                    </p>
                    <Button
                      as={Link}
                      to="infrastructure"
                      variant="outline-secondary"
                      className="d-lg-none d-md-none d-block mt-3"
                    >
                      More about Infrastructure
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Link>
          </div>
          <div className="hoverAnimation blue">
            <Link to="creative" className="text-decoration-none">
              <Container>
                <Row className={`py-lg-7 py-5 + ${styles.borderContainer}`}>
                  <Col
                    lg="4"
                    md="5"
                    className="d-flex align-items-center mb-lg-0 mb-4"
                  >
                    <div
                      className={`title-icon + ${styles.iconCreative}`}
                    ></div>
                    <h3 className="mb-0">Creative</h3>
                  </Col>
                  <Col lg="8" md="7">
                    <p>
                      Get the most out of marketing channels by creating quality
                      content. Clear deliverables (website design, blogpost,
                      emails).
                    </p>
                    <Button
                      as={Link}
                      to="creative"
                      variant="outline-secondary"
                      className="d-lg-none d-md-none d-block mt-3"
                    >
                      More about creative
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Link>
          </div>
          <div className="hoverAnimation blue">
            <Link to="performance" className="text-decoration-none">
              <Container>
                <Row className={`py-lg-7 py-5 + ${styles.borderContainer}`}>
                  <Col
                    lg="4"
                    md="5"
                    className="d-flex align-items-center mb-lg-0 mb-4"
                  >
                    <div
                      className={`title-icon + ${styles.iconPerformance}`}
                    ></div>
                    <h3 className="mb-0">Performance</h3>
                  </Col>
                  <Col lg="8" md="7">
                    <p>
                      Find the winning channel that suits business goals.
                      Measure what works and optimise for traffic, lead
                      generation, and conversions.
                    </p>
                    <Button
                      as={Link}
                      to="performance"
                      variant="outline-secondary"
                      className="d-lg-none d-md-none d-block mt-3"
                    >
                      More about performance
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Link>
          </div>
        </div>

        {/* <Container>
          <Row className="my-lg-7 my-5">
            <Col xl="5" lg="6" md="6">
              <h2 className="mb-4">
                See our services in action with our client case studies
              </h2>
              <Image double className="d-lg-none d-block mb-3">
                <StaticImage src="./services.jpeg" alt="services" />
              </Image>
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
              <Image>
                <StaticImage src="./services.jpeg" alt="services" />
              </Image>
            </Col>
          </Row>
        </Container> */}

        {/* <div className="mt-lg-7 mt-5">
          <Container>
            <h2 className="d-flex justify-content-center my-5">Our approach</h2>
          </Container>

          <div>
            <Container>
              <Row className="pt-lg-7 pb-lg-7 py-5">
                <Col lg="4" md="5" sm="12">
                  <h3 className="mb-5">Hypothesize</h3>
                  <Image className="d-none d-lg-block d-md-block">
                    <StaticImage src="./milestone1.jpeg" alt="Milestone 1" />
                  </Image>
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim.
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
                  <Image className="d-none d-lg-block d-md-block">
                    <StaticImage src="./milestone1.jpeg" alt="Milestone 1" />
                  </Image>
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim.
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
                  <Image className="d-none d-lg-block d-md-block">
                    <StaticImage src="./milestone1.jpeg" alt="Milestone 1" />
                  </Image>
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ServicesPage;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO
        title="Full-Stack Growth Marketing Services | Get Expert Help Today"
        keywords="Get Expert Help, Growth Marketing Services, full-stack Growth Marketing agency"
        description="From strategy and infrastructure to creative and performance. We can help you with everything from building engaged audiences to designing growth loops."
      />
    </>
  );
};
