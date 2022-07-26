import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import { useTeam } from "@app/hooks";
import { ImageRow, TeamMember } from "@app/components";

import * as styles from "./index.module.scss";
import { Link } from "gatsby";

const AboutPage = () => {
  const team = useTeam();

  return (
    <>
      {/* Hero */}
      <div className={styles.hero}>
        <Container className="pt-lg-6 pb-lg-8 pt-4">
          <Row className="justify-content-between">
            <Col md={8}>
              <h1 className="mb-4">
                A bunch of nerds who've mastered marketing and love to try it
                out on the world.
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
              <Button
                as={Link}
                to="/contact"
                variant="secondary"
                className="mb-lg-0 mb-4"
              >
                Contact us
              </Button>
            </Col>
            <Col md={4} className="text-end">
              <StaticImage src="./hero.svg" alt="Growth" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Intro */}
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
                    We’re sales funnel experts
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col lg={5} md={5}>
                  <h2>
                    Who understand
                    <div className="mt-lg-3 mt-2">systems thinking</div>
                  </h2>
                </Col>
                <Col lg={2} md={2} className="d-lg-block d-md-block d-none">
                  <div className={`mt-4 + ${styles.polygonIcon}`}></div>
                </Col>
                <Col lg={5} md={5} className="mt-lg-5 pt-lg-3 mt-3 pt-0">
                  <p>
                    We unlock sustainable, long-term growth by building copy,
                    videos, and articles into the context of loops, flywheels,
                    and funnels, We make sure every asset plays its part in a
                    wider acquisition and retention system.
                  </p>
                  <Button
                    as={Link}
                    to="/case-studies"
                    variant="outline-secondary"
                  >
                    View all case studies
                  </Button>
                </Col>
              </Row>
            </Col>
          </div>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <h1>AboutPage</h1>
          </Col>
        </Row>
        <Row>
          {team.map((member) => (
            <Col key={member.name} md={3}>
              <TeamMember member={member} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AboutPage;
