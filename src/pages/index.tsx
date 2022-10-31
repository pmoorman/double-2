import * as React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Link,
  ImageRow,
  TeamMember,
  SectionFeaturedArticles,
  CaseStudySection,
  Image,
} from "@app/components";
import { useCaseStudies, useTeam } from "@app/hooks";
import { getHomepageCaseStudies } from "@app/helpers";

import * as styles from "./index-assets/index.module.scss";

const HomePage = () => {
  const team = useTeam();
  const _caseStudies = useCaseStudies();
  const caseStudies = getHomepageCaseStudies(_caseStudies);

  const settings: Settings = {
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    useTransform: false,
    pauseOnHover: false,
    className: styles.teamMember,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.hero}>
        <Container className="pt-lg-6 pt-xl-9 pb-lg-8 pt-4">
          <ImageRow
            imageOrder="last"
            image={
              <Image>
                <StaticImage
                  src="./index-assets/hero_image.png"
                  alt="Growth"
                  className={styles.heroImage}
                />
              </Image>
            }
          >
            <h1 className="mb-lg-3 mb-4">Experts in exponential growth</h1>
            <p>
              Double is a growth marketing agency. We help tech companies do
              better marketing, and drive explosive user growth.
            </p>
            <Button
              as={Link}
              to="/#caseStudies"
              variant="secondary"
              className="mb-lg-0 mb-4"
            >
              Explore our work
            </Button>
          </ImageRow>
        </Container>
      </div>

      <div className="d-none d-lg-block">
        <div className={styles.leftVector}>
          <svg
            width="129"
            height="265"
            viewBox="0 0 129 265"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 263.857H59.8855L58.8855 178.5H128.269V0.886719"
              stroke="#387CD3"
              stroke-width="2"
            />
          </svg>
        </div>
        <Container className="position-relative">
          <div className={styles.vectorLine}></div>
          <div className={styles.rightVector}>
            <svg
              width="273"
              height="258"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <g>
                <path
                  id="svg_1"
                  stroke-width="2"
                  stroke="#387CD3"
                  d="m271.954,256.387l0,-253.387l-253,212.953l0,-128.722m0,0l-17.954,18.269m17.954,-18.269l17.955,18.269"
                />
              </g>
            </svg>
          </div>
        </Container>
      </div>

      <Container className="pt-lg-8 py-4 pb-lg-6">
        <Row>
          <div className={styles.mobileLines}>
            <Col
              lg={{ span: 10, offset: 1 }}
              md={12}
              className={styles.aboutUs}
            >
              <Row>
                <Col lg={{ span: 11, offset: 1 }} md={{ span: 11, offset: 1 }}>
                  <h2 className={styles.headingStyle}>
                    We help the world's most ambitious teams
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col lg={5} md={5}>
                  <h2 className={styles.subHeadingStyle}>
                    build the systems to tell their stories
                  </h2>
                </Col>
                <Col lg={2} md={2} className="d-lg-block d-md-block d-none">
                  <div className={`mt-4 + ${styles.polygonIcon}`}></div>
                </Col>
                <Col lg={5} md={5} className="mt-lg-5 pt-lg-3 mt-3 pt-0">
                  <p>
                    Sustained, compounding growth always comes from an
                    engineered, systematic approach to user acquisition,
                    activation and retention.
                  </p>
                  <p>
                    Building such systems — and crafting the content within it —
                    is what we specialise in.
                  </p>
                  <Button as={Link} to="/services" variant="outline-secondary">
                    Our services
                  </Button>
                </Col>
              </Row>
            </Col>
          </div>
        </Row>
      </Container>

      <div id="caseStudies">
        {caseStudies.map((item) => (
          <CaseStudySection
            isHomepage={true}
            type={item.section.type}
            item={item}
            key={item.slug}
          />
        ))}
      </div>

      {/* <Container>
        <Row className={`mt-lg-7 mt-4 + ${styles.teamSection}`}>
          <Col lg="9">
            <h2 className="mb-2">Our people</h2>
            <p className="text-grey">
              At Double, everyone is a growth marketing expert first, regardless
              of their specialist skills. Meet the people on the ground who will
              be handling all your marketing needs:
            </p>
          </Col>
          <Col lg="3">
            <Button as={Link} to="/about" variant="outline-secondary btn-lg">
              More about us
            </Button>
          </Col>
        </Row>
        <Row className="align-items-center mt-lg-4 mt-5 mb-lg-7 mb-5">
          <Col lg={3} className="d-none d-lg-block d-xl-block">
            <div className={styles.logo}>
              <StaticImage src="./index-assets/stairs.svg" alt="stairs" />
            </div>
          </Col>
          <Col lg="9">
            <Slider {...settings}>
              {team.map((member) => (
                <div key={member.name} className={styles.teamCard}>
                  <TeamMember member={member} inSlider />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default HomePage;
