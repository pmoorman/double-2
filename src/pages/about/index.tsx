import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import {
  SEO,
  AppHead,
  Carousel,
  TeamSection,
  ContactSection,
} from "@app/components";

import * as styles from "./index.module.scss";
import heroImg from "./oval.svg";

const AboutPage = () => {
  return (
    <div className="py-20">
      {/* Hero */}
      <Container className="py-20">
        <div className="mx-auto py-20">
          <div className="flex justify-between">
            
              <h1 className="d-headline py-6 mb-20">
                Double the <span>drive</span>
              </h1>
            <div className={styles.heroBg}>
              <img src={heroImg} alt="About" className="img-fluid" />
            </div>
          </div>
        </div>
      </Container>

      <div className="container py-20 mt-20">
        <Row>
          <Col md={6} className="mb-6 mb-md-0">
            <StaticImage
              className={styles.image}
              src="./DOUBLEAGENCY-33-1.jpg"
              alt=""
            />
          </Col>
          <Col md={1} />
          <Col md={4}>
            <div className="h-100 d-flex flex-column justify-content-around">
              <div className="d-flex align-items-center px-lg-3 mb-4 mb-lg-0">
                <StaticImage
                  className="me-3 flex-shrink-0"
                  src="./pyra.png"
                  alt="pyra"
                  width={86}
                />
                <h3 className="mb-0">Experienced start-up founders</h3>
              </div>
              <div className="d-flex align-items-center px-lg-3 mb-4 mb-lg-0">
                <StaticImage
                  className="me-3 flex-shrink-0"
                  src="./diamond.png"
                  alt="diamond"
                  width={88}
                />
                <h3 className="mb-0">Worked with 100+ tech companies </h3>
              </div>
            </div>
          </Col>
        </Row>
      </div>

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

      <Container className="py-lg-8 pt-4 pb-6">
        <TeamSection />
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
    </div>
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
