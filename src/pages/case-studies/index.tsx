import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { FaGlobe, FaLightbulb, FaUsers } from "react-icons/fa";

import { SEO, AppHead, ContactSection, AboutSection } from "@app/components";

import { CasestudiesSection } from "@app/page-components/case-studies";

import heroImg from "./oval.svg";

import * as styles from "./index.module.scss";

const CaseStudiesPage = () => {
  return (
    <>
      <div>
        <Container>
          <div className="pt-lg-7 pb-lg-5 py-4 position-relative">
            <Row className="justify-content-center">
              <Col md="9">
                <h1 className="d-headline ugh text-center pb-6 pt-5">
                  The game of explosive <br /> <span>user growth</span>
                </h1>
                <div className={styles.heroBg}>
              <img src={heroImg} alt="About" className="img-fluid" />
            </div>
              </Col>
            </Row>
          </div>
        </Container>
        <Container className="mb-6 mt-5">
          <Row className="justify-content-center">
            <Col md="6">
              <StaticImage src="./hero_2.png" alt="hero" />
            </Col>
            <Col md="6" className="work-image-1" >
              <StaticImage src="./hero_1.webp" alt="hero" />
            </Col>
          </Row>
        </Container>
        <Container className="mb-7">
          <Row>
            <Col md="4" className="flex items-center gap-8 work-stats">
              <h2 className="fw-bold mb-2 d-flex align-items-center gap-3">
                <FaUsers size={44} />
                50+
              </h2>
              <h3 className="ffs">tech companies</h3>
            </Col>
            <Col md="4" className="work-stats">
              <h2 className="fw-bold mb-2 d-flex align-items-center gap-3">
                <FaGlobe size={44} />
                13
              </h2>
              <h3 className="ffs">active countries</h3>
            </Col>
            <Col md="4" className="work-stats">
              <h2 className="fw-bold mb-2 d-flex align-items-center gap-3">
                <FaLightbulb size={44} />
                80,000
              </h2>
              <h3 className="ffs">leads generated</h3>
            </Col>
          </Row>
        </Container>

        <div className="mb-8">
          <CasestudiesSection />
        </div>
        <div className="mb-8">
          <AboutSection />
        </div>
      </div>
    </>
  );
};

export default CaseStudiesPage;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO
        title="Growth Marketing Case Studies | Explore Strategies & Tactics"
        keywords="Growth Marketing Case Studies, Growth Marketing Strategies, Growth Marketing Tactics"
        description="Looking to drive growth in your business? Our case studies explore a variety of growth marketing and customer acquisition strategies and tactics."
      />
    </>
  );
};
