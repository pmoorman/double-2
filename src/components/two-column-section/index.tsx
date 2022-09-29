import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";

export interface TwoColumnSectionProps {
  title: string;
  leftWidth?: number;
  children: any;
}

export const TwoColumnSection: FC<TwoColumnSectionProps> = ({
  title,
  leftWidth = 5,
  children,
}) => {
  const rightWidth = 12 - leftWidth;

  return (
    <div className="mt-lg-8 mb-lg-7">
      <Row>
        <Col lg={leftWidth}>
          <h3 className="mt-3 mt-lg-0">{title}</h3>
        </Col>
        <Col ld={rightWidth}>{children}</Col>
      </Row>
    </div>
  );
};
