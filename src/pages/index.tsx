import * as React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link, ImageRow, TeamMember } from "@app/components";
import { useTeam } from "@app/hooks";
import { Rerousel } from 'rerousel';

import * as styles from "./index-assets/index.module.scss";

const HomePage = () => {
  const team = useTeam();

  return (
    <div className={styles.hero}>
      <Container className="pt-6 pb-8 ">
          <ImageRow
            imageSide="right"
            image={
              <StaticImage
                src="./index-assets/hero_image.jpeg"
                alt="Growth"
                className="cutted_image"
                style={{ height: "318px", width: "100%"}}
              />
            }
          >
            <h1 className="mb-3">Your allies in exponential growth.</h1>
            <p>We’re Growth Marketers from Amsterdam guiding VC-funded scale-ups to their revenue targets Series A startups.</p>
            <Button
              as={Link}
              to="/case-studies"
              variant="secondary">
                View all case studies
            </Button>
          </ImageRow>
      </Container>
      <div className="position-relative">
        <div className={styles.vectorLine}></div>
      </div>
      <Container className="pt-8 pb-6">
        <Row>
          <Col lg={{ span: 10, offset: 1 }} md={12}>
            <Row>
              <Col lg={{ span: 11, offset: 1 }}>
                <h2 className="mb-3">We’re sales funnel experts</h2>
              </Col>
            </Row>
            <Row>
                <Col lg={5}>
                  <h2>Who understand<div className="mt-3">systems thinking</div></h2>
                </Col>
                <Col lg={2}>
                  <div className={`mt-4 + ${styles.polygonIcon}`}></div>
                </Col>
                <Col  lg={5} className="mt-5 pt-3">
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
        </Row>
      </Container>
      <Container className="mt-7 mb-8 p-0 position-relative">
        <div className={styles.alpian}></div>
        <div className="text-white position-relative">
          <Row className="py-6">
            <Col lg={{ span: 10, offset: 1 }} md={12}>
              <Row>
                <Col lg={6}>
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
                <Col lg={6} className="mt-9 flex relative ">
                  <div className={styles.rombik}>
                    <div className="numberStat">
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
        <Row className="align-items-end">
          <Col lg="6">
            <div className="tiktokImage">
              <StaticImage
                src="./index-assets/tiktok.jpg"
                alt="TikTok website" />
            </div>
          </Col>
          <Col lg="6">
            <StaticImage
                src="./index-assets/tiktok_logo.svg"
                alt="TikTok logo"
              />
            <small className="my-2">Infrastructure</small>
            <h2>Turbo charged partnerships</h2>
            <h3>Social media giants</h3>
            <p>Something wasn't adding up. Based on TikTok's unreal success, businesses should have been flooding in to partner up as advertisers...</p>
            <Button
              as={Link}
              to="/case-studies"
              variant="secondary">
                Full case study
            </Button>
          </Col>
        </Row>
        <div className={`numberStat d-flex mt-5 mb-6 + ${styles.tiktokStatics}`}>
          <div>
            <div>5k</div>
            <span>Leads</span>
          </div>
          <div>
            <div>1</div>
            <span>Website</span>
          </div>
          <div>
            <div>6</div>
            <span>Weeks</span>
          </div>
        </div>

        <div className={styles.line}></div>
        <div className="position-relative">
          <div className={styles.polygonRightIcon}></div>
        </div>
      </Container>
      <Container className="mt-6 position-relative">
        <div className={styles.growforge}></div>
          <Row className="pb-8 pt-6">
            <div className={styles.rightLine}></div>
            <div className={`text-white position-relative + ${styles.growforgeRight}`}>
              <Col lg={{ span: 10, offset: 1 }} md={12}>
                <Row>
                  <Col lg={6}>
                    <StaticImage
                        src="./index-assets/growforge_logo.svg"
                        alt="Growforge logo"
                      />
                      <small className="mb-2 mt-4">Performance</small>
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
      <Container>
        <Row>
          <Col lg={{ span: 6, offset: 6 }}>
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
        <Row className={`mt-7 + ${styles.teamSection}`}>
          <Col lg="9">
            <h2 className="mb-3">Our people</h2>
            <p>At Double everyone growth marketing expert regardless of their specialist skills. Meet the people on the ground who will be handling all your marketing needs</p>
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
        <div  className={`mt-4 mb-7 + ${styles.TeamMember}`} >
            <div className={styles.logo}>
              <StaticImage
                src="./index-assets/stairs.svg"
                alt="stairs"
              />
            </div>
            
            {team.map((member) => (
            <div key={member.name}  className="mx-3">
              <TeamMember member={member} />
            </div>
            ))}
        </div>
        
        <div className="pt-6">
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
            <Row className="py-4">
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
