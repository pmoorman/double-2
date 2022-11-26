import React from "react";
import { Col, Row } from "react-bootstrap";

import { CareersGridList } from "@app/components";

export const SectionOpenRoles = () => {
  return (
    <>
      <Row className="mb-4">
        <Col md={12} lg={12}>
          <h2 className="mb-4">Our open roles</h2>
        </Col>
        <Col lg={4} md={8}>
          <p>
            We are always on the look out for talent to join us. Check out our
            open roles below.
          </p>
        </Col>
      </Row>
      <CareersGridList />
    </>
  );
};
