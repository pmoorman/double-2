import React from "react";
import { Row, Col, Link, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";

import * as styles from "./index.module.scss";

export const BlogArtical = () => {
  return (
    <>
      <Row>
        <Col
          md="6"
          lg="4"
          sm="12"
          className={`my-lg-4 my-2 + ${styles.aricalCard}`}
        >
          <a href="#">
            <StaticImage
              src="./blog-1.jpeg"
              alt="Post"
              className="mb-3"
              layout="fullWidth"
            />
            <small className="mb-2">
              6 Aug 2021 <span>| Author | Paid ad strategy</span>
            </small>
            <h4 className="mb-3">
              Not knowing your customers is slowly killing you
            </h4>
            <p className="mb-4">
              The words 'effective' and 'efficient' are often used
              interchangeably. But when it comes to marketers, the two mean very
              different things.
            </p>
          </a>
        </Col>
      </Row>

      <div className="text-center mt-lg-6 mt-4">
        <Button
          as={Link}
          to="/"
          variant="outline-secondary"
          className="mb-lg-0 mb-4"
        >
          Load more articles
        </Button>
      </div>
    </>
  );
};
