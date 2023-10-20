import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import { SEO, AppHead, ContactSection, AboutSection } from "@app/components";

import { CasestudiesSection } from "@app/page-components/case-studies";

const CaseStudiesPage = () => {
  return (
    <>
      <div>
        <Container>
          <div className="pt-lg-7 pb-lg-5 py-4 position-relative">
            <Row className="justify-content-center">
              <Col md="9">
                <h1 className="d-headline text-center py-6 fw-semibold">
                  The game of explosive <br /> <span>user growth</span>
                </h1>
              </Col>
            </Row>
          </div>
        </Container>
        <Container className="mb-6">
          <Row className="justify-content-center">
            <Col md="6">
              <StaticImage src="./hero_2.png" alt="hero" />
            </Col>
            <Col md="6">
              <StaticImage src="./hero_1.webp" alt="hero" />
            </Col>
          </Row>
        </Container>
        <Container className="mb-8">
          <Row>
            <Col md="4">
              <h2 className="fw-bold mb-2">50+</h2>
              <h3 className="fw-semibold">Tech companies</h3>
            </Col>
            <Col md="4">
              <h2 className="fw-bold mb-2">13</h2>
              <h3 className="fw-semibold">Active countries</h3>
            </Col>
            <Col md="4">
              <h2 className="fw-bold mb-2">80,000</h2>
              <h3 className="fw-semibold">Leads generated</h3>
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
