import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Col, Container, Row, Button } from "react-bootstrap";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Link } from "@app/components";

import { CaseStudySectionProps } from "..";
import * as styles from "./index.module.scss";

export const CaseStudy3: FC<CaseStudySectionProps> = ({ item }) => {
  return (
    <div>
      <Container>
        <div className={styles.line}></div>
        <div className="position-relative">
          <div className={styles.polygonRightIcon}></div>
        </div>
      </Container>
      <div className="position-relative">
        <div
          className={`caseStudyBgMobile + ${styles.mobileBackground}`}
          style={{
            backgroundImage: `url(${item.image_url})`,
          }}
        ></div>
        <Container className="mt-lg-6 mt-0 position-relative">
          <div
            className="bg_image"
            style={{
              backgroundImage: `url(${item.image_url})`,
            }}
          ></div>
          <Row className="pb-lg-8 pt-lg-6 pt-2 pb-6">
            <div className={styles.rightLine}></div>
            <div
              className={`text-white position-relative + ${styles.growforgeRight}`}
            >
              <Col lg={{ span: 10, offset: 1 }} md={12}>
                <Row>
                  <Col lg={6}>
                    <GatsbyImage
                      image={item.logo}
                      alt={item.title}
                      className={styles.growforge_logo}
                    />
                    <small className="mb-2 mt-lg-4 mt-2">
                      {item.categories.join(" | ")}
                    </small>
                    <h2 className="mb-2">{item.title}</h2>
                    <h3 className="mb-3">{item.subtitle}</h3>
                    <p>{item.hero_body}</p>
                    <Button as={Link} to="/case-studies" variant="light">
                      Full case study
                    </Button>
                  </Col>
                </Row>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
      {item.quote && (
        <Container>
          <Row>
            <Col lg={{ span: 6, offset: 6 }} md={12}>
              <blockquote className="blockquote">
                <div className={styles.quoteLine}></div>
                <p>{item.quote.content}</p>
                <footer>
                  <div>{item.quote.name}</div>
                  <div>{item.quote.title}</div>
                </footer>
              </blockquote>
            </Col>
          </Row>
        </Container>
      )}
      {item.section_body && (
        <Container>
          <MDXRenderer images={item.embeddedImages}>
            {item.section_body}
          </MDXRenderer>
        </Container>
      )}
    </div>
  );
};
