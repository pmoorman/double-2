import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { OgilvyForm } from "@app/components";

import * as styles from "./index.module.scss";
export interface OgilvyHeaderProps {
  dripId: string;
}

export const OgilvyHeader: FC<OgilvyHeaderProps> = ({ dripId }) => {
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
        <div className={styles.greySection}>
          <Row className="px-3 px-md-0">
            <Col md={6}>
              <OgilvyForm
                dripId={dripId}
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
