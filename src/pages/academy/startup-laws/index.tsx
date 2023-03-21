import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SEO, OgilvyInlineForm, OgilvyLearnForm } from "@app/components";

import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";

const formId = "901711681";

const OglviyConcept8 = () => {
  return (
    <>
      <SEO title="38 laws to avoid startup disaster" />
      <div className={styles.pageHero}>
        <Container>
          <Row className="align-center">
            <Col xs={{ span: 12, order: 0 }} md={{ span: 6, order: 1 }}>
              <h1 className="mb-lg-6 mb-5 mt-4">
                38 laws to avoid startup disaster
              </h1>
              <div className="mb-5">
                An expert guide to make your startup grow faster.
              </div>
            </Col>
            <Col
              lg={{ span: 5, order: 2 }}
              md={{ span: 6, order: 2 }}
              className="d-flex justify-content-end align-items-baseline"
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
            </Col>
          </Row>
        </Container>
      </div>
      <div className="my-5 my-lg-6">
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div className="text-center subtitle">
                As a growth agency we have worked with some of the
                fastest-growing tech companies and helped them do better
                marketing, build systems and drive explosive user growth.
              </div>
            </Col>
          </Row>
          <div className={styles.logos}>
            <StaticImage
              src="./lely.png"
              alt="lely logo"
              width={91}
              objectFit="cover"
            />
            <StaticImage
              src="./klooker.png"
              alt="klooker logo"
              width={88}
              objectFit="contain"
            />
            <StaticImage
              src="./glowforge.png"
              alt="glowforge logo"
              width={114}
              objectFit="contain"
            />
            <StaticImage
              src="./alpian.png"
              alt="alpian logo"
              width={91}
              objectFit="contain"
            />
            <StaticImage
              src="./tiktok.png"
              alt="tiktok logo"
              width={73}
              objectFit="contain"
            />
            <StaticImage
              src="./diesel.png"
              alt="diesel logo"
              width={89}
              objectFit="contain"
            />
            <StaticImage
              src="./sency.png"
              alt="SENCY logo"
              width={88}
              objectFit="contain"
            />
            <StaticImage
              src="./sendcloud.png"
              alt="Sendcloud logo"
              width={94}
              objectFit="contain"
            />
            <StaticImage
              src="./peg.png"
              alt="Peg logo"
              width={88}
              objectFit="contain"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default OglviyConcept8;
