import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Col, Container, Row } from "react-bootstrap";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { CaseStudySectionProps } from "..";

export const CaseStudy5: FC<CaseStudySectionProps> = ({ item }) => {
  return (
    <div
      className="caseStudyBgMobile"
      style={{
        backgroundImage: `url(${item.image_url})`,
      }}
    >
      <Container className="position-relative">
        <div
          className="bg_image"
          style={{
            backgroundImage: `url(${item.image_url})`,
          }}
        ></div>
        <div className="position-relative p-0 p-md-3">
          <Row className="pt-lg-5 pb-lg-9 py-0 pt-3 pb-6">
            <Col lg={{ span: 10, offset: 1 }}>
              <Row>
                <Col lg={8} md={8}>
                  <GatsbyImage image={item.logo} alt={item.title} />
                  <small className="mb-2">{item.categories.join(" | ")}</small>
                  <h2 className="mb-2">{item.title}</h2>
                  <h3 className="mb-3">{item.subtitle}</h3>
                  <p>{item.hero_body}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
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
