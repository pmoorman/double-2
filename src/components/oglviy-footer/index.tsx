import React, { FC } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { OgilvyForm } from "../oglviy-form";

import * as styles from "./index.module.scss";

export interface OgilvyFooterProps {
  formId: string;
}

export const OgilvyFooter: FC<OgilvyFooterProps> = ({ formId }) => {
  return (
    <div className={styles.footer}>
      <Container>
        <Col
          xl={{ span: 8, offset: 2 }}
          lg={{ span: 10, offset: 1 }}
          md="12"
          className="text-center"
        >
          <h2>Unlock all the 38 laws of growth for free</h2>
          <div className="d-flex justify-content-center">
            <OgilvyForm
              formId={formId}
              buttonProps={{
                variant: "primary",
              }}
              recaptchaProps={{
                theme: "dark",
                className: "d-flex justify-content-center mt-5",
              }}
            />
          </div>
          {/* <Form name="form" method="POST" action={action}>
            <Row>
              <Col lg={{ span: 6, offset: 3 }} md="12" className="mt-5">
                <Form.Label htmlFor="first-name">Name</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter your first name"
                  aria-describedby="first-name"
                  name="first_name"
                />
              </Col>
            </Row>
            <Row>
              <Col lg={{ span: 6, offset: 3 }} md="12" className="mt-5">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  required
                  placeholder="Enter your email"
                  aria-describedby="email"
                  name="email"
                />
              </Col>
            </Row>
            <Button
              type="submit"
              variant="primary"
              className=" mt-5 mb-4 text-white"
            >
              Download PDF
            </Button>
          </Form> */}
        </Col>
      </Container>
    </div>
  );
};
