import { CareersGridList } from "@app/components";
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";

const CareersPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>CareersPage</h1>
        </Col>
      </Row>

      <CareersGridList />
    </Container>
  );
};

export default CareersPage;
