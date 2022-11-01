import React from "react";
import { navigate } from "gatsby";
import { Col, Container } from "react-bootstrap";
import { Widget } from "@typeform/embed-react";

import { SEO, QuizHeader, QuizLogos } from "@app/components";

import * as styles from "./index.module.scss";

const GrowthRoadMap = () => {
  return (
    <>
      <SEO title="Personalised growth roadmap" />

      <QuizHeader></QuizHeader>

      <div className={styles.footer} id="audit">
        <Container>
          <Col
            xl={{ span: 8, offset: 2 }}
            lg={{ span: 10, offset: 1 }}
            md="12"
            className="text-center"
          >
            <h2 className="mb-lg-5 mb-4">Growth Audit</h2>
            <h3 className="mb-4">
              Answer a few questions about your startup - we’ll create a
              personalised roadmap that’ll show you exactly how to unlock growth
            </h3>
            <Widget
              id="N4Yd5jGd"
              style={{ width: "100%", height: "600px" }}
              hideFooter
              hideHeaders
              onSubmit={() => {
                navigate("/growthroadmap/thankyou");
              }}
            />
          </Col>
        </Container>
      </div>

      <QuizLogos />
    </>
  );
};

export default GrowthRoadMap;
