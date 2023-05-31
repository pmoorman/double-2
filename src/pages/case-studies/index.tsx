import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import {
  Link,
  CaseStudySection,
  FeaturedCaseStudies,
  SEO,
  LogoSlider,
  AppHead,
} from "@app/components";
import { useCaseStudies } from "@app/hooks";

import * as styles from "./index.module.scss";
import {
  filterCaseStudiesByCategory,
  getCaseStudyCategories,
} from "@app/helpers";

const CaseStudiesPage = () => {
  const caseStudies = useCaseStudies();
  const [category, setCategory] = React.useState("");
  const filteredCaseStudies = filterCaseStudiesByCategory(
    caseStudies,
    category
  );

  return (
    <>
      <div>
        <Container>
          <div className="pt-lg-7 pb-lg-5 py-4 position-relative">
            <Row className="justify-content-center">
              <Col md="7">
                <h1 className="d-headline text-center py-6">
                  Clients you want to <span>emulate</span>
                </h1>
              </Col>
            </Row>
          </div>
        </Container>
        <div>
          <LogoSlider />
        </div>

        {/* <Container>
          <div className="mb-lg-8 mt-6">
            <div className={styles.blueBg}>
              <h3>Featured case studies</h3>
            </div>
            <div className={styles.cardSection}>
              <FeaturedCaseStudies />
            </div>
          </div>
        </Container> */}

        <div>
          <Container>
            {/* <h2>Explore our case studies</h2> */}

            {/* Filters */}
            {/* <div className={styles.filters}>
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
            </div> */}
          </Container>
        </div>

        {filteredCaseStudies.map((item) => (
          <CaseStudySection
            isIndexPage={true}
            type={5}
            item={item}
            key={item.slug}
          />
        ))}
      </div>
    </>
  );
};

export default CaseStudiesPage;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO
        title="Growth Marketing Case Studies | Explore Strategies & Tactics"
        keywords="Growth Marketing Case Studies, Growth Marketing Strategies, Growth Marketing Tactics"
        description="Looking to drive growth in your business? Our case studies explore a variety of growth marketing and customer acquisition strategies and tactics."
      />
    </>
  );
};
