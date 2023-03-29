import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { AppHead, SEO } from "@app/components";

import pdf from "./The-38-laws-to-avoid-startup-disaster.pdf";

import * as styles from "./index.module.scss";

const LawsOfGrowth = () => {
  return (
    <>
      <div className="App">
        <iframe
          src={`${pdf}`}
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

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO
        title="38 Laws To Avoid Startup Disaster - Double Agency"
        keywords="Laws Of Growth"
        description="Looking for a growth marketing agency? Contact us today for a free consultation! Let us explore how we can help you grow your business with growth marketing."
      />
    </>
  );
};
