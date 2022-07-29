import React, { FC, ReactNode } from "react";
import { Col, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./index.module.scss";

export const ImageCard = () => {
  return (
    <Row className={styles.cards}>
      <Col lg="3" md="6" sm="6" xs="6">
        <StaticImage
          className="mb-3"
          src="./card_1.jpeg"
          alt="Crossing the Atlantic"
        />
        <small>Performance</small>
        <h3 className="my-2">Crossing the Atlantic</h3>
        <p className="subtitle">3D Printing gurus</p>
      </Col>
      <Col lg="3" md="6" sm="6" xs="6">
        <StaticImage
          className="mb-3"
          src="./card_2.jpg"
          alt="growth to the bank"
        />
        <small>Strategy | Performance</small>
        <h3 className="my-2">Taking growth to the bank</h3>
        <p className="subtitle">Wealth beyond money</p>
      </Col>
      <Col lg="3" md="6" sm="6" xs="6">
        <StaticImage className="mb-3" src="./card_3.jpeg" alt="agriculture" />
        <small>Strategy</small>
        <h3 className="my-2">Futuristic farming</h3>
        <p className="subtitle">Robotic agriculture</p>
      </Col>
      <Col lg="3" md="6" sm="6" xs="6">
        <StaticImage className="mb-3" src="./card_4.jpg" alt="partnerships" />
        <small>Infrastructure</small>
        <h3 className="my-2">Turbo charged partnerships</h3>
        <p className="subtitle">Social media giants</p>
      </Col>
    </Row>
  );
};
