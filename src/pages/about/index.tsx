import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";
import cn from "classnames";

import { useTeam } from "@app/hooks";
import {
  TeamMember,
  Link,
  SectionFeaturedArticles,
  SectionOpenRoles,
  SEO,
  Image,
} from "@app/components";

import * as styles from "./index.module.scss";

const AboutPage = () => {
  const team = useTeam();

  return (
    <>
      <SEO title="About" />
      {/* Hero */}
      <div>
        <Container className="pt-lg-6 pb-lg-8 py-4">
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
              {/* <Button
                as={Link}
                to="/contact"
                variant="secondary"
                className="mb-lg-0 mb-4"
              >
                Contact us
              </Button> */}
            </Col>
            <Col md={4} className="text-lg-end">
              <StaticImage src="./hero.svg" alt="Growth" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Intro */}
      <Container className="pt-lg-8 py-4 pb-6">
        <Row>
          <Col
            lg={{ span: 6, order: 0 }}
            md={{ span: 9, order: 0 }}
            sm={{ span: 12, order: 2 }}
            xs={{ span: 12, order: 2 }}
          >
            <h2 className="text-end mb-4 mb-lg-0">
              We’re a full-stack
              <div className="mt-lg-3 mt-2">Growth Marketing agency</div>
            </h2>
          </Col>
          <Col
            md={2}
            lg={2}
            className="d-flex justify-content-lg-center justify-content-end mb-lg-0 mb-4"
          >
            <svg
              width="136"
              height="101"
              viewBox="0 0 136 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M61.2307 86.2599C61.2307 86.2599 81.5139 67.2547 87.4857 52.005C95.0062 32.8002 87.4857 7.33719e-06 87.4857 7.33719e-06L3.34326 -1.87765e-08C3.34326 -1.87765e-08 -4.17732 32.8002 3.34325 52.005C9.31504 67.2547 29.5983 86.2599 29.5983 86.2599L29.5983 101L61.2307 101L61.2307 86.2599Z"
                fill="#387CD3"
              />
              <path
                d="M106.282 86.2599L105.598 85.5302L105.282 85.8265L105.282 86.2599L105.282 100L75.649 100L75.649 86.2599L75.649 85.8265L75.3328 85.5302L74.649 86.2599L75.3327 85.5302L75.3322 85.5297L75.3298 85.5274L75.3195 85.5177L75.2774 85.478C75.2635 85.4649 75.247 85.4493 75.2281 85.4314C75.1958 85.4007 75.1562 85.3632 75.1096 85.3187C74.9617 85.1778 74.7431 84.9683 74.4622 84.6958C73.9005 84.1508 73.0899 83.3538 72.098 82.3494C70.1136 80.34 67.4061 77.503 64.514 74.1931C58.7053 67.5454 52.2433 59.0922 49.3252 51.6403C45.6548 42.2676 45.6319 29.4659 46.5699 18.889C47.0369 13.6231 47.7376 8.95152 48.3216 5.5966C48.6136 3.91966 48.8761 2.57301 49.0653 1.64712C49.1156 1.40112 49.1607 1.18485 49.1998 1L131.731 1.00001C131.77 1.18485 131.815 1.40112 131.865 1.64712C132.054 2.57302 132.317 3.91967 132.609 5.59661C133.193 8.95152 133.894 13.6231 134.361 18.889C135.299 29.4659 135.276 42.2676 131.605 51.6403C128.687 59.0922 122.225 67.5454 116.417 74.1931C113.524 77.5029 110.817 80.34 108.833 82.3494C107.841 83.3538 107.03 84.1507 106.468 84.6958C106.188 84.9683 105.969 85.1778 105.821 85.3187C105.747 85.3892 105.691 85.4425 105.653 85.478L105.611 85.5177L105.601 85.5274L105.598 85.5296L105.598 85.5301L106.282 86.2599Z"
                stroke="#1C2328"
                strokeWidth="2"
              />
            </svg>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={{ span: 4, offset: 8 }}>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
              <Button
                as={Link}
                to="/services"
                className="mt-lg-5 mt-2"
                variant="outline-secondary"
              >
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
              <Parallax scale={[1, 1.3, "easeInQuad"]}>
                <Image>
                  <StaticImage src="./about_img_1.jpg" alt="TODO" />
                </Image>
              </Parallax>

              <div className={styles.img_1}>
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
                        className="ms-4"
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
              <StaticImage src="./about_img_2.jpg" alt="TODO" />
              <h3 className="mt-3 text-white">Title about picture</h3>
            </div>
            <div className={styles.img_3}>
              <Parallax speed={10}>
                <StaticImage src="./about_img_3.jpg" alt="TODO" />
                <h3 className="mt-3 text-white">Title about picture</h3>
              </Parallax>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className={styles.img_4}>
              <Parallax speed={20}>
                <StaticImage src="./about_img_4.jpg" alt="TODO" />
                <h3 className="mt-3 text-white">Title about picture</h3>
              </Parallax>
            </div>
            <div className={styles.img_5}>
              <Parallax speed={30}>
                <StaticImage src="./about_img_5.jpg" alt="TODO" />
                <h3 className="mt-3 text-white">Title about picture</h3>
              </Parallax>
            </div>
          </div>
          <div className={styles.img_6}>
            <Parallax speed={0}>
              <StaticImage src="./about_img_6.jpg" alt="TODO" />
              <h3 className="mt-3 text-white">Title about picture</h3>
            </Parallax>
          </div>
          <div className={styles.img_7}>
            <div>
              <Parallax speed={-10}>
                <StaticImage src="./about_img_7.jpg" alt="TODO" />
                <h3 className="mt-3 text-white">Title about picture</h3>
              </Parallax>
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
            <Col key={member.name} md={3} className="mb-5">
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
      {/* <div className="pt-lg-6 pt-0">
        <Container>
          <SectionFeaturedArticles />
        </Container>
      </div> */}
    </>
  );
};

export default AboutPage;
