import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import {
  Link,
  CaseStudySection,
  FeaturedCaseStudies,
  SEO,
  LogoSlider,
  AppHead,
  CaseStudyGridItem,
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

  console.log({ caseStudies });

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
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <StaticImage src="./hero_2.png" alt="hero" />
            </Col>
            <Col md="6">
              <StaticImage src="./hero_1.png" alt="hero" />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md="4">
              <h2 className="fw-bold mb-0">50+</h2>
              <h3 className="fw-bold">tech companies</h3>
            </Col>
            <Col md="4">
              <h2 className="fw-bold mb-0">13</h2>
              <h3 className="fw-bold">active countries</h3>
            </Col>
            <Col md="4">
              <h2 className="fw-bold mb-0">80,000</h2>
              <h3 className="fw-bold">leads generated</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h2>Meet the players</h2>
              <p className="lead">
                We’ve helped 50+ companies with their growth challenges
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            {filteredCaseStudies.map((c) => {
              console.log(c.grid_item);
              if (!c.grid_item || !c.grid_item?.image) return null;

              return (
                <CaseStudyGridItem
                  key={c.slug}
                  size={c.grid_item.size}
                  title={c.grid_item.title}
                  subtitle={c.grid_item.subtitle}
                  image={
                    <GatsbyImage
                      image={c.grid_item.image}
                      alt={c.grid_item.title}
                    />
                  }
                />
              );
            })}

            <Col md={4} className="d-flex align-items-end">
              <div>
                <div
                  className="p-4 bg-primary text-white d-flex align-items-end"
                  style={{
                    height: "537px",
                    width: "100%",
                    borderRadius: "18px",
                  }}
                >
                  <div>
                    <h3>
                      “Very reliable, reactive and diligent. Strategic growth
                      hackers understanding the craft.”{" "}
                    </h3>
                    <p className="lead">Roman Balzan, CMO at Alpian</p>
                  </div>
                </div>
                <div style={{ height: "50px" }} />
              </div>
            </Col>
          </Row>
        </Container>

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
