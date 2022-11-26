import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Link, TwoColumnSection } from "@app/components";

import { Statistics } from "../statistics";
import { CaseStudySectionProps } from "..";

import * as styles from "./index.module.scss";

export const CaseStudy2: FC<CaseStudySectionProps> = ({ item, isHomepage }) => {
  const { section } = item;
  const isMdDevice = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className="pt-lg-9 pt-5 pt-md-6 mb-5">
      <Container className="position-relative">
        <Row className="align-items-lg-end position-relative">
          <Col
            lg={{ span: 6, order: "first" }}
            md={{ span: 6, order: "first" }}
            sm={{ span: 12, order: "first" }}
            xs={{ span: 12, order: "first" }}
            className="mt-6 mt-lg-0"
          >
            <div className={styles.tiktokImage}>
              <GatsbyImage image={section.image} alt={item.title} />
            </div>
          </Col>
          <Col lg={6} md={6} className="mt-5 mt-lg-0">
            <GatsbyImage
              image={item.logo}
              alt={item.title}
              className={styles.greyLogo}
            />
            {!isHomepage && item.categories && (
              <small className="mb-2">{item.categories.join(" | ")}</small>
            )}
            <h2>{item.title}</h2>
            <h3>{item.subtitle}</h3>
            {isHomepage && <p>{item.excerpt}</p>}
            {!isMdDevice && item.stats && <Statistics stats={item.stats} />}
            <Button
              as={Link}
              to={item.slug}
              variant="secondary"
              className="mb-lg-0 mb-5"
            >
              Full case study
            </Button>
          </Col>
        </Row>
        <div className="position-relative">
          {isMdDevice && item.stats && <Statistics stats={item.stats} />}
        </div>
      </Container>

      {section.body && (
        <Container>
          <MDXRenderer images={item.embeddedImages}>{section.body}</MDXRenderer>
        </Container>
      )}
    </div>
  );
};
