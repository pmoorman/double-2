import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Link, TwoColumnSection } from "@app/components";

import { Statistics } from "../statistics";
import { CaseStudySectionProps } from "..";

import * as styles from "./index.module.scss";

export const CaseStudy2: FC<CaseStudySectionProps> = ({ item }) => {
  const { section } = item;
  const isMdDevice = useMediaQuery({ query: "(min-width: 768px)" });
  const hideLine = section.hide_arrow;

  return (
    <div className="pt-lg-9 pt-9 pt-md-6 mb-7">
      <Container className="position-relative">
        <Row className="align-items-lg-end position-relative">
          {/* LIne 1 */}
          {!hideLine && <div className={styles.line}></div>}
          {!hideLine && <div className={styles.lineRight}></div>}

          <Col
            lg={{ span: 6, order: "first" }}
            md={{ span: 6, order: "first" }}
            sm={{ span: 12, order: "last" }}
            xs={{ span: 12, order: "last" }}
          >
            <div className={styles.tiktokImage}>
              <GatsbyImage image={section.image} alt={item.title} />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <GatsbyImage image={item.logo} alt={item.title} />
            <small className="my-2">{item.categories.join(" | ")}</small>
            <h2>{item.title}</h2>
            <h3>{item.subtitle}</h3>
            <p>{item.excerpt}</p>
            {!isMdDevice && item.stats && <Statistics stats={item.stats} />}
            {/* <Button
              as={Link}
              to={item.slug}
              variant="secondary"
              className="mb-lg-0 mb-5"
            >
              Full case study
            </Button> */}
          </Col>
        </Row>
        <div className="position-relative">
          {/* Line 2 */}
          {!hideLine && <div className={styles.lineRight2}></div>}

          {isMdDevice && item.stats && <Statistics stats={item.stats} />}
          {/* Line 3  */}
          {!hideLine && <div className={styles.bgArrow}></div>}
        </div>
        <TwoColumnSection title="Situation">{item.situation}</TwoColumnSection>
        <TwoColumnSection title="Strategy">{item.strategy}</TwoColumnSection>
      </Container>
      <div className="position-relative"></div>
      {section.body && (
        <Container>
          <MDXRenderer images={item.embeddedImages}>{section.body}</MDXRenderer>
        </Container>
      )}
    </div>
  );
};
