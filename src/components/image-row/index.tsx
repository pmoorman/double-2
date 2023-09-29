import React, { FC, ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

import * as styles from "./index.module.scss";

export interface ImageRowProps extends React.HTMLAttributes<HTMLElement> {
  image: ReactNode;
  imageOrder?: "last" | "first";
  alignItemsCenter?: boolean;
}

export const ImageRow: FC<ImageRowProps> = ({
  children,
  image,
  imageOrder = "last",
  alignItemsCenter = true,
  ...rest
}) => {
  return (
    <Row {...rest}>
      <Col
        sm={{ span: 12, order: imageOrder }}
        md={{ span: 12, order: imageOrder }}
        xs={{ span: 12, order: imageOrder }}
        lg={6}
        style={{ display: "flex" }}
        className=""
      >
        {image}
      </Col>
      <Col md={12} lg={6} style={{ display: "flex", alignItems: "center" }}>
        <div className={styles.sectionChild}>
            {children}
        </div>
      </Col>
    </Row>
  );
};
