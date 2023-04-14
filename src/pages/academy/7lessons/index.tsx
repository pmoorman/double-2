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

const formId = "5019059";

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
                src="./phone_7lessons.png"
                alt="Phone image"
                objectFit="contain"
                width={476}
              />
            </Col>
            <Col md="6" xs="8">
              <h1 className="mb-3">
                7 essential
                <br />
                lessons on how
                <br />
                to grow startups
              </h1>
              <div className="mb-3">Get the free email course</div>
              <div>Leave your details below:</div>
              <OgilvyInlineForm
              formButton="Start learning"
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
            src="./phone_mobile_7lessons.png"
            alt="Phone image"
            objectFit="contain"
            width={120}
            quality={100}
          />
        </div>
      </div>
      <OgilvyLearnForm
        sectionTitle="What you’ll learn"
        block1Title="Lesson #1  — The Wartime CMO"
        block1Body="Who is the Wartime CMO? What growth levers do they pull? Why should you see yourself as one? Wartime CMOs are ruthless, and willing to go down to the tactical level to get every last issue resolved. It’s a spirit of hustle, grit and elbow grease."
        block2Title="Lesson #2  — Systems, not hacks"
        block2Body="Not all growth is created equal. Some growth is temporary, while other growth lasts.  Growth marketing is about unlocking structural, compounding growth. To acquire millions of users, marketing needs to become predictable, systematic, automated and repeatable. "
        formTitle="Unlock all 7 lessons"
        formBody="Uncover all the 7 lessons and their full content. Sign up with your email and we’ll send them over."
        formButton="Start learning"
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
      <SEO title="7 lessons to grow startups" />
    </>
  );
};
