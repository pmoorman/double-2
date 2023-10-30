import * as React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Slider, { Settings } from "react-slick";
import { format } from "date-fns";

import {
  Link,
  ImageRow,
  TestimonialSlider,
  BlogPostGridItem,
  Image,
  SEO,
  AppHead,
  OgilvyInlineForm,
} from "@app/components";
import { useBlogPosts } from "@app/hooks";

import * as styles from "./index.module.scss";

import heroImg from "./oval.svg";

const formId = "195040068";

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
      <div className={styles.heroSection}>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
              <h1 className="mt-6 d-headline">
                Growth systems, <br /> <span>not hacks.</span>
              </h1>
              <div className={styles.heroBg}>
              <img src={heroImg} alt="About" className="img-fluid" />
            </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={styles.articles}>
        <div className="position-relative">
          <div className={styles.academy}>
            <div className={styles.img}>
              <StaticImage
                src="./new_iphone_mockup_desktop.png"
                alt="Phone image"
                objectFit="contain"
                width={476}
              />
            </div>
            <div className={styles.info}>
              <h2>
                The 38 laws of <br /> growth <br /> marketing
              </h2>
              <div style={{ fontSize: "20px", fontWeight: 400 }} className="mb-4 mt-2">
                As a growth agency, Double has executed campaigns for some of
                the fastest growing tech companies in the world.
              </div>
              <div style={{opacity:0.65}}>Leave your details and get access to the free PDF.</div>
              <OgilvyInlineForm
                formId={formId}
                buttonProps={{
                  variant: "primary",
                }}
                recaptchaProps={{
                  theme: "light",
                  className: "mt-3",
                }}
              />
            </div>
          </div>
        </div>
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

      {/* <Container>
        <TestimonialSlider />
      </Container> */}

      <Container className="my-lg-7 my-5">
        <h2>Explore our articles</h2>
        <Row>
          {allArticles.map((post, i) => (
            <BlogPostGridItem key={post.title + i} post={post} />
          ))}
        </Row>
      </Container>

      {/* <div className={styles.caseStudy}>
        <Container>
          <ImageRow
            imageOrder="first"
            image={
              <Image className="mb-lg-0 mb-3">
                <StaticImage src="./tiktok.jpeg" alt="Case Studies" />
              </Image>
            }
          >
            <h2 className="mb-lg-3 mb-4">
              See our growth marketing in action.
            </h2>
            {/* <p>
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
      </div> */}

    </>
  );
};

export default BlogPage;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO
        title="The Expert Growth Marketing Toolbox - Double Blog"
        keywords="Expert Growth Marketing Toolbox, From Good to Great Marketeer,Expert Growth Marketing Toolbox"
        description="In our Double blog we provide growth marketing advice and tools to take you and your business from good to great. Explore and learn from our experts."
      />
    </>
  );
};
