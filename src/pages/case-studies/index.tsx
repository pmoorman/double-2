import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import hero from "./hero_bg.svg";

import {
  Link,
  CaseStudySection,
  FeaturedCaseStudies,
  SEO,
  LogoSlider,
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
          <div className="pt-lg-7 pb-lg-5 py-4 position-relative">
            <Row>
              <Col lg="7" md="8">
                <h1>All of these brands were once where you are now.</h1>
              </Col>
              <Col lg="5" md="4">
                <div className="d-flex justify-content-center">
                  <Link to="/">
                    <img src={hero} />
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div>
          <LogoSlider />
        </div>

        <Container>
          <div className="mb-lg-8 mt-6">
            <div className={styles.blueBg}>
              <h3>Featured case studies</h3>
            </div>
            <div className={styles.cardSection}>
              <FeaturedCaseStudies />
            </div>
          </div>
        </Container>

        <div>
          <Container>
            <h2>Explore our case studies</h2>

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
