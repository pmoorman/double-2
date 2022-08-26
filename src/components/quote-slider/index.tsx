import React from "react";
import { Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";

import * as styles from "./index.module.scss";
import { BlockQuote } from "../block-quote";

export const QuoteSlider = () => {
  return (
    <>
      <div className="mt-lg-7 mb-lg-8 my-5">
        <h3>
          What Double Agents have to say? (...and they usually talk a lot)
        </h3>
        <Parallax>
          <div className={styles.quote}>
            <div>
              <Row className="d-flex align-items-center">
                <Col md="8">
                  <div className={styles.blockquote}>
                    <BlockQuote
                      name="Caspar Lusink"
                      title="Agency Director"
                      location="Amsterdam"
                    >
                      I’m really proud of what we’ve created at Double.
                    </BlockQuote>
                  </div>
                </Col>
                <Col md="4">
                  <StaticImage
                    src="./quote-1.jpeg"
                    alt="Member"
                    className="mt-4"
                  />
                </Col>
              </Row>
            </div>
            <div>
              <Row className="d-flex align-items-center">
                <Col md="8">
                  <div className={styles.blockquote}>
                    <BlockQuote
                      name="Caspar Lusink"
                      title="Agency Director"
                      location="Amsterdam"
                    >
                      I’m really proud of what we’ve created at Double.
                    </BlockQuote>
                  </div>
                </Col>
                <Col md="4">
                  <StaticImage
                    src="./quote-1.jpeg"
                    alt="Member 4"
                    className="mt-4"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Parallax>
      </div>
    </>
  );
};
