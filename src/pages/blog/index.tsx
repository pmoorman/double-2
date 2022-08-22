import { SEO } from "@app/components";
import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BlogPage = () => {
  return (
    <>
      <SEO title="Blog" />
      <Container>
        <Row>
          <Col>
            <h1>BlogPage</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogPage;
