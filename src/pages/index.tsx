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
    autoplaySpeed: 2300,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
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
              <StaticImage
                src="./index-assets/hero_image.jpeg"
                alt="Growth"
                className={`cutted_image + ${styles.heroImage}`}
              />
            }
          >
            <h1 className="mb-lg-3 mb-4">Your allies in exponential growth.</h1>
            <p>
              We’re Growth Marketers from Amsterdam guiding VC-funded scale-ups
              to their revenue targets Series A startups.
            </p>
            <Button
              as={Link}
              to="/case-studies"
              variant="secondary"
              className="mb-lg-0 mb-4"
            >
              View all case studies
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
                    We’re sales funnel experts
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col lg={5} md={5}>
                  <h2>
                    Who understand
                    <div className="mt-lg-3 mt-2">systems thinking</div>
                  </h2>
                </Col>
                <Col lg={2} md={2} className="d-lg-block d-md-block d-none">
                  <div className={`mt-4 + ${styles.polygonIcon}`}></div>
                </Col>
                <Col lg={5} md={5} className="mt-lg-5 pt-lg-3 mt-3 pt-0">
                  <p>
                    We unlock sustainable, long-term growth by building copy,
                    videos, and articles into the context of loops, flywheels,
                    and funnels, We make sure every asset plays its part in a
                    wider acquisition and retention system.
                  </p>
                  <Button
                    as={Link}
                    to="/case-studies"
                    variant="outline-secondary"
                  >
                    View all case studies
                  </Button>
                </Col>
              </Row>
            </Col>
          </div>
        </Row>
      </Container>

      {caseStudies.map((item) => (
        <CaseStudySection
          type={item.section.type}
          item={item}
          key={item.slug}
        />
      ))}

      <Container>
        <Row className={`mt-lg-7 mt-4 + ${styles.teamSection}`}>
          <Col lg="9">
            <h2 className="mb-2">Our people</h2>
            <p className="text-grey">
              At Double everyone growth marketing expert regardless of their
              specialist skills. Meet the people on the ground who will be
              handling all your marketing needs
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

        <div className="pt-lg-6 pt-0">
          <SectionFeaturedArticles />
        </div>
      </Container>
    </>
  );
};

export default HomePage;
