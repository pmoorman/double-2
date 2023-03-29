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

const formId = "699186764";

const OglviyConcept8 = () => {
  return (
    <>
      <div className={styles.pageHero}>
        <Container>
          <Row className="align-center">
            <Col xs={{ span: 12, order: 0 }} md={{ span: 6, order: 1 }}>
              <h1 className="mb-3">38 laws to avoid startup disaster</h1>
              <div className="mb-5 d-none d-md-block d-lg-block">
                What you’ll find inside:
              </div>
              <div className="d-none d-lg-block d-md-block">
                <div className="d-flex align-items-center mb-3">
                  <div className={styles.icon}></div>
                  <div>
                    How to identify your most suited acquisition channel - Law
                    #3
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className={styles.icon}></div>
                  <div>Front-load value: what & why - Law #11</div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className={styles.icon}></div>
                  <div>AARRR model alternative - Law #30</div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className={styles.icon}></div>
                  <div>How to optimise for tempo - Law #36</div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className={styles.icon}></div>
                  <div>And a whole lot more!</div>
                </div>
              </div>
            </Col>
            <Col
              lg={{ span: 5, order: 2 }}
              md={{ span: 6, order: 2 }}
              className="d-flex justify-content-end align-items-baseline flex-column flex-lg-row"
            >
              <div className={styles.rightSection}>
                <h3>Enter your email and get the guide for free:</h3>
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
              </div>

              <div className="d-block d-lg-none d-md-none mt-4">
                <div className="d-flex justify-content-center">
                  <div className={styles.arrowsDown}></div>
                </div>
                <h3>What you’ll find inside: </h3>
                <div className="d-flex align-items-center mb-3">
                  <div className={styles.icon}></div>
                  <div>
                    How to identify your most suited acquisition channel - Law
                    #3
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className={styles.icon}></div>
                  <div>Front-load value: what & why - Law #11</div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className={styles.icon}></div>
                  <div>AARRR model alternative - Law #30</div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className={styles.icon}></div>
                  <div>How to optimise for tempo - Law #36</div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className={styles.icon}></div>
                  <div>And a whole lot more!</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OglviyConcept8;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO title="38 laws to avoid startup disaster" />
    </>
  );
};
