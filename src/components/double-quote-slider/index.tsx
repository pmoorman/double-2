import React from "react";
import { Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";

import * as styles from "./index.module.scss";

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
                  <blockquote className="blockquote">
                    <div className="quoteLine"></div>
                    <p>“I’m really proud of what we’ve created at Double.’</p>
                    <footer>
                      <div>Caspar Lusink</div>
                      <div>Agency Director</div>
                      <div className="d-flex align-items-center">
                        <i className={styles.mapIcon}></i>Amsterdam
                      </div>
                    </footer>
                  </blockquote>
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
                  <blockquote className="blockquote">
                    <div className={styles.quoteLine}></div>
                    <p>“I’m really proud of what we’ve created at Double.’</p>
                    <footer>
                      <div>Caspar Lusink</div>
                      <div>Agency Director</div>
                      <div className="d-flex align-items-center">
                        <i className={styles.mapIcon}></i>Amsterdam
                      </div>
                    </footer>
                  </blockquote>
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
