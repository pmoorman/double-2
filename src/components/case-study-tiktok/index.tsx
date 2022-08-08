import React, { FC } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link, Stats } from "@app/components";
import { useMediaQuery } from "react-responsive";

export const CaseStudyTikTok = () => {
  const isMdDevice = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div>
      <Container>
        <Row className="align-items-lg-end pt-lg-9 pt-9 pt-md-6 ">
          <Col
            lg={{ span: 6, order: "first" }}
            md={{ span: 6, order: "first" }}
            sm={{ span: 12, order: "last" }}
            xs={{ span: 12, order: "last" }}
          >
            <div className="tiktokImage">
              <StaticImage src="./tiktok.jpg" alt="TikTok website" />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <StaticImage src="./tiktok_logo.svg" alt="TikTok logo" />
            <small className="my-2">Infrastructure</small>
            <h2>Turbo charged partnerships</h2>
            <h3>Social media giants</h3>
            <p>
              Something wasn't adding up. Based on TikTok's unreal success,
              businesses should have been flooding in to partner up as
              advertisers...
            </p>
            {!isMdDevice && <Stats></Stats>}
            <Button
              as={Link}
              to="/case-studies"
              variant="secondary"
              className="mb-lg-0 mb-5"
            >
              Full case study
            </Button>
          </Col>
        </Row>
        {isMdDevice && <Stats></Stats>}
      </Container>
    </div>
  );
};
