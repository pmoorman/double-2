import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import {
  Link,
  SEO,
  OgilvyHeader,
  OgilvyImage,
  OgilvyFooter,
  AppHead,
} from "@app/components";

import * as styles from "./index.module.scss";

const formId = "105558293";

const OglviyConcept = () => {
  return (
    <>
      <OgilvyHeader formId={formId} />

      <div className={styles.lightBlueSection}>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>
                After working with some killer brands - we noticed 38 laws of
                growth showing up time and time again
              </h2>
              <StaticImage
                src="./logos.png"
                alt="Logos"
                className="mt-lg-7 mt-4"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className={`pt-lg-8 pb-9  pt-4 + ${styles.headings}`}>
        <Container className="position-relative">
          <Row>
            <Col
              xl={{ span: 8, offset: 2 }}
              lg={{ span: 10, offset: 1 }}
              className="text-center"
            >
              <h2 className="mb-lg-6 mb-4">
                We also noticed, that most brands are oblivious to these laws
              </h2>
              <h2>
                So, we decided to compile them into a two-pager for
                hyper-ambitious scaleups to use
              </h2>
            </Col>
          </Row>
          <div className={styles.sectionLines}>
            <div className={styles.arrowLine}>
              <div></div>
            </div>
          </div>
        </Container>
      </div>

      <OgilvyImage />
      <OgilvyFooter formId={formId} />
    </>
  );
};

export default OglviyConcept;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO title="This is how growth marketing works" />
    </>
  );
};
