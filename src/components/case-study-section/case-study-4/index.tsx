import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { TwoColumnSection } from "@app/components";

import { CaseStudySectionProps } from "..";
import { Statistics } from "../statistics";
import * as styles from "./index.module.scss";

export const CaseStudy4: FC<CaseStudySectionProps> = ({ item }) => {
  const { section } = item;

  return (
    <>
      <div className="pt-lg-7 pb-lg-8 py-4">
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
              <Row className="pt-lg-5 pb-lg-9 py-0 pt-3 pb-6">
                <Col lg={{ span: 10, offset: 1 }}>
                  <Row>
                    <Col lg={8} md={8}>
                      {/* <GatsbyImage image={item.logo} alt={item.title} /> */}
                      <small className="mb-2">
                        {item.categories.join(" | ")}
                      </small>
                      <h2 className="mb-2">{item.title}</h2>
                      <h3 className="mb-3">{item.subtitle}</h3>
                      <p>{item.excerpt}</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        {item.stats && (
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

        {section.body && (
          <Container>
            <TwoColumnSection title="Situation">
              {item.situation}
            </TwoColumnSection>
            <TwoColumnSection title="Strategy">
              {item.strategy}
            </TwoColumnSection>
          </Container>
        )}
      </div>
    </>
  );
};
