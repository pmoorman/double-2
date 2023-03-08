import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { OgilvyForm } from "@app/components";

import * as styles from "./index.module.scss";
export interface OgilvyHeaderProps {
  formId: string;
}

export const OgilvyHeader: FC<OgilvyHeaderProps> = ({ formId }) => {
  return (
    <div>
      <Container>
        <div className={styles.heading}>
          <h1>
            38 laws to <div>avoid startup</div>
            <div>disaster</div>
          </h1>
        </div>
      </Container>
      <div className="d-lg-flex">
        <div className={styles.blueSection}>
          <Container className="d-block d-lg-none">
            <div>
              <h1 className="mb-6 mt-4 mt-lg-0 mb-lg-5">
                38 laws to avoid startup disaster
              </h1>
            </div>
          </Container>
          <div className={styles.lines}></div>
          <div></div>
        </div>
        <div className={styles.greySection}>
          <Row className="px-3 px-md-0">
            <h2>Download your free copy</h2>
            <Col md={6}>
              <OgilvyForm
                formId={formId}
                buttonProps={{
                  variant: "secondary",
                }}
                recaptchaProps={{
                  theme: "light",
                  className: "mt-5",
                }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
