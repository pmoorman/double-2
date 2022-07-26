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
          <Col md={6}>
            <h2 className="text-end">
              We’re a full-stack
              <div className="mt-lg-3 mt-2">Growth Marketing agency</div>
            </h2>
          </Col>
          <Col md={1}>
            <StaticImage src="./intro.svg" alt="" />
          </Col>
          <Col md={5} className="d-flex justify-content-end">
            <div className="mt-7" style={{ maxWidth: "450px" }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
              <Button as={Link} to="/services" variant="outline-secondary">
                View all services
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Images */}
      <div className="bg-secondary">
        <Container className="pt-lg-8 py-4 pb-lg-6">
          <Row>
            <Col md={12}>
              <StaticImage src="./about_img_1.jpg" alt="TODO" />
              <h2 className="text-end">
                We’re Double. We’re
                <div className="mt-lg-3 mt-2">
                  Lunch time jokers
                  <StaticImage
                    className="ms-4"
                    src="./about_img_overlay.svg"
                    alt="TODO"
                  />
                </div>
              </h2>
            </Col>
            <Col md={1}>
              <StaticImage src="./intro.svg" alt="" />
            </Col>
            <Col md={5} className="d-flex justify-content-end">
              <div className="mt-7" style={{ maxWidth: "450px" }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim.
                </p>
                <Button as={Link} to="/services" variant="outline-secondary">
                  View all services
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

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
