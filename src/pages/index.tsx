import React, { useState, useEffect } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

import { Link, CaseStudySection, VideoBackground, SEO } from "@app/components";
import { useCaseStudies } from "@app/hooks";
import { getHomepageCaseStudies } from "@app/helpers";
import { CustomPreloader } from "react-preloaders";
import CountUp from "react-countup";

import * as styles from "./index-assets/index.module.scss";
import WhiteLogo from "./index-assets/whiteLogo.svg";
import BlackLogo from "./index-assets/blackLogo.svg";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  const _caseStudies = useCaseStudies();
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

      <CustomPreloader
        animation="fade-down"
        background={"#2a2f45"}
        color={"#fff"}
        time={3600}
        className={styles.preLoader}
      >
        <CountUp end={99} className={styles.loading} duration={2} />

        <svg width="200" height="200" className={styles.loadingPie}>
          <circle r="50" cx="100" cy="100" className={styles.loadingCircle} />
        </svg>

        <div className={styles.preLogo}>
          <div>
            <img src={WhiteLogo} className={styles.logoImage} />
          </div>
        </div>

        <div className={styles.halfCircle}></div>
      </CustomPreloader>

      <div className={styles.hero}>
        <VideoBackground src="https://d6nxaq6ghh9kf.cloudfront.net/DOUBLE_compREEL_v2.mp4" />
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

export default HomePage;
