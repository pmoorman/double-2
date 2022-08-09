import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";

export interface TwoColumnSectionWithImageProps {
  title: string;
  children: any;
  image: any;
}

export const TwoColumnSectionWithImage: FC<TwoColumnSectionWithImageProps> = ({
  title,
  children,
  image,
}) => {
  console.log({ image });
  return (
    <div className="mt-lg-8 mb-lg-6">
      <Row>
        <Col
          lg={{ span: 5, order: 0 }}
          md={{ span: 12 }}
          sm={{ span: 12, order: 2 }}
          xs={{ span: 12, order: 2 }}
        >
          <h3>{title}</h3>
          {children}
        </Col>

        <Col lg="7" md="12">
          {image}
        </Col>
      </Row>
    </div>
  );
};
