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
                  src="./index-assets/hero_image.jpeg"
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
              viewBox="0 0 273 258"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M -0.085 256.611 L 271.954 256.387 L 271.954 3 L 18.954 215.953 L 18.954 87.231 M 18.954 87.231 L 1 105.5 M 18.954 87.231 L 36.909 105.5"
                stroke="#387CD3"
                stroke-width="2"
              />
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
            type={item.section.type}
            item={item}
            key={item.slug}
          />
        ))}
      </div>

      <Container>
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
        <div>
          <h2 className="mb-md-6 mb-sm-4">Our views on marketing</h2>
          <Row className="my-5">
            <Col sm="12" md="6">
              <h3>1. Systems drive growth</h3>
            </Col>
            <Col sm="12" md="6">
              <p>
                To acquire millions of users, high-growth companies cannot rely
                on manual processes or short-lived tactics. Marketing needs to
                be predictable, systematic, automated and repeatable. The
                essence of growth marketing is to build systems that drive user
                acquisition, activation and retention at scale.
              </p>
              <p>
                <strong>Acquisition loops</strong> Performance | content
                marketing | product-driven growth
              </p>
              <p>
                <strong>Sales funnels</strong> Copywriting | conversions |
                design | execution
              </p>
              <p>
                <strong>Product marketing</strong> Onboarding | activation |
                retention
              </p>
              <p>
                <strong>Data + infrastructure</strong> Analytics, testing &
                development
              </p>
            </Col>
          </Row>
          <Row className="my-5">
            <Col sm="12" md="6">
              <h3>2. Stories that sell</h3>
            </Col>
            <Col sm="12" md="6">
              <p>
                Having the right systems alone is not enough: you still need to
                get noticed and convince people to buy your product. Without a
                good story, you might as well not exist.
              </p>
              <p>
                The best way to do marketing, is by telling stories that help
                people see their problems and challenges in a different light.
                Copywriting thus is the backbone of all good marketing. Stories
                drive conversions in all sorts of places:
              </p>
              <ul>
                <li>Email copywriting</li>
                <li>Paid advertising</li>
                <li>Content & video materials</li>
                <li>Customer onboarding optimisation</li>
                <li>Sales Data analysis and analytics</li>
              </ul>
            </Col>
          </Row>
          <Row className="my-5">
            <Col sm="12" md="6">
              <h3>3. Speed matters</h3>
            </Col>
            <Col sm="12" md="6">
              <p>
                It’s hard to know beforehand what will work, and what won’t. For
                that reason, it is important to experiment rapidly, and focus on
                speed of execution above almost everything else.
              </p>
              <p>
                Once you’ve found things that are successful, find ways to
                double down on them and do more of it. Repeat what works.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
