import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  SEO,
  OgilvyInlineForm,
  OgilvyLearnForm,
  AppHead,
} from "@app/components";

import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const formId = "4880150";

const OglviyConcept4 = () => {
  return (
    <>
      <div className={styles.pageHero}>
        <Container>
          <Row className="align-center">
            <Col
              xs="6"
              className="justify-content-center	d-none d-lg-flex d-md-flex"
            >
              <StaticImage
                src="./phone.png"
                alt="Phone image"
                objectFit="contain"
                width={476}
              />
            </Col>
            <Col md="6" xs="8">
              <h1 className="mb-3">
                The 38 laws of
                <br />
                growth marketing
              </h1>
              <div style={{ fontSize: "20px" }} className="mb-3">
                As a growth agency, Double has executed campaigns for some of
                the fastest growing tech companies in the world.
              </div>
              <div>Leave your details and get access to the free PDF.</div>
              <OgilvyInlineForm
                formId={formId}
                buttonProps={{
                  variant: "primary",
                }}
                recaptchaProps={{
                  theme: "light",
                  className: "mt-3",
                }}
              />
            </Col>
          </Row>
        </Container>
        <div className={styles.mobileImage}>
          <StaticImage
            src="./phone_mobile.png"
            alt="Phone image"
            objectFit="contain"
            width={120}
            quality={100}
          />
        </div>
      </div>
      <OgilvyLearnForm
        formId={formId}
        buttonProps={{
          variant: "primary",
        }}
        recaptchaProps={{
          theme: "light",
          className: "mt-3",
        }}
      />
    </>
  );
};

export default OglviyConcept4;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO title="38 laws of growth marketing" />
    </>
  );
};
