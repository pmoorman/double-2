import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SEO, OgilvyForm } from "@app/components";

import * as styles from "./index.module.scss";

const formId = "4880150";

const OglviyConcept2 = () => {
  return (
    <>
      <SEO title="38 laws of growth" />
      <div>
        <Container>
          <div className={styles.heading}>
            <h1>
              Master the 38 <div>immutable </div>
              <div> laws of growth</div>
            </h1>
            <p className="mt-5">
              As a growth agency, we have worked with some of the
              fastest-growing tech companies like TikTok, Alpian, Glowforge and
              more.
            </p>
            <p className="mb-5 mb-lg-0">
              We collected the 38 most important lessons that we’ve learned
              along the way.
            </p>
          </div>
        </Container>
        <div className="d-lg-flex">
          <div className={styles.blueSection}>
            <Container className="d-block d-lg-none">
              <div>
                <h1 className="mb-6 mt-4 mt-lg-0 mb-lg-5">
                  Master the 38 immutable laws of growth
                </h1>
                <p>
                  As a growth agency, we have worked with some of the
                  fastest-growing tech companies like TikTok, Alpian, Glowforge
                  and more.
                </p>
                <p className="mb-5 mb-lg-0">
                  We collected the 38 most important lessons that we’ve learned
                  along the way.
                </p>
              </div>
            </Container>
            <div className={styles.lines}></div>
            <div></div>
          </div>
          <div className={styles.greySection}>
            <Row className="px-3 px-md-0">
              <h2>Download your free copy</h2>
              <Col md={6}>
                <OgilvyForm
                  formId={formId}
                  buttonProps={{
                    variant: "secondary",
                  }}
                  recaptchaProps={{
                    theme: "light",
                    className: "mt-5",
                  }}
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default OglviyConcept2;
