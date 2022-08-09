import React, { FC } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

import { Link, Stats } from "@app/components";

import { CaseStudySectionProps } from "..";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const CaseStudy2: FC<CaseStudySectionProps> = ({ item }) => {
  const isMdDevice = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div>
      <Container>
        <Row className="align-items-lg-end pt-lg-9 pt-9 pt-md-6 ">
          <Col
            lg={{ span: 6, order: "first" }}
            md={{ span: 6, order: "first" }}
            sm={{ span: 12, order: "last" }}
            xs={{ span: 12, order: "last" }}
          >
            <div className="tiktokImage">
              <GatsbyImage image={item.image} alt={item.title} />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <GatsbyImage image={item.logo} alt={item.title} />
            <small className="my-2">{item.categories.join(" | ")}</small>
            <h2>{item.title}</h2>
            <h3>{item.subtitle}</h3>
            <p>{item.hero_body}</p>
            {!isMdDevice && <Stats></Stats>}
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
        {isMdDevice && <Stats></Stats>}
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
