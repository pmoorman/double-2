import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";
import hero from "./hero.svg";
import icon from "./intro.svg";
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
      <SEO
        title="Our team of growth marketing experts - Double Agency"
        keywords="team of growth marketing experts, growth marketing experts, Growth Marketing Team, Team of Growth Experts"
        description="We're a growth marketing team with double the drive. We combine psychology with data and design to create systems that drive growth on autopilot. Meet the team."
      />
      {/* Hero */}
      <div>
        <Container className="pt-lg-6 pb-lg-8 py-4">
          <Row className="justify-content-between">
            <Col md={8}>
              <h1 className="mb-4">
                We’re a growth marketing agency with double the drive
              </h1>
              <p className="mb-4">
                Double is a close-knit team of experts from around the world,
                who are obsessed with building systems that drive growth on
                autopilot.
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
            <Col md={4} className="text-lg-end d-none d-lg-block d-md-block">
              <img src={hero} alt="Growth" />
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
              We combine psychology
              <div className="mt-lg-3 mt-2">with data and design</div>
            </h2>
          </Col>
          <Col
            md={2}
            lg={2}
            className="d-flex justify-content-lg-center justify-content-end mb-lg-0 mb-4"
          >
            <img src={icon} className="pt-2" />
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={{ span: 4, offset: 8 }}>
            <div>
              <p>
                There’s a lot more to growth than just marketing. We understand
                the psychology behind customer acquisition and retention and
                this insight is what drives our systems and stories. Using data
                as our guide, we ensure customers build trust with our clients
                and are consistently reminded of the value they provide.
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
      <div className={cn(styles.images)}>
        <Container className="pt-lg-8 py-4 pb-lg-6">
          <Row>
            {/* Image 1 */}
            <Col md={12}>
              <Parallax scale={[1, 1.2, "easeInQuad"]}>
                <Image>
                  <StaticImage
                    width={1300}
                    src="./about_img_1.jpeg"
                    alt="About image 1"
                  />
                </Image>
              </Parallax>

              <div className={styles.img_1}>
                <div
                  className={cn(
                    styles.img_1Text,
                    "d-flex justify-content-center text-white"
                  )}
                >
                  <h2 className="text-end">Growth experts</h2>
                </div>
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-between">
            <div className={styles.img_2}>
              <Parallax speed={-10}>
                <StaticImage
                  width={460}
                  src="./about_img_2.jpeg"
                  alt="Smiling savants"
                />
                <h3 className="mt-3 text-white">Smiling savants</h3>
              </Parallax>
            </div>
            <div className={styles.img_3}>
              <Parallax speed={10}>
                <StaticImage
                  width={460}
                  src="./about_img_3.jpeg"
                  alt="Curious ponderers"
                />
                <h3 className="mt-3 text-white">Curious ponderers</h3>
              </Parallax>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className={styles.img_4}>
              <Parallax speed={20}>
                <StaticImage
                  width={400}
                  src="./about_img_4.jpeg"
                  alt="Model movers"
                />
                <h3 className="mt-3 text-white">Model movers</h3>
              </Parallax>
            </div>
            <div className={styles.img_5}>
              <Parallax speed={30}>
                <StaticImage
                  width={460}
                  src="./about_img_5.jpeg"
                  alt="Part-time jokers"
                />
                <h3 className="mt-3 text-white">Part-time jokers</h3>
              </Parallax>
            </div>
          </div>
          <div className={styles.img_6}>
            <Parallax speed={-10}>
              <StaticImage
                width={650}
                src="./about_img_6.jpeg"
                alt="Curious collaborators"
              />
              <h3 className="mt-3 text-white">Curious collaborators</h3>
            </Parallax>
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
      {/* <Container className="py-4 pb-lg-6">
        <SectionOpenRoles />
      </Container> */}

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
