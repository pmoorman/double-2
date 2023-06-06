import React, { FC, ReactNode } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link, SEO, GifSection, AppHead } from "@app/components";

import * as styles from "./index.module.scss";

export type ThankYou2Props = {
  subtitle?: string | ReactNode;
};

export const ThankYou2: FC<ThankYou2Props> = ({
  subtitle = "Email us at double@double-agency.com with 'Knock knock' and you can still avail the discount. See you there!",
}) => {
  return (
    <>
      <div className={styles.thankYouHero}>
        <Container>
          <Row className="justify-content-center">
            <Col md={5} className="mb-4">
              <StaticImage src="./giphy-1.jpg" alt="" className="img-fluid" />
            </Col>
            <Col md={9}>
              <h3 className="mb-4">
                Ahh! You missed it. <br /> But fortunately, we hate leaving
                entrepreneurs hanging.
              </h3>
            </Col>
            <Col md={8}>
              <h4 className="fw-normal">{subtitle}</h4>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO title="Thank you" />
    </>
  );
};
