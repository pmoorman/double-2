import * as React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import {
  AppHead,
  ContactSection,
  Hero,
  Image,
  Link,
  SEO,
} from "@app/components";

import * as styles from "./index.module.scss";
import heroImg from "./serviceshero.svg";

const ServicesPage = () => {
  return (
    <>
      {/* Hero */}
      <Container>
        <div className="pt-lg-7 pb-lg-5 py-4 ">
          <Row className="justify-content-center position-relative">
            <div className={styles.heroBg}>
              <img
                src={heroImg}
                alt="Services"
                className="img-fluid"
                style={{ maxWidth: 360 }}
              />
            </div>
            <Col md={7}>
              <h1 className="d-headline text-center py-6">
                Full-stack growth <span>marketing</span>
              </h1>
            </Col>
          </Row>
          <Row className="justify-content-center text-center">
            <Col md={6}>
              <p>
                You’re in the right place whether you’re looking to hire a paid
                ads expert, a sales funnel architect, or a product marketer.
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      <Container className="mb-6">
        <Row>
          <Col md={8} className="mb-3 mt-2">
            <Link
              to="strategy"
              className={cn(styles.item, styles.strategyItem)}
            >
              <Button className={styles.button} variant="secondary">
                Strategy{" "}
                <StaticImage
                  className="ms-2"
                  src="./right-arrow.svg"
                  height={12}
                  alt=""
                />
              </Button>
              <div className={styles.content}>
                <p>Find your audience and create a compelling reason to buy.</p>
              </div>
            </Link>
          </Col>
          <Col md={4} className="mb-3 mt-2">
            <Link
              to="infrastructure"
              className={cn(styles.item, styles.infrastructureItem)}
            >
              <Button className={styles.button} variant="secondary">
                Infrastructure{" "}
                <StaticImage
                  className="ms-2"
                  src="./right-arrow.svg"
                  height={12}
                  alt=""
                />
              </Button>
              <div className={styles.content}>
                <p>
                  Reach people in a measurable way, optimised for conversion.
                </p>
              </div>
            </Link>
          </Col>
          <Col md={4} className="mb-3 mt-2">
            <Link
              to="performance"
              className={cn(styles.item, styles.performanceItem)}
            >
              <Button className={styles.button} variant="secondary">
                Performance{" "}
                <StaticImage
                  className="ms-2"
                  src="./right-arrow.svg"
                  height={12}
                  alt=""
                />
              </Button>
              <div className={styles.content}>
                <p>Tell your story with a medium that brings it to life.</p>
              </div>
            </Link>
          </Col>
          <Col md={8} className="mb-3 mt-2">
            <Link
              to="creative"
              className={cn(styles.item, styles.creativeItem)}
            >
              <Button className={styles.button} variant="secondary">
                Creative{" "}
                <StaticImage
                  className="ms-2"
                  src="./right-arrow.svg"
                  height={12}
                  alt=""
                />
              </Button>
              <div className={styles.content}>
                <p>Build a seamless front-end with a stable back-end.</p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>

      <ContactSection />
    </>
  );
};

export default ServicesPage;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO
        title="Full-Stack Growth Marketing Services | Get Expert Help Today"
        keywords="Get Expert Help, Growth Marketing Services, full-stack Growth Marketing agency"
        description="From strategy and infrastructure to creative and performance. We can help you with everything from building engaged audiences to designing growth loops."
      />
    </>
  );
};
