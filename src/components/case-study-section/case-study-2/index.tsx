import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Link } from "@app/components";

import { Statistics } from "../statistics";
import { CaseStudySectionProps } from "..";

import * as styles from "./index.module.scss";

export const CaseStudy2: FC<CaseStudySectionProps> = ({ item, isHomepage }) => {
  const { section } = item;
  const isMdDevice = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <>
      {isHomepage && (
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
              <MDXRenderer images={item.embeddedImages}>
                {section.body}
              </MDXRenderer>
            </Container>
          )}
        </div>
      )}

      {!isHomepage && (
        <div className="mb-5">
          <div className={styles.marginTop}></div>
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
              <Row className="pb-lg-8 pt-lg-6 pt-5 pb-9">
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
                  </Col>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};
