import * as React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link, Stats, ImageCard } from "@app/components";
import { useMediaQuery } from "react-responsive";

import * as styles from "./index.module.scss";

const CaseStudiesPage = () => {
  const isMdDevice = useMediaQuery({ query: "(min-width: 768px)" });
  return (
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

        <div className="mb-lg-8">
          <div className={styles.blueBg}>
            <h3>Featured case studies</h3>
          </div>
          <div className={styles.cardSection}>
            <ImageCard></ImageCard>
          </div>
        </div>

        <div>
          <h2>Explore our case studies</h2>
          <div className={styles.filters}>
            <div className={styles.title}>
              <small>Filter by:</small>
            </div>
            <div className={styles.active}>
              <small>All</small>
            </div>
            <div>
              <small>SaaS</small>
            </div>
            <div>
              <small>Mobile</small>
            </div>
            <div>
              <small>Fintech</small>
            </div>
            <div>
              <small>E-commerence</small>
            </div>
            <div>
              <small>B2B</small>
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.alpianMobile}>
        <Container className="position-relative">
          <div className={`bg_image + ${styles.alpian}`}></div>
          <div className="text-white position-relative p-0 p-md-3">
            <Row className="pt-lg-5 pb-lg-9 py-0 pt-3 pb-6">
              <Col lg={{ span: 10, offset: 1 }}>
                <Row>
                  <Col lg={8} md={8}>
                    <StaticImage
                      src="./index-assets/alpian_logo.svg"
                      alt="Alpian logo"
                    />
                    <small className="mb-2">Strategy | Performance</small>
                    <h2 className="mb-2">Taking growth to the bank</h2>
                    <h3 className="mb-3">Wealth beyond money</h3>
                    <p>
                      We have been a long term growth marketing partner for
                      Switzerland’s first digital private bank. Helping them
                      build an audience from scratch.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <Container>
        <div>
          <div className={styles.alpianStats}>
            <Stats></Stats>
          </div>
          <div className={styles.arrowDown}>
            <div></div>
          </div>
        </div>

        <div className="mt-lg-6 mb-lg-7 clearfix">
          <Row className="clearfix">
            <Col lg="5">
              <h3>Section title</h3>
            </Col>
            <Col ld="7">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed doeiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <p>
                Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
              </p>
            </Col>
          </Row>
        </div>

        <div className="mt-lg-8 mb-lg-6">
          <Row>
            <Col
              lg={{ span: 5, order: 0 }}
              md={{ span: 12 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
            >
              <h3>Section title</h3>
              <p>
                Our goal with Glowforge is simple; collect leads at a low CPA
                and help their team convert them into sales.
              </p>
              <p>
                We built a new lead-nurturing system in the form of a 9-part
                email series, introducing our audience to “Modern Making”,
                something synonymous with Glowforge printers. Our carefully
                targeted performance marketing drove awareness across multiple
                channels and built a healthy funnel of leads.
              </p>
              <p>
                We continue to work with Glowforge on a variety of projects,
                from content marketing to domain optimisation and web page
                design.
              </p>
              <Button
                as={Link}
                to="/case-studies"
                variant="secondary"
                className="mb-lg-0 mb-4"
              >
                Full case study
              </Button>
            </Col>

            <Col lg="7" md="12">
              <StaticImage
                src="./glowforge.jpg"
                alt="Alpian logo"
                className="cutted_image_double mb-lg-0 mb-3"
              />
            </Col>
          </Row>
        </div>
      </Container>

      <div className={styles.alpianMobile2}>
        <Container className="position-relative">
          <div className={`bg_image + ${styles.alpian2}`}></div>
          <div className="position-relative p-0 p-md-3">
            <Row className="pt-lg-5 pb-lg-9 py-0 pt-3 pb-6">
              <Col lg={{ span: 10, offset: 1 }}>
                <Row>
                  <Col lg={8} md={8}>
                    <StaticImage
                      src="./index-assets/alpian_logo.svg"
                      alt="Alpian logo"
                    />
                    <small className="mb-2">Strategy | Performance</small>
                    <h2 className="mb-2">Taking growth to the bank</h2>
                    <h3 className="mb-3">Wealth beyond money</h3>
                    <p>
                      We have been a long term growth marketing partner for
                      Switzerland’s first digital private bank. Helping them
                      build an audience from scratch.
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <Container className="position-relative">
        <Row className="align-items-lg-end pt-lg-9 pt-9 pt-md-6 position-relative">
          <div className={styles.line}></div>
          <div className={styles.lineRight}></div>
          <Col
            lg={{ span: 6, order: "first" }}
            md={{ span: 6, order: "first" }}
            sm={{ span: 12, order: "last" }}
            xs={{ span: 12, order: "last" }}
          >
            <div className="tiktokImage">
              <StaticImage
                src="./index-assets/tiktok.jpg"
                alt="TikTok website"
              />
            </div>
          </Col>
          <Col lg={6} md={6}>
            <StaticImage
              src="./index-assets/tiktok_logo.svg"
              alt="TikTok logo"
            />
            <small className="my-2">Infrastructure</small>
            <h2>Turbo charged partnerships</h2>
            <h3>Social media giants</h3>
            <p>
              Something wasn't adding up. Based on TikTok's unreal success,
              businesses should have been flooding in to partner up as
              advertisers...
            </p>
            {!isMdDevice && <Stats></Stats>}
            <Button
              as={Link}
              to="/case-studies"
              variant="secondary"
              className="mb-lg-0 mb-5"
            >
              Full case study
            </Button>
          </Col>
        </Row>
        <div className="position-relative">
          <div className={styles.lineRight2}></div>
          {isMdDevice && <Stats></Stats>}
        </div>

        <div className="mt-lg-9 mb-lg-7">
          <div className={styles.bgArrow}></div>
          <Row>
            <Col lg="5">
              <h3>Section title</h3>
            </Col>
            <Col ld="7">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed doeiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
              <p>
                Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
              </p>
            </Col>
          </Row>
        </div>

        <div className="mt-lg-8 mb-lg-6">
          <Row>
            <Col
              lg={{ span: 5, order: 0 }}
              md={{ span: 12 }}
              sm={{ span: 12, order: 2 }}
              xs={{ span: 12, order: 2 }}
            >
              <h3>Section title</h3>
              <p>
                Our goal with Glowforge is simple; collect leads at a low CPA
                and help their team convert them into sales.
              </p>
              <p>
                We built a new lead-nurturing system in the form of a 9-part
                email series, introducing our audience to “Modern Making”,
                something synonymous with Glowforge printers. Our carefully
                targeted performance marketing drove awareness across multiple
                channels and built a healthy funnel of leads.
              </p>
              <p>
                We continue to work with Glowforge on a variety of projects,
                from content marketing to domain optimisation and web page
                design.
              </p>
              <Button
                as={Link}
                to="/case-studies"
                variant="secondary"
                className="mb-lg-0 mb-4"
              >
                Full case study
              </Button>
            </Col>

            <Col lg="7" md="12">
              <StaticImage
                src="./glowforge.jpg"
                alt="Alpian logo"
                className="cutted_image_double mb-lg-0 mb-3"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default CaseStudiesPage;
