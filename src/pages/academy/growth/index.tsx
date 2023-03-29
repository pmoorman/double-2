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

const formId = "4933469";

const OglviyConcept7 = () => {
  return (
    <>
      <div className={styles.pageHero}>
        <Container>
          <Row className="align-center">
            <Col xs={{ span: 12, order: 0 }} md={{ span: 6, order: 1 }}>
              <h1 className="mb-3">
                38 <u>unexpected</u> laws to avoid startup disaster
              </h1>
              <div className="mb-4">Download your free guide</div>
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
            <Col
              md={{ span: 6, order: 2 }}
              className="d-flex justify-content-end align-items-baseline"
            >
              <div className={styles.rightSection}>
                <StaticImage
                  src="./vladimir.png"
                  alt="Vladimir photo"
                  width={135}
                  className="mb-4"
                />
                <h3 className="mb-4">
                  “It’s not sexy to focus on the basics. But getting the
                  fundamentals right is pretty damn effective.”
                </h3>
                <div>
                  Vladimir de Ziegler
                  <br />
                  Growth & Product @Sera
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OglviyConcept7;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO title="38 laws of growth marketing" />
    </>
  );
};
