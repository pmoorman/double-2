import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { StaticImage } from "gatsby-plugin-image";

export const ApplicationProcess = () => {
  return (
    <Container>
      <Row>
        <Col
          md={{ span: 8, offset: 2 }}
          className="d-flex align-items-center flex-column"
        >
          <h2 className="mb-4">Our application process</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <StaticImage
            src="./application_process.svg"
            alt="application process"
            className="mt-4 d-lg-block d-md-block d-none"
          />
          <StaticImage
            src="./application_process_mobile.svg"
            alt="application process"
            className="mt-4 d-block d-lg-none d-md-none"
            layout="fixed"
            width={320}
          />
        </Col>
      </Row>
    </Container>
  );
};
