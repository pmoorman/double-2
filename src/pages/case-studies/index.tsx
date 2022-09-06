import * as React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import {
  Link,
  CaseStudySection,
  FeaturedCaseStudies,
  SEO,
} from "@app/components";
import { useCaseStudies } from "@app/hooks";

import * as styles from "./index.module.scss";
import {
  filterCaseStudiesByCategory,
  getCaseStudyCategories,
} from "@app/helpers";

const CaseStudiesPage = () => {
  const caseStudies = useCaseStudies();
  const categories = getCaseStudyCategories(caseStudies);
  const [category, setCategory] = React.useState("");
  const filteredCaseStudies = filterCaseStudiesByCategory(
    caseStudies,
    category
  );

  return (
    <>
      <SEO title="Case Studies" />
      <div>
        <Container>
          <div className="pt-lg-7 pb-lg-8 py-4 position-relative">
            <Row>
              <Col lg="8">
                <h1>All of these brands were once where you are now</h1>
                <div className="subtitle mb-5 mt-4">
                  All of these brands were once where you are now
                </div>
                <Button
                  as={Link}
                  to="/contact"
                  variant="outline-secondary"
                  className="mb-lg-0 mb-4"
                >
                  How can we help you?
                </Button>
              </Col>
              <div className={styles.heroBg}></div>
              <div className="d-lg-none d-flex justify-content-center">
                <StaticImage src="./hero_bg_mobile.svg" alt="Brands" />
              </div>
            </Row>
          </div>

          {/* <div className="mb-lg-8">
            <div className={styles.blueBg}>
              <h3>Featured case studies</h3>
            </div>
            <div className={styles.cardSection}>
              <FeaturedCaseStudies />
            </div>
          </div> */}
        </Container>

        <div className={styles.filtersSection}>
          <Container>
            <h2>Explore our case studies</h2>

            {/* Filters */}
            <div className={styles.filters}>
              <div className={styles.title}>
                <small>Filter by:</small>
              </div>
              <div
                className={cn({ [styles.active]: category === "" })}
                onClick={() => setCategory("")}
              >
                <small>All</small>
              </div>
              {categories.map((c) => (
                <div
                  key={c}
                  className={cn({ [styles.active]: category === c })}
                  onClick={() => setCategory(c)}
                >
                  <small>{c}</small>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {filteredCaseStudies.map((item) => (
          <CaseStudySection
            isIndexPage={true}
            type={item.section.type}
            item={item}
            key={item.slug}
          />
        ))}
      </div>
    </>
  );
};

export default CaseStudiesPage;
