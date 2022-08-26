import React from "react";
import { Button, Col, Row } from "react-bootstrap";

import { Link } from "@app/components";

import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";

export const SectionFeaturedArticles = () => {
  return (
    <>
      <Row>
        <Col lg="10">
          <h2 className="mb-3">Our featured articles</h2>
        </Col>
        <Col lg="2" className="d-none d-lg-block d-xl-block text-end">
          <Button as={Link} to="/blog" variant="outline-secondary">
            All articles
          </Button>
        </Col>
      </Row>
      <div className={styles.blogArtical}>
        <a href="#">
          <Row className="py-4">
            <Col lg="3" md="6" sm="6" xs="4">
              <StaticImage src="./blog-1.jpeg" alt="Hire talent remote" />
            </Col>
            <Col lg="7" md="6" sm="6" xs="8">
              <div className={styles.date}>6 Aug 2021 | Author</div>
              <h3 className="mb-3">
                Want to hire the best talent? Hire remote
              </h3>
              <p className="d-none d-sm-block">
                Remote work has made hidden gems more accessible. When will you
                take advantage?
              </p>
            </Col>
          </Row>
        </a>
        <a href="#">
          <Row className="py-4">
            <Col lg="3" md="6" sm="6" xs="4">
              <StaticImage src="./blog-2.jpeg" alt="Hire talent remote" />
            </Col>
            <Col lg="7" md="6" sm="6" xs="8">
              <div className={styles.date}>6 Aug 2021 | Author</div>
              <h3 className="mb-3">
                We’re donating 1% of our revenue to charity
              </h3>
              <p className="d-none d-sm-block">
                Donating money is much easier when we know and agree with where
                it’s going. Understandable, of course.
              </p>
            </Col>
          </Row>
        </a>
        <a href="#">
          <Row className="py-4 align-items-center">
            <Col lg="3" md="6" sm="6" xs="4">
              <StaticImage src="./blog-3.jpeg" alt="Hire talent remote" />
            </Col>
            <Col lg="7" md="6" sm="6" xs="8">
              <div className={styles.date}>6 Aug 2021 | Author</div>
              <h3 className="mb-3">
                Great marketers are effective first, efficient second
              </h3>
              <p className="d-none d-sm-block">
                The words 'effective' and 'efficient' are often used
                interchangeably. But when it comes to marketers, the two mean
                very different things.
              </p>
            </Col>
          </Row>
        </a>
        <div className="d-block  d-xl-none  d-lg-none mb-5 mt-3">
          <Button as={Link} to="/blog" variant="outline-secondary">
            All articles
          </Button>
        </div>
      </div>
    </>
  );
};
