import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import { StaticImage } from "gatsby-plugin-image";

import {
  Link,
  CaseStudySection,
  SEO,
  AppHead,
  AppAccordion,
} from "@app/components";
import { useCaseStudies } from "@app/hooks";
import { getHomepageCaseStudies } from "@app/helpers";

import * as styles from "./index-assets/index.module.scss";
import { CaseStudyCarousel } from "@app/components/case-study-carousel";

const services = [
  {
    title: "Strategy",
    body: "From building engaged audiences to designing growth loops, we build strategy with exponential growth in mind.",
  },
  {
    title: "Performance",
    body: "We find the winning channel that suits your business goals. We measure what works and optimise for traffic, lead generation, and conversion.",
  },
  {
    title: "Infrastructure",
    body: "The underlying technology that ensures everything works smoothly, from data collection to automations. ",
  },
  {
    title: "Creative",
    body: "Get the most out of your marketing channels with clear and creative deliverables. We create websites, blogposts, emails, animations and much more.",
  },
];

const HomePage = () => {
  const _caseStudies = useCaseStudies();
  const caseStudies = getHomepageCaseStudies(_caseStudies).sort(
    (a, b) => (b.homepageweight || 0) - (a.homepageweight || 0)
  );

  return (
    <>
      <div className="pt-5 pb-lg-5 pb-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={{ span: 6 }} md={{ span: 6 }} className="text-center">
              <h1 className="mb-5 d-headline">
                Experts in exponential <span>growth</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <HomeVideo />
      </Container>

      <div id="services" className="my-4 my-md-6">
        <Container>
          <Row className="justify-content-between">
            <Col md={3} className="mb-3 mb-md-0">
              <h4>We offer a range of marketing services</h4>
            </Col>
            <Col md={5}>
              <AppAccordion items={services} />
            </Col>
          </Row>
        </Container>
      </div>

      <div id="caseStudies">
        <CaseStudyCarousel />
      </div>

      <div id="features" className="pt-lg-8">
        <Container>
          <div className={`d-flex flex-column flex-lg-row ` + styles.features}>
            <div>
              <div className="d-flex align-items-center px-lg-3 mb-4 mb-lg-0">
                <StaticImage
                  className="me-3 flex-shrink-0"
                  src="./index-assets/star.svg"
                  alt="star"
                  width={84}
                />
                <h3 className="mb-0">60k+ Academy subscribers </h3>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center px-lg-3 mb-4 mb-lg-0">
                <StaticImage
                  className="me-3 flex-shrink-0"
                  src="./index-assets/pyra.svg"
                  alt="pyra"
                  width={86}
                />
                <h3 className="mb-0">Experienced start-up founders</h3>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center px-lg-3 mb-4 mb-lg-0">
                <StaticImage
                  className="me-3 flex-shrink-0"
                  src="./index-assets/diamond.svg"
                  alt="diamond"
                  width={88}
                />
                <h3 className="mb-0">Worked with 50+ tech companies </h3>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container className="pt-lg-8 py-4 pb-lg-6">
        <Row>
          <div className={styles.mobileLines}>
            <Col
              lg={{ span: 10, offset: 1 }}
              md={12}
              className={styles.aboutUs}
            >
              <Row>
                <Col lg={{ span: 11, offset: 1 }} md={{ span: 11, offset: 1 }}>
                  <h2 className={styles.headingStyle}>
                    We help the world's most ambitious teams
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col lg={5} md={5}>
                  <h2 className={styles.subHeadingStyle}>
                    build the systems to tell their stories
                  </h2>
                </Col>
                <Col
                  lg={2}
                  md={2}
                  className="d-lg-flex d-md-flex d-none justify-content-center"
                >
                  <div className={`mt-4 + ${styles.polygonIcon}`}></div>
                </Col>
                <Col lg={5} md={5} className="mt-lg-5 pt-lg-3 mt-3 pt-0">
                  <p>
                    Sustained, compounding growth always comes from an
                    engineered, systematic approach to user acquisition,
                    activation and retention.
                  </p>
                  <p>
                    Building such systems — and crafting the content within it —
                    is what we specialise in.
                  </p>
                  <Button as={Link} to="/services" variant="outline-secondary">
                    Our services
                  </Button>
                </Col>
              </Row>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

const HomeVideo = () => {
  const [playing, setPlaying] = React.useState(true);

  const renderButtonIcon = () => {
    if (playing) {
      return (
        <StaticImage
          src="./index-assets/pause.svg"
          alt="Pause"
          width={65}
          height={65}
          placeholder="none"
        />
      );
    }

    return (
      <StaticImage
        src="./index-assets/play.svg"
        alt="Play"
        width={65}
        height={65}
        placeholder="none"
      />
    );
  };

  return (
    <div className={styles.videoContainer}>
      <ReactPlayer
        url="https://d6nxaq6ghh9kf.cloudfront.net/DOUBLE_compREEL_v2.mp4"
        width="100%"
        height="100%"
        playing={playing}
        muted
        loop
        playsinline
      />
      <div className={styles.playButton}>
        <div role="button" onClick={() => setPlaying((v) => !v)}>
          {renderButtonIcon()}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO
        title="Growth Marketing Agency - Double"
        keywords="Growth Marketing Agency, Double Agency, Experts in exponential growth"
        description="Looking for a growth marketing agency that will help you do better marketing, and drive explosive user growth? It's not a coincidence that you've found us."
      />
    </>
  );
};
