import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import { useTeam } from "@app/hooks";
import {
  TeamMember,
  Link,
  SectionFeaturedArticles,
  SectionOpenRoles,
} from "@app/components";

import * as styles from "./index.module.scss";

const AboutPage = () => {
  const team = useTeam();

  return (
    <>
      {/* Hero */}
      <div>
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
            <StaticImage src="./intro.svg" width={135} alt="" />
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
      <div className={cn(styles.images, "bg-secondary")}>
        <Container className="pt-lg-8 py-4 pb-lg-6">
          <Row>
            {/* Image 1 */}
            <Col md={12}>
              <div className={styles.img_1}>
                <StaticImage
                  src="./about_img_1.jpg"
                  alt="TODO"
                  className="cutted_image"
                />

                <div
                  className={cn(
                    styles.img_1Text,
                    "d-flex justify-content-center text-white"
                  )}
                >
                  <h2 className="text-end">
                    We’re Double. We’re
                    <div className="mt-lg-3 mt-2">
                      Lunch time jokers
                      <StaticImage
                        className="ms-4 "
                        src="./about_img_overlay.svg"
                        alt="TODO"
                      />
                    </div>
                  </h2>
                </div>
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-between">
            <div className={styles.img_2}>
              <StaticImage src="./about_img_2.jpg" alt="TODO" width={481} />
              <h3 className="mt-3 text-white">Title about picture</h3>
            </div>
            <div className={styles.img_3}>
              <StaticImage src="./about_img_3.jpg" alt="TODO" width={481} />
              <h3 className="mt-3 text-white">Title about picture</h3>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className={styles.img_4}>
              <StaticImage src="./about_img_4.jpg" alt="TODO" width={644} />
              <h3 className="mt-3 text-white">Title about picture</h3>
            </div>
            <div className={styles.img_5}>
              <StaticImage src="./about_img_5.jpg" alt="TODO" width={481} />
              <h3 className="mt-3 text-white">Title about picture</h3>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className={styles.img_6}>
              <StaticImage src="./about_img_6.jpg" alt="TODO" width={644} />
              <h3 className="mt-3 text-white">Title about picture</h3>
            </div>
            <div className={styles.img_7}>
              <StaticImage src="./about_img_7.jpg" alt="TODO" width={775} />
              <h3 className="mt-3 text-white">Title about picture</h3>
            </div>
          </div>
        </Container>
      </div>

      {/* Our people */}
      <Container className="pt-lg-8 py-4 pb-lg-6">
        <Row className="mb-5">
          <Col md={12}>
            <h2 className="mb-4">Our people</h2>
          </Col>
          <Col md={7}>
            <p>
              At Double everyone is a all rounder growth marketing expert. Meet
              the people on the ground who will be handling all your marketing
              needs
            </p>
          </Col>
        </Row>
        <Row>
          {team.map((member) => (
            <Col key={member.name} md={3} className="mb-6">
              <TeamMember member={member} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Our open roles */}
      <Container className="py-4 pb-lg-6">
        <SectionOpenRoles />
      </Container>

      {/* Featured articles */}
      <div className="pt-lg-6 pt-0">
        <Container>
          <SectionFeaturedArticles />
        </Container>
      </div>
    </>
  );
};

export default AboutPage;
