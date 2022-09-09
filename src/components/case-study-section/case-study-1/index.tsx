import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Col, Container, Row, Button } from "react-bootstrap";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Link, TwoColumnSection } from "@app/components";

import { CaseStudySectionProps } from "..";
import * as styles from "./index.module.scss";

export const CaseStudy1: FC<CaseStudySectionProps> = ({ item }) => {
  const { section } = item;

  return (
    <>
      <div
        className="caseStudyBgMobile mt-lg-7 mt-3 mb-lg-8 mb-6"
        style={{
          backgroundImage: `url(${section.image_url})`,
        }}
      >
        <Container className="position-relative">
          <div
            className="bg_image"
            style={{
              backgroundImage: `url(${section.image_url})`,
            }}
          ></div>
          <div className="text-white position-relative p-0 p-md-3">
            <Row className="py-lg-6 py-0 mb-9 mb-lg-0 mb-md-0">
              <Col lg={{ span: 10, offset: 1 }}>
                <Row>
                  <Col lg={6} md={6} className="mt-0 mb-lg-0 mb-md-5 mb-8">
                    <GatsbyImage image={item.logo} alt={item.title} />
                    {item.categories && (
                      <small className="mb-2">
                        {item.categories.join(" | ")}
                      </small>
                    )}
                    <h2 className="mb-2">{item.title}</h2>
                    <h3 className="mb-3">{item.subtitle}</h3>
                    <p>{item.excerpt}</p>
                    {/* <Button
                      as={Link}
                      to={item.slug}
                      variant="light"
                      className="mb-lg-0 mb-6 mb-md-4"
                    >
                      Full case study
                    </Button> */}
                  </Col>
                  <Col lg={6} md={6} className="mt-9  flex relative">
                    <div className={styles.rombik}>
                      <div className={styles.parent}>
                        <svg viewBox="0 0 300 300">
                          <g
                            transform="translate(0,300) scale(0.1,-0.1)"
                            fill="#387CD3"
                          >
                            <path d="M745 2250 l-750 -750 753 -753 752 -752 752 752 753 753 -750 750 c-412 412 -752 750 -755 750 -3 0 -343 -338 -755 -750z" />
                          </g>
                        </svg>
                      </div>
                      {item.stats && (
                        <div className={styles.numberStat}>
                          {item.stats.map((s) => (
                            <div className="mb-5" key={s.title}>
                              <div>{s.value}</div>
                              <span>{s.title}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
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
      <Container className="pt-xl-5 pt-6 pt-lg-0 mb-lg-0 mb-5">
        <TwoColumnSection title="Situation">{item.situation}</TwoColumnSection>
        <TwoColumnSection title="Strategy">{item.strategy}</TwoColumnSection>
      </Container>
    </>
  );
};
