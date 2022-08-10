import React from "react";
import { Col, Row } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";

import { useCaseStudies } from "@app/hooks";
import { getFeaturedCaseStudies } from "@app/helpers";
import { Link } from "@app/components";

import * as styles from "./index.module.scss";
export const FeaturedCaseStudies = () => {
  const caseStudies = useCaseStudies();
  const featured = getFeaturedCaseStudies(caseStudies);

  return (
    <Row className={styles.cards}>
      {featured.map((caseStudy) => (
        <Col lg="3" md="6" sm="6" xs="6" key={caseStudy.slug}>
          <Link to={caseStudy.slug} className="text-decoration-none">
            <GatsbyImage
              image={caseStudy.featured_thumbnail}
              alt={caseStudy.title}
            />

            <small className="mt-2">{caseStudy.categories.join(" | ")}</small>
            <h3 className="my-2">{caseStudy.title}</h3>
            <p className="subtitle">{caseStudy.subtitle}</p>
          </Link>
        </Col>
      ))}
    </Row>
  );
};
