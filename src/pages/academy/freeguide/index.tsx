import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SEO, OgilvyInlineForm, OgilvyLearnForm } from "@app/components";

import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const formId = "4980655";

const OglviyConcept4 = () => {
  return (
    <>
      <SEO title="38 laws to avoid startup disaster" />
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
                38 laws to
                <br />
                avoid startup
                <br />
                disaster
              </h1>
              <div className="mb-3">Download your free pdf</div>
              <div>Leave your details below:</div>
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
