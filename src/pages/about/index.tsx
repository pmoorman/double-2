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
  AppHead,
  Carousel,
  TeamSection,
} from "@app/components";

import * as styles from "./index.module.scss";

const AboutPage = () => {
  const team = useTeam();

  return (
    <>
      {/* Hero */}
      <Container>
        <div className="pt-lg-7 pb-lg-5 py-4 position-relative">
          <Row className="justify-content-center">
            <div className={styles.heroBg}>
              <StaticImage
                src="./oval.svg"
                alt="About"
                objectFit="contain"
                placeholder="none"
              />
            </div>
            <Col md={5}>
              <h1 className="d-headline text-center py-6">
                Double the <span>drive</span>
              </h1>
            </Col>
          </Row>
        </div>
      </Container>

      <Container className="py-4 pb-lg-6">
        <Row>
          <Col md={6}>
            <StaticImage src="./DOUBLEAGENCY-33-1.jpg" alt="" />
          </Col>
          <Col md={1} />
          <Col md={4}>
            <div className="h-100 d-flex flex-column justify-content-around">
              <div className="d-flex align-items-center px-lg-3 mb-4 mb-lg-0">
                <StaticImage
                  className="me-3 flex-shrink-0"
                  src="./index-assets/pyra.svg"
                  alt="pyra"
                  width={86}
                />
                <h3 className="mb-0">Experienced start-up founders</h3>
              </div>
              <div className="d-flex align-items-center px-lg-3 mb-4 mb-lg-0">
                <StaticImage
                  className="me-3 flex-shrink-0"
                  src="./diamond.svg"
                  alt="diamond"
                  width={88}
                />
                <h3 className="mb-0">Worked with 50+ tech companies </h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Our people */}
      <Container className="py-4 pb-lg-6">
        <Row>
          <Col md={6}>
            <h2 className="mb-4">We combine psychology with data and design</h2>
            <p>
              There’s a lot more to growth than just marketing. We understand
              the psychology behind customer acquisition and retention and this
              insight is what drives our systems and stories.
            </p>
            <p className="mb-0">
              Using data as our guide, we ensure customers build trust with our
              clients and are consistently reminded of the value they provide.
            </p>
          </Col>
        </Row>
      </Container>

      <Carousel hideArrows>
        <div className={styles.carouselItem}>
          <StaticImage src="./DOUBLEAGENCY-51-2.jpg" width={888} alt="" />
        </div>{" "}
        <div className={styles.carouselItem}>
          <StaticImage src="./Selection-21-2.jpg" width={395} alt="" />{" "}
        </div>{" "}
        <div className={styles.carouselItem}>
          <StaticImage src="./DOUBLEAGENCY-28-5.jpg" width={887} alt="" />
        </div>{" "}
        <div className={styles.carouselItem}>
          <StaticImage src="./bbqexports-142-2.jpg" width={394} alt="" />{" "}
        </div>{" "}
        <div className={styles.carouselItem}>
          <StaticImage src="./DOUBLEAGENCY-58-2.jpg" width={397} alt="" />
        </div>
      </Carousel>

      <Container className="py-8 pb-lg-6">
        <TeamSection />
      </Container>

      <section className="bg-primary">
        <Container className="py-7">
          <Row className="justify-content-center text-center text-white">
            <Col md={8}>
              <h2 className="mb-4">
                We’re a growth marketing agency with double the drive
              </h2>
            </Col>
            <Col md={6}>
              <p className="mb-4">
                Double is a close-knit team of experts from around the world,
                who are obsessed with building systems that drive growth on
                autopilot.
              </p>
              <Button as={Link} to="/contact" variant="secondary" type="submit">
                Contact us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

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

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO
        title="Our team of growth marketing experts - Double Agency"
        keywords="team of growth marketing experts, growth marketing experts, Growth Marketing Team, Team of Growth Experts"
        description="We're a growth marketing team with double the drive. We combine psychology with data and design to create systems that drive growth on autopilot. Meet the team."
      />
    </>
  );
};
