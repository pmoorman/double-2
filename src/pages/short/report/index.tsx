import React from "react";
import { navigate } from "gatsby";
import { Col, Container } from "react-bootstrap";
import { Widget } from "@typeform/embed-react";

import { SEO, QuizHeader, QuizLogos } from "@app/components";

import * as styles from "./index.module.scss";

const GrowthRoadMap = () => {
  return (
    <>
      <SEO title="Growth Report" />

      <QuizHeader />

      <div className={styles.footer} id="audit">
        <Container>
          <Col
            xl={{ span: 8, offset: 2 }}
            lg={{ span: 10, offset: 1 }}
            md="12"
            className="text-center"
          >
            <h2 className="mb-lg-5 mb-4">Funnel Report</h2>
            <h3 className="mb-4">
              Answer a few questions about your startup - we’ll create a
              personalised report that’ll show you exactly how to unlock growth
            </h3>
            <Widget
              id="tFQjou00"
              style={{ width: "100%", height: "600px" }}
              hideFooter
              hideHeaders
              onSubmit={() => {
                navigate("/short/report/thankyou");
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
