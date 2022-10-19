import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./index.module.scss";

export const QuizLogos = () => {
  return (
    <>
      <div className={styles.logos}>
        <Container>
          <Row>
            <Col lg={{ span: 10, offset: 1 }} className="text-center">
              <h3 className="mb-5">Companies we’ve helped explode</h3>
              <div className={styles.logosImage}>
                <StaticImage src="./tiktok.png" alt="Tik Tok" />
                <StaticImage src="./glowforge.svg" alt="glowforge" />
                <StaticImage src="./alpian.png" alt="alpian" />
                <StaticImage src="./lely.svg" alt="lely" />
                <StaticImage src="./sendcloud.svg" alt="sendcloud" />
                <StaticImage src="./insecto.svg" alt="insecto" />
                <StaticImage src="./peg.svg" alt="peg" />
                <StaticImage src="./diesel.svg" alt="diesel" />
                <StaticImage src="./babb.svg" alt="babb" />
                <StaticImage src="./klooker.svg" alt="klooker" />
                <StaticImage src="./sigrow.svg" alt="sigrow" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
