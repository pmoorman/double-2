import { BlogPostGridItem, SEO } from "@app/components";
import * as React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Slider, { Settings } from "react-slick";

import { Link, ImageRow, TestimonialSlider } from "@app/components";

import * as styles from "./index.module.scss";
import { useBlogPosts } from "@app/hooks";
import { format } from "date-fns";

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
  const allArticles = useBlogPosts();
  const featuredArticles = useBlogPosts({
    featured: true,
    limit: 3,
  });

  return (
    <>
      <SEO title="Blog" />
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
              {featuredArticles.map((post) => (
                <Col lg="12" xl="4">
                  <Link to={post.slug}>
                    <div style={{ width: 240 }}>
                      <GatsbyImage image={post.thumbnail} alt="featured" />
                    </div>
                    <div>
                      <small>
                        {format(new Date(post.date), "dd MMM yyyy")} |{" "}
                        {post.author}
                      </small>
                      <h4>{post.title}</h4>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>

      {/* <div className={styles.collectionSection}>
        <Container>
          <h2 className="mt-lg-7">Browse by collection</h2>
          <div className="subtitle">
            Dive into your growth challenges, broken down
          </div>
          <div className={styles.sliderSection}>
            <Slider {...settings}>
              <div className={styles.cardSlider}>
                <div>
                  <StaticImage src="./Union.svg" alt="union" />
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
      </div> */}

      <Container>
        <TestimonialSlider />
      </Container>

      <Container className="my-lg-7 my-5">
        <h2>Explore our articles</h2>
        <Row>
          {allArticles.map((post, i) => (
            <BlogPostGridItem key={post.title + i} post={post} />
          ))}
        </Row>
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
