import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Col, Container, Row, Button } from "react-bootstrap";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Link, BlockQuote, TwoColumnSection } from "@app/components";

import { CaseStudySectionProps } from "..";
import * as styles from "./index.module.scss";

export const CaseStudy3: FC<CaseStudySectionProps> = ({ item, isHomepage }) => {
  const { section } = item;

  return (
    <>
      <div className="mb-lg-0 mb-5">
        {isHomepage && (
          <Container>
            <div className={styles.line}></div>
            <div className="position-relative">
              <div className={styles.polygonRightIcon}></div>
            </div>
          </Container>
        )}
        <div className="position-relative">
          <div
            className={`caseStudyBgMobile + ${styles.mobileBackground}`}
            style={{
              backgroundImage: `url(${section.image_url})`,
            }}
          ></div>
          <Container className="mt-lg-6 mt-0 position-relative">
            <div
              className="bg_image"
              style={{
                backgroundImage: `url(${section.image_url})`,
              }}
            ></div>
            <Row className="pb-lg-8 pt-lg-6 pt-2 pb-9">
              {isHomepage && <div className={styles.rightLine}></div>}
              <div
                className={`text-white position-relative + ${styles.growforgeRight}`}
              >
                <Col lg={{ span: 10, offset: 1 }} md={12}>
                  <Row>
                    <Col lg={7}>
                      <GatsbyImage
                        image={item.logo}
                        alt={item.title}
                        className={styles.growforge_logo}
                      />
                      {!isHomepage && (
                        <small className="mb-2 mt-lg-4 mt-2">
                          {item.categories.join(" | ")}
                        </small>
                      )}

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
              </div>
            </Row>
          </Container>
        </div>

        {section.body && (
          <Container>
            <MDXRenderer images={item.embeddedImages}>
              {section.body}
            </MDXRenderer>
          </Container>
        )}
      </div>
    </>
  );
};
