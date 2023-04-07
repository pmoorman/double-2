import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

import {
  Link,
  CaseStudySection,
  VideoBackground,
  SEO,
  AppHead,
} from "@app/components";
import { useCaseStudies } from "@app/hooks";
import { getHomepageCaseStudies } from "@app/helpers";

import * as styles from "./index-assets/index.module.scss";
import ReactPlayer from "react-player";
import { StaticImage } from "gatsby-plugin-image";

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
              <h1 className="mb-5">Experts in exponential growth.</h1>
              <p>
                Double is a growth marketing agency. We help tech companies do
                better marketing, and drive explosive user growth.
              </p>
              <div className={styles.arrowLongDown}></div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <HomeVideo />
      </Container>

      <div id="caseStudies">
        <Container>
          <h2>Our work</h2>
        </Container>
        {caseStudies.map((item) => (
          <CaseStudySection
            isHomepage={true}
            type={item.section.type}
            item={item}
            key={item.slug}
          />
        ))}
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
          <StaticImage
            src="./index-assets/play.svg"
            alt="Play"
            width={65}
            height={67}
          />
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
