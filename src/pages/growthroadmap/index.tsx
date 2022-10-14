import React from "react";
import { navigate } from "gatsby";
import { Col, Container } from "react-bootstrap";
import { Widget } from "@typeform/embed-react";

import { SEO, QuizHeader } from "@app/components";

import * as styles from "./index.module.scss";

const GrowthRoadMap = () => {
  return (
    <>
      <SEO title="Personalised growth roadmap" />

      <QuizHeader></QuizHeader>

      <div id="audit"></div>

      <div className={styles.footer}>
        <Container>
          <Col
            xl={{ span: 8, offset: 2 }}
            lg={{ span: 10, offset: 1 }}
            md="12"
            className="text-center"
          >
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
    </>
  );
};

export default GrowthRoadMap;
