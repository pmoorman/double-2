import React, { FC, ReactNode } from "react";
import { Col, Row } from "react-bootstrap";

import * as styles from "./index.module.scss";

export interface BlockQuoteProps {
  name: string | ReactNode;
  title?: string | ReactNode;
  subtitle?: string | ReactNode;
  location?: string | ReactNode;
  image?: ReactNode;
  quoteStyle?: React.CSSProperties;
  quoteLineStyle?: React.CSSProperties;
}

export const BlockQuote: FC<BlockQuoteProps> = ({
  children,
  name,
  title,
  subtitle,
  location,
  image,
  quoteStyle,
  quoteLineStyle,
}) => {
  const hasFooter = !!(name || title || location);

  const renderQuote = () => (
    <div className={styles.blockquoteInner}>
      <div style={quoteLineStyle} className={styles.quoteLine}></div>
      <p style={quoteStyle}>“{children}”</p>
      {hasFooter && (
        <footer>
          <div>{name}</div>
          {title && <div>{title}</div>}
          {subtitle && <div>{subtitle}</div>}
          {location && (
            <div className="d-flex align-items-center">
              <i className={styles.mapIcon}></i>
              {location}
            </div>
          )}
        </footer>
      )}
    </div>
  );

  return (
    <blockquote className={styles.blockquote}>
      <Row className="justify-content-between align-items-center">
        <Col md={8}>{renderQuote()}</Col>
        {image && <Col md={3}>{image}</Col>}
      </Row>
    </blockquote>
  );
};
