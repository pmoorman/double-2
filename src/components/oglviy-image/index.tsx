import React from "react";
import { Container } from "react-bootstrap";
import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";

export const OgilvyImage = () => {
  return (
    <div className="pt-lg-7 pb-lg-9 py-5">
      <Container className="position-relative">
        <div className={styles.imageIcon}></div>
        <StaticImage src="./laws_38.jpeg" alt="38 laws" className="mx-lg-4" />
      </Container>
    </div>
  );
};
