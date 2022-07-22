import * as React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link, ImageRow, TeamMember, Stats } from "@app/components";
import { useTeam } from "@app/hooks";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import * as styles from "./index-assets/index.module.scss";


const HomePage = () => {
  const team = useTeam();
  const isMdDevice = useMediaQuery({ query: '(min-width: 992px)' })

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    className: styles.TeamMember,
    responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2.5,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5,
      }
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1.5,
      }
    },
    ]
  };
  

  return (
    <div className={styles.hero}>
      <Container className="pt-lg-6 pb-lg-8 pt-4">
          <ImageRow
            imageSide="right"
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
            <p>We’re Growth Marketers from Amsterdam guiding VC-funded scale-ups to their revenue targets Series A startups.</p>
            <Button
              as={Link}
              to="/case-studies"
              variant="secondary"
              className="mb-lg-0 mb-4">
                View all case studies
            </Button>
          </ImageRow>
      </Container>

      <div className="position-relative">
        <div className={styles.vectorLine}></div>
      </div>

      <Container className="pt-lg-8 py-4 pb-lg-6">
        <Row>
          <div className={styles.mobileLines}>
            <Col lg={{ span: 10, offset: 1 }} md={12} className={styles.aboutUs}>
              <Row>
                <Col lg={{ span: 11, offset: 1 }} md={{ span: 11, offset: 1}}>
                  <h2 className={styles.headingStyle}>We’re sales funnel experts</h2>
                </Col>
              </Row>
              <Row>
                  <Col lg={5} md={5}>
                    <h2>Who understand<div className="mt-lg-3 mt-2">systems thinking</div></h2>
                  </Col>
                  <Col lg={2} md={2} className="d-lg-block d-md-block d-none">
                    <div className={`mt-4 + ${styles.polygonIcon}`}></div>
                  </Col>
                  <Col lg={5} md={5} className="mt-lg-5 pt-lg-3 mt-3 pt-0">
                    <p>We unlock sustainable, long-term growth by building copy, videos, and articles into the context of loops, flywheels, and funnels, We make sure every asset plays its part in a wider acquisition and retention system.</p>
                    <Button
                    as={Link}
                    to="/case-studies"
                    variant="outline-secondary">
                      View all case studies
                  </Button>
                  </Col>
              </Row>
            </Col>
          </div>
        </Row>
      </Container>

      <Container className="mt-lg-7 mt-3 mb-lg-8 mb-5 position-relative">
        <div className={styles.alpian}></div>
        <div className="text-white position-relative p-0 p-md-3">
          <Row className="py-lg-6 py-0">
            <Col lg={{ span: 10, offset: 1 }}>
              <Row>
                <Col lg={6} md={6}>
                  <StaticImage
                      src="./index-assets/alpian_logo.svg"
                      alt="Alpian logo"
                    />
                    <small className="mb-2">Strategy | Performance</small>
                    <h2 className="mb-2">Taking growth to the bank</h2>
                    <h3 className="mb-3">Wealth beyond money</h3>
                    <p>We have been a long term growth marketing partner for Switzerland’s first digital private bank. Helping them build an audience from scratch.</p>
                    <Button
                      as={Link}
                      to="/case-studies"
                      variant="light">
                        Full case study
                    </Button>
                </Col>
                <Col lg={6} md={6} className="mt-9 flex relative">
                  <div className={styles.rombik}>
                    <div className={styles.parent}>
                      <svg viewBox="0 0 300 300">
                        <g transform="translate(0,300) scale(0.1,-0.1)" fill="#387CD3">
                          <path d="M745 2250 l-750 -750 753 -753 752 -752 752 752 753 753 -750 750 c-412 412 -752 750 -755 750 -3 0 -343 -338 -755 -750z" />
                        </g>
                      </svg>
                    </div>
                    <div className="numberStat" >
                      <div className="mb-5">
                        <div>7k</div>
                        <span>Leads</span>
                      </div>
                      <div className="mb-5">
                        <div>$30m</div>
                        <span>Raised</span>
                      </div>
                      <div>
                        <div>18</div>
                        <span>Months</span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <Row className="align-items-end pt-lg-9 pt-6 ">
          <Col lg={{ span: 6, order: "first"}}
              sm={{ span: 12, order: "last" }}
              xs={{ span: 12, order: "last" }}>
            <div className="tiktokImage">
              <StaticImage
                src="./index-assets/tiktok.jpg"
                alt="TikTok website" />
            </div>
          </Col>
          <Col lg={6}>
            <StaticImage
                src="./index-assets/tiktok_logo.svg"
                alt="TikTok logo"
              />
            <small className="my-2">Infrastructure</small>
            <h2>Turbo charged partnerships</h2>
            <h3>Social media giants</h3>
            <p>Something wasn't adding up. Based on TikTok's unreal success, businesses should have been flooding in to partner up as advertisers...</p>
            {!isMdDevice && <Stats></Stats>}
            <Button
              as={Link}
              to="/case-studies"
              variant="secondary"
              className="mb-lg-0 mb-5">
                Full case study
            </Button>
          </Col>
        </Row>
        {isMdDevice && <Stats></Stats>}

        <div className={styles.line}></div>
        <div className="position-relative">
          <div className={styles.polygonRightIcon}></div>
        </div>
      </Container>

      <div className="position-relative">
        <div className={styles.mobileBackground}></div>
        <Container className="mt-lg-6 mt-0 position-relative">
          <div className={styles.growforge}></div>
            <Row className="pb-lg-8 pt-lg-6 pt-2 pb-6">
              <div className={styles.rightLine}></div>
              <div className={`text-white position-relative + ${styles.growforgeRight}`}>
                <Col lg={{ span: 10, offset: 1 }} md={12}>
                  <Row>
                    <Col lg={6}>
                      <StaticImage
                          src="./index-assets/growforge_logo.svg"
                          alt="Growforge logo"
                          className={styles.growforge_logo}
                        />
                        <small className="mb-2 mt-lg-4 mt-2">Performance</small>
                        <h2 className="mb-2">Crossing the Atlantic</h2>
                        <h3 className="mb-3">The iconic 3D printer</h3>
                        <p>We helped Glowforge build a new lead-nurturing system designed to speed up the sales cycle, as well as creating new performance advertisements- both tuned for the UK market.</p>
                        <Button
                          as={Link}
                          to="/case-studies"
                          variant="light">
                            Full case study
                        </Button>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 6 }} md={12}>
            <blockquote className="blockquote">
              <div className={styles.quoteLine}></div>
              <p>“Double made me feel confident that all our needs would be met above and beyond’</p>
              <footer>
                <div>John Doe</div>
                <div>CTO , Glowforge</div>
              </footer>
            </blockquote>
          </Col>
        </Row>
        <Row className={`mt-lg-7 mt-4 + ${styles.teamSection}`}>
          <Col lg="9">
            <h2 className="mb-2">Our people</h2>
            <p className="text-grey">At Double everyone growth marketing expert regardless of their specialist skills. Meet the people on the ground who will be handling all your marketing needs</p>
          </Col>
          <Col lg="3">
            <Button
              as={Link}
              to="/about"
              variant="outline-secondary btn-lg">
                More about us
            </Button>
          </Col>
        </Row>
        <Row className="align-items-center mt-lg-4 mt-5 mb-lg-7 mb-5">
          <Col lg={3} className="d-none d-lg-block d-xl-block">
            <div className={styles.logo}>
              <StaticImage
                src="./index-assets/stairs.svg"
                alt="stairs"
              />
            </div>
          </Col>
          <Col lg="9">
            <Slider {...settings} >
              {team.map((member) => (
              <div key={member.name}  className={styles.teamCard}>
                <TeamMember member={member} />
              </div>
              ))}
            </Slider>
          </Col>
        </Row>
        
        <div className="pt-lg-6 pt-0">
          <Row>
            <Col lg="10">
              <h2 className="mb-3">Our featured articles</h2>
            </Col>
            <Col lg="2" className="d-none d-lg-block d-xl-block ">
              <Button
                as={Link}
                to="/blog"
                variant="outline-secondary">
                  All articles
              </Button>
            </Col>
          </Row>
          <div className={styles.blogArtical}>
            <Row className="py-4">
                <Col lg="3" md="6" sm="6" xs="4">
                  <StaticImage
                    src="./index-assets/blog-1.jpeg"
                    alt="Hire talent remote"
                  />
                </Col>
                <Col lg="7" md="6" sm="6" xs="8">
                  <div className={styles.date}>6 Aug 2021 | Author</div>
                  <h3 className="mb-3">Want to hire the best talent? Hire remote</h3>
                  <p className="d-none d-sm-block">Remote work has made hidden gems more accessible. When will you take advantage?</p>
                </Col>
            </Row>
            <Row className="py-4">
                <Col lg="3" md="6" sm="6" xs="4">
                  <StaticImage
                    src="./index-assets/blog-2.jpeg"
                    alt="Hire talent remote"
                  />
                </Col>
                <Col lg="7" md="6" sm="6" xs="8">
                  <div className={styles.date}>6 Aug 2021 | Author</div>
                  <h3 className="mb-3">We’re donating 1% of our revenue to charity</h3>
                  <p className="d-none d-sm-block">Donating money is much easier when we know and agree with where it’s going. Understandable, of course.</p>
                </Col>
            </Row>
            <Row className="py-4 align-items-center">
                <Col lg="3" md="6" sm="6" xs="4">
                  <StaticImage
                    src="./index-assets/blog-3.jpeg"
                    alt="Hire talent remote"
                  />
                </Col>
                <Col lg="7" md="6" sm="6" xs="8">
                  <div className={styles.date}>6 Aug 2021 | Author</div>
                  <h3 className="mb-3">Great marketers are effective first, efficient second</h3>
                  <p className="d-none d-sm-block">The words 'effective' and 'efficient' are often used interchangeably. But when it comes to marketers, the two mean very different things.</p>
                </Col>
            </Row>
            <div className="d-block  d-xl-none  d-lg-none mb-5 mt-3">
              <Button
                as={Link}
                to="/blog"
                variant="outline-secondary">
                  All articles
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
