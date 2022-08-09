import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";

export interface TwoColumnSectionProps {
  title: string;
  children: any;
}

export const TwoColumnSection: FC<TwoColumnSectionProps> = ({
  title,
  children,
}) => {
  return (
    <div className="mt-lg-9 mb-lg-7">
      <Row>
        <Col lg="5">
          <h3 className="mt-3 mt-lg-0">{title}</h3>
        </Col>
        <Col ld="7">{children}</Col>
      </Row>
    </div>
  );
};
