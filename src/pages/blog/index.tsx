import { SEO } from "@app/components";
import * as React from "react";
import { Col, Container, Row, Button, Link } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import Slider, { Settings } from "react-slick";
import { BlogArtical, ImageRow, QuoteSlider } from "@app/components";

import * as styles from "./index.module.scss";

const settings: Settings = {
  arrows: false,
  dots: true,
  infinite: false,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  swipeToSlide: true,
  className: styles.blogSlider,
  responsive: [
    {
      breakpoint: 768,
      settings: "unslick",
    },
  ],
};

const BlogPage = () => {
  return (
    <>
<<<<<<< HEAD
      <SEO title="Blog" />
=======
>>>>>>> c69a99989799b21eb613ea44c59d7cd51bb40f8c
      <div className={styles.heroSection}>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
              <h1 className="mb-5">Here’s the thing about growth marketing</h1>
              <div className="subtitle">
                Our blog features the tools & mental models to help you maximise
                your team’s marketing efforts.
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.articles}>
        <Container>
          <h3 className="mb-0">Featured articles</h3>
          <div className={styles.featuredArticles}>
            <Row>
              <Col lg="12" xl="4">
                <div>
                  <StaticImage
                    src="./featured-1.jpg"
                    alt="featured artical"
                    layout="fixed"
                    height={176}
                  />
                </div>
                <div>
                  <small>17 Aug 2021 | Sandy</small>
                  <h4>Write like a lawyer first, copywriter second</h4>
                </div>
              </Col>
              <Col lg="12" xl="4">
                <div>
                  <StaticImage
                    src="./featured-2.jpg"
                    alt="featured artical"
                    layout="fixed"
                    height={176}
                  />
                </div>
                <div>
                  <small>6 Aug 2021 | Naveed</small>
                  <h4>Stop repulsing your prospects</h4>
                </div>
              </Col>
              <Col lg="12" xl="4">
                <div>
                  <StaticImage
                    src="./featured-3.jpg"
                    alt="featured artical"
                    layout="fixed"
                    height={176}
                  />
                </div>
                <div>
                  <small>6 Aug 2021 | Sandy</small>
                  <h4>Stop repulsing your prospects</h4>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <div className={styles.collectionSection}>
        <Container>
          <h2 className="mt-lg-7">Browse by collection</h2>
          <div className="subtitle">
            Dive into your growth challenges, broken down
          </div>
          <div className={styles.sliderSection}>
            <Slider {...settings}>
              <div className={styles.cardSlider}>
                <div>
                  <StaticImage src="./union.svg" alt="union" />
                </div>
                <div>
                  <h4>Sales funnels</h4>
                  <p className="mb-0">
                    Collection info. Collection info. Collection info.
                    Collection info. Collection info.
                  </p>
                </div>
              </div>
              <div className={styles.cardSlider}>
                <div>
                  <StaticImage src="./brand.svg" alt="brand" />
                </div>
                <div className="align-self-end">
                  <h4>Brand story</h4>
                  <p className="mb-0">
                    Collection info. Collection info. Collection info.
                    Collection info. Collection info.
                  </p>
                </div>
              </div>
              <div className={styles.cardSlider}>
                <div>
                  <StaticImage src="./strategy.svg" alt="strategy" />
                </div>
                <div className="align-self-end">
                  <h4>Paid ad strategy</h4>
                  <p className="mb-0">
                    Collection info. Collection info. Collection info.
                    Collection info. Collection info.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </Container>
      </div>

      <Container>
        <QuoteSlider></QuoteSlider>
      </Container>
      <Container className="my-lg-7 my-5">
        <h2>Explore our articles</h2>
        <BlogArtical></BlogArtical>
      </Container>

      <div className={styles.caseStudy}>
        <Container>
          <ImageRow
            imageOrder="first"
            image={
              <StaticImage
                src="./tiktok.jpeg"
                alt="Case Studies"
                className="cutted_image_double mb-lg-0 mb-3"
              />
            }
          >
            <h2 className="mb-lg-3 mb-4">See our growth marketing in action</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.Lorem ipsum dolor sit.
            </p>
            <Button
              as={Link}
              to="/case-studies"
              variant="outline-secondary"
              className="mb-lg-0 mb-4"
            >
              View all case studies
            </Button>
          </ImageRow>
        </Container>
      </div>
    </>
  );
};

export default BlogPage;
