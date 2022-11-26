import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link, TwoColumnSection } from "@app/components";

import { CaseStudySectionProps } from "..";
import { Statistics } from "../statistics";
import * as styles from "./index.module.scss";

export const CaseStudy4: FC<CaseStudySectionProps> = ({ item, isHomepage }) => {
  const { section } = item;

  return (
    <>
      <div className="my-5">
        <div
          className="caseStudyBgMobile"
          style={{
            backgroundImage: `url(${section.image_url})`,
          }}
        >
          <Container className="position-relative">
            <div
              className="bg_image darker_image"
              style={{
                backgroundImage: `url(${section.image_url})`,
              }}
            ></div>
            <div className="text-white position-relative p-0 p-md-3">
              <Row className="pt-lg-6 pb-lg-9 py-0 pt-3 pb-6">
                <Col lg={{ span: 10, offset: 1 }}>
                  <Row>
                    <Col lg={8} md={8}>
                      <GatsbyImage
                        image={item.logo}
                        alt={item.title}
                        className={styles.lely_logo}
                      />
                      {/* <GatsbyImage image={item.logo} alt={item.title} /> */}
                      <small className="mb-2">
                        {item.categories.join(" | ")}
                      </small>
                      <h2 className="mb-2">{item.title}</h2>
                      <h3 className="mb-4">{item.subtitle}</h3>
                      <p>{item.excerpt}</p>
                      <Button
                        as={Link}
                        to={item.slug}
                        variant="light"
                        className="mb-lg-0 mb-6 mb-md-4 mt-4"
                      >
                        Full case study
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        {isHomepage && item.stats && (
          <Container className={styles.statistics}>
            <div className="position-relative">
              <div className={styles.alpianStats}>
                <Statistics stats={item.stats} />
              </div>
              <div className={styles.arrowDown}>
                <div className={styles.arrow}>
                  <i className={styles.arrowDownIcon}></i>
                </div>
                <div className={styles.border}></div>
              </div>
            </div>
          </Container>
        )}
      </div>
    </>
  );
};
