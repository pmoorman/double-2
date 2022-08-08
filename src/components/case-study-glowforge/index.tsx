import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "@app/components";

import bgImage from "./growforge_bg.jpg";

import * as styles from "./index.module.scss";

export const CaseStudyGlowForge = () => {
  return (
    <div>
      <Container>
        <div className={styles.line}></div>
        <div className="position-relative"></div>
      </Container>

      <div className="position-relative">
        <div
          className={`caseStudyBgMobile + ${styles.mobileBackground}`}
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>
        <Container className="mt-lg-6 mt-0 position-relative">
          <div
            className="bg_image"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          ></div>
          <Row className="pb-lg-8 pt-lg-6 pt-2 pb-6">
            <div className={styles.rightLine}></div>
            <div
              className={`text-white position-relative + ${styles.growforgeRight}`}
            >
              <Col lg={{ span: 10, offset: 1 }} md={12}>
                <Row>
                  <Col lg={6}>
                    <StaticImage
                      src="./growforge_logo.svg"
                      alt="Growforge logo"
                      className={styles.growforge_logo}
                    />
                    <small className="mb-2 mt-lg-4 mt-2">Performance</small>
                    <h2 className="mb-2">Crossing the Atlantic</h2>
                    <h3 className="mb-3">The iconic 3D printer</h3>
                    <p>
                      We helped Glowforge build a new lead-nurturing system
                      designed to speed up the sales cycle, as well as creating
                      new performance advertisements- both tuned for the UK
                      market.
                    </p>
                    <Button as={Link} to="/case-studies" variant="light">
                      Full case study
                    </Button>
                  </Col>
                </Row>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 6 }} md={12}>
            <blockquote className="blockquote">
              <div className={styles.quoteLine}></div>
              <p>
                “Double made me feel confident that all our needs would be met
                above and beyond’
              </p>
              <footer>
                <div>John Doe</div>
                <div>CTO , Glowforge</div>
              </footer>
            </blockquote>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
