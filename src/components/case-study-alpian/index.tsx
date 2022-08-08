import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "@app/components";

import alpian from "./alpian_bg.jpg";
import * as styles from "./index.module.scss";

export const CaseStudyAlpian = () => {
  return (
    <div
      className="caseStudyBgMobile"
      style={{
        backgroundImage: `url(${alpian})`,
      }}
    >
      <Container className="mt-lg-7 mt-3 mb-lg-8 mb-5 position-relative">
        <div
          className="bg_image"
          style={{
            backgroundImage: `url(${alpian})`,
          }}
        ></div>
        <div className="text-white position-relative p-0 p-md-3">
          <Row className="py-lg-6 py-0">
            <Col lg={{ span: 10, offset: 1 }}>
              <Row>
                <Col lg={6} md={6}>
                  <StaticImage src="./alpian_logo.svg" alt="Alpian logo" />
                  <small className="mb-2">Strategy | Performance</small>
                  <h2 className="mb-2">Taking growth to the bank</h2>
                  <h3 className="mb-3">Wealth beyond money</h3>
                  <p>
                    We have been a long term growth marketing partner for
                    Switzerland’s first digital private bank. Helping them build
                    an audience from scratch.
                  </p>
                  <Button
                    as={Link}
                    to="/case-studies"
                    variant="light"
                    className="mb-lg-0 mb-6 mb-md-4"
                  >
                    Full case study
                  </Button>
                </Col>
                <Col lg={6} md={6} className="mt-9  flex relative">
                  <div className={styles.rombik}>
                    <div className={styles.parent}>
                      <svg viewBox="0 0 300 300">
                        <g
                          transform="translate(0,300) scale(0.1,-0.1)"
                          fill="#387CD3"
                        >
                          <path d="M745 2250 l-750 -750 753 -753 752 -752 752 752 753 753 -750 750 c-412 412 -752 750 -755 750 -3 0 -343 -338 -755 -750z" />
                        </g>
                      </svg>
                    </div>
                    <div className="numberStat">
                      <div className="mb-5">
                        <div>7k</div>
                        <span>Leads</span>
                      </div>
                      <div className="mb-5">
                        <div>$30m</div>
                        <span>Raised</span>
                      </div>
                      <div>
                        <div>18</div>
                        <span>Months</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
