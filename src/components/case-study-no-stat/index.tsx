import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";
import bgImage from "./second_bg.jpg";

export const CaseStudyNoStat = () => {
  return (
    <div
      className="caseStudyBgMobile"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <Container className="position-relative">
        <div
          className="bg_image"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>
        <div className="position-relative p-0 p-md-3">
          <Row className="pt-lg-5 pb-lg-9 py-0 pt-3 pb-6">
            <Col lg={{ span: 10, offset: 1 }}>
              <Row>
                <Col lg={8} md={8}>
                  <StaticImage src="./alpian_logo.svg" alt="Alpian logo" />
                  <small className="mb-2">Strategy | Performance</small>
                  <h2 className="mb-2">Taking growth to the bank</h2>
                  <h3 className="mb-3">Wealth beyond money</h3>
                  <p>
                    We have been a long term growth marketing partner for
                    Switzerland’s first digital private bank. Helping them build
                    an audience from scratch.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
