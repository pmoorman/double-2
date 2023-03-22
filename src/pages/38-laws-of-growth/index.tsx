import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { SEO } from "@app/components";

import lawsOfGrowth from "./38-laws-of-growth.pdf";

import * as styles from "./index.module.scss";

const LawsOfGrowth = () => {
  return (
    <>
      <SEO
        title="38 Laws Of Growth Marketing - Double Agency"
        keywords="Laws Of Growth"
        description="Looking for a growth marketing agency? Contact us today for a free consultation! Let us explore how we can help you grow your business with growth marketing."
      />
      <div className="App">
        <iframe
          src={`${lawsOfGrowth}`}
          title="38 Laws Of Growth Marketing"
          height="100%"
          width="100%"
          className={styles.pdfFile}
        />
      </div>
    </>
  );
};

export default LawsOfGrowth;
