import React, { FC } from "react";
import { Col, Row, Container } from "react-bootstrap";

import * as styles from "./index.module.scss";

export interface HeadingRowProps extends React.HTMLAttributes<HTMLElement> {}

export const HeadingRow: FC<HeadingRowProps> = ({ children, ...rest }) => {
  return (
    <div>
      <div className={styles.topLine}></div>
      <Container>
        <Row className="mt-lg-8 mb-3 mt-5">
          <Col
            lg={{ span: 6, order: 0 }}
            sm={{ span: 12, order: 2 }}
            xs={{ span: 12, order: 2 }}
          >
            {children}
          </Col>
          <Col md="6">
            <div className={styles.arrowImg}>
              <svg
                width="704"
                height="96"
                viewBox="0 0 704 97"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M703.5 1.00006L670.25 1.00006L670.25 35.8129L637.991 35.8129L637.991 53.0989L8.61673 53.0989L8.61673 94.9999M8.61673 94.9999L15.7333 87.5488M8.61673 94.9999L1.5 87.5488"
                  stroke="#387CD3"
                  stroke-width="2"
                />
              </svg>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
