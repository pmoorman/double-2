import React, { FC } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import * as styles from "./index.module.scss";

import { Link } from "@app/components";

export const OgilvyHeader = () => {
  return (
    <div>
      <Container>
        <div className={styles.heading}>
          <h1>
            Master the 38 <div>immutable</div>
            <div>
              laws of growth <span>Interested?</span>
            </div>
          </h1>
        </div>
      </Container>
      <div className="d-lg-flex">
        <div className={styles.blueSection}>
          <Container className="d-block d-lg-none">
            <div>
              <h1 className="mb-5">
                Master the 38 immutable laws of growth Interested?
              </h1>
            </div>
          </Container>
          <div className={styles.lines}></div>
          <div></div>
        </div>
        <Form className={styles.greySection}>
          <Container>
            <h2>Download your free copy</h2>
            <Row>
              <Col lg="6" md="12" className="mt-5">
                <Form.Label htmlFor="first-name">Name</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter your name"
                  aria-describedby="first-name"
                  name="first_name"
                />
              </Col>
            </Row>
            <Row>
              <Col lg="6" md="12" className="mt-5">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter your last email"
                  aria-describedby="email"
                  name="email"
                />
              </Col>
            </Row>
            <Button as={Link} to="#" variant="secondary" className=" mt-5 mb-4">
              Download PDF
            </Button>
          </Container>
        </Form>
      </div>
    </div>
  );
};
