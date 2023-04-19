import React, { useState, useEffect } from "react";
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

  const [loading, setLoading] = useState(true);

  const caseStudies = getHomepageCaseStudies(_caseStudies).sort(
    (a, b) => (b.homepageweight || 0) - (a.homepageweight || 0)
  );

  return (
    <>
      <SEO
        title="Growth Marketing Agency - Double"
        keywords="Growth Marketing Agency, Double Agency, Experts in exponential growth"
        description="Looking for a growth marketing agency that will help you do better marketing, and drive explosive user growth? It's not a coincidence that you've found us."
      />

      <div>
        <div className={styles.hero}>
          <VideoBackground
            src="https://d6nxaq6ghh9kf.cloudfront.net/DOUBLE_compREEL_v2.mp4"
            onReady={() => setLoading(false)}
          />
        </div>
        <div className="pt-5 pb-lg-9 pb-5">
          <Container>
            <Row>
              <Col
                lg={{ span: 8, offset: 2 }}
                md={{ span: 8, offset: 2 }}
                className="text-center"
              >
                <div className={styles.arrowDown}></div>
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
                  <Col
                    lg={{ span: 11, offset: 1 }}
                    md={{ span: 11, offset: 1 }}
                  >
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
                      Building such systems — and crafting the content within it
                      — is what we specialise in.
                    </p>
                    <Button
                      as={Link}
                      to="/services"
                      variant="outline-secondary"
                    >
                      Our services
                    </Button>
                  </Col>
                </Row>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
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
