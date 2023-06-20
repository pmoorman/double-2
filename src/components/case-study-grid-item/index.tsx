import React, { FC, StyleHTMLAttributes } from "react";
import { Col } from "react-bootstrap";

import * as styles from "./index.module.scss";

export type CaseStudyGridItemProps = {
  image: React.ReactNode;
  title: string;
  subtitle: string;
  size: "square" | "high" | "wide";
  className?: string;
};

export const CaseStudyGridItem: FC<CaseStudyGridItemProps> = ({
  image,
  title,
  subtitle,
  size,
  className,
}) => {
  const style: any = {};
  let width = 4;

  if (size === "high") {
    style.height = "537px";
  }

  if (size === "wide") {
    width = 8;
  }

  return (
    <Col md={width} className={className}>
      <div className={styles.item}>
        <div className={styles.image} style={style}>
          {image}
        </div>
        <div className={styles.text}>
          <strong>{title}</strong> — 
          {subtitle}
        </div>
      </div>
    </Col>
  );
};
