import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Col, Container, Row, Button } from "react-bootstrap";

import { CaseStudySectionProps } from "..";
import * as styles from "./index.module.scss";

export const CaseStudy5: FC<CaseStudySectionProps> = ({ item }) => {
  const { section } = item;

  return (
    <>
      <div className="my-5">
        <div className="position-relative">
          <div
            className={`caseStudyBgMobile + ${styles.mobileBackground}`}
            style={{
              backgroundImage: `url(${section.image_url})`,
            }}
          ></div>
          <Container className=" position-relative">
            <div
              className="bg_image"
              style={{
                backgroundImage: `url(${section.image_url})`,
              }}
            ></div>
            <Row className="pb-lg-8 pt-lg-6 pt-2 pb-9">
              <div className="text-white position-relative">
                <Col lg={{ span: 10, offset: 1 }} md={12}>
                  <Row>
                    <Col lg={6}>
                      <GatsbyImage
                        image={item.logo}
                        alt={item.title}
                        className={styles.logoImage}
                      />
                      <small className="mb-2 mt-lg-4 mt-2">
                        {item.categories.join(" | ")}
                      </small>
                      <h2 className="mb-2">{item.title}</h2>
                      <h3 className="mb-4">{item.subtitle}</h3>
                      <p>{item.excerpt}</p>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
