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

const formId = "94243195";

const OglviyConcept6 = () => {
  return (
    <>
      <div className={styles.pageHero}>
        <Container>
          <Row className="align-center">
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 0 }}
              className="justify-content-center mt-4 mt-lg-0"
            >
              <StaticImage
                src="./hero.png"
                alt="Girl's image"
                objectFit="contain"
                className={styles.girlImage}
              />
            </Col>
            <Col xs={{ span: 12, order: 0 }} md={{ span: 6, order: 1 }}>
              <h1 className="mb-3">38 laws to avoid startup disaster</h1>
              <div className="mb-3">Download your free guide</div>
              <div>Leave your details below: </div>
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

export default OglviyConcept6;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO title="38 laws of growth marketing" />
    </>
  );
};
