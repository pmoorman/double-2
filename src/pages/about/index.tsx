import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import { useTeam } from "@app/hooks";
import { CareersGridList, TeamMember, Link } from "@app/components";

import * as styles from "./index.module.scss";

const AboutPage = () => {
  const team = useTeam();

  return (
    <>
      {/* Hero */}
      <div className={styles.hero}>
        <Container className="pt-lg-6 pb-lg-8 pt-4">
          <Row className="justify-content-between">
            <Col md={8}>
              <h1 className="mb-4">
                A bunch of nerds who've mastered marketing and love to try it
                out on the world.
              </h1>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
              <Button
                as={Link}
                to="/contact"
                variant="secondary"
                className="mb-lg-0 mb-4"
              >
                Contact us
              </Button>
            </Col>
            <Col md={4} className="text-end">
              <StaticImage src="./hero.svg" alt="Growth" />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Intro */}
      <Container className="pt-lg-8 py-4 pb-lg-6">
        <Row>
          <Col md={6}>
            <h2 className="text-end">
              We’re a full-stack
              <div className="mt-lg-3 mt-2">Growth Marketing agency</div>
            </h2>
          </Col>
          <Col md={1}>
            <StaticImage src="./intro.svg" alt="" />
          </Col>
          <Col md={5} className="d-flex justify-content-end">
            <div className="mt-7" style={{ maxWidth: "450px" }}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim.
              </p>
              <Button as={Link} to="/services" variant="outline-secondary">
                View all services
              </Button>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Images */}
      <div className="bg-secondary">
        <Container className="pt-lg-8 py-4 pb-lg-6">
          <Row>
            {/* Image 1 */}
            <Col md={12}>
              <StaticImage src="./about_img_1.jpg" alt="TODO" />
              <div
                className="d-flex justify-content-center position-relative text-white"
                style={{ top: "-90px" }}
              >
                <h2 className="text-end">
                  We’re Double. We’re
                  <div className="mt-lg-3 mt-2">
                    Lunch time jokers
                    <StaticImage
                      className="ms-4 cutted_image"
                      src="./about_img_overlay.svg"
                      alt="TODO"
                    />
                  </div>
                </h2>
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-between">
            <div>
              <StaticImage src="./about_img_2.jpg" alt="TODO" width={481} />
              <h3 className="mt-3 text-white">Title about picture</h3>
            </div>
            <div>
              <StaticImage src="./about_img_3.jpg" alt="TODO" width={481} />
              <h3 className="mt-3 text-white">Title about picture</h3>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <StaticImage src="./about_img_4.jpg" alt="TODO" width={644} />
              <h3 className="mt-3 text-white">Title about picture</h3>
            </div>
            <div>
              <StaticImage src="./about_img_5.jpg" alt="TODO" width={481} />
              <h3 className="mt-3 text-white">Title about picture</h3>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <StaticImage src="./about_img_6.jpg" alt="TODO" width={644} />
              <h3 className="mt-3 text-white">Title about picture</h3>
            </div>
            <div>
              <StaticImage src="./about_img_7.jpg" alt="TODO" width={775} />
              <h3 className="mt-3 text-white">Title about picture</h3>
            </div>
          </div>
        </Container>
      </div>

      {/* Our people */}
      <Container className="pt-lg-8 py-4 pb-lg-6">
        <Row className="mb-5">
          <Col md={12}>
            <h2 className="mb-4">Our people</h2>
          </Col>
          <Col md={7}>
            <p>
              At Double everyone is a all rounder growth marketing expert. Meet
              the people on the ground who will be handling all your marketing
              needs
            </p>
          </Col>
        </Row>
        <Row>
          {team.map((member) => (
            <Col key={member.name} md={3} className="mb-6">
              <TeamMember member={member} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Our open roles */}
      <Container className="pt-lg-8 py-4 pb-lg-6">
        <Row className="mb-5">
          <Col md={12}>
            <h2 className="mb-4">Our open roles</h2>
          </Col>
          <Col md={4}>
            <p>
              We are always on the look out for talent to join us. Check out our
              open roles below.
            </p>
          </Col>
        </Row>
        <CareersGridList />
      </Container>

      {/* Featured articles */}
      <div className="pt-lg-6 pt-0">
        <Container>
          <Row>
            <Col lg="10">
              <h2 className="mb-3">Our featured articles</h2>
            </Col>
            <Col lg="2" className="d-none d-lg-block d-xl-block ">
              <Button as={Link} to="/blog" variant="outline-secondary">
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
                <h3 className="mb-3">
                  Want to hire the best talent? Hire remote
                </h3>
                <p className="d-none d-sm-block">
                  Remote work has made hidden gems more accessible. When will
                  you take advantage?
                </p>
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
                <h3 className="mb-3">
                  We’re donating 1% of our revenue to charity
                </h3>
                <p className="d-none d-sm-block">
                  Donating money is much easier when we know and agree with
                  where it’s going. Understandable, of course.
                </p>
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
                <h3 className="mb-3">
                  Great marketers are effective first, efficient second
                </h3>
                <p className="d-none d-sm-block">
                  The words 'effective' and 'efficient' are often used
                  interchangeably. But when it comes to marketers, the two mean
                  very different things.
                </p>
              </Col>
            </Row>
            <div className="d-block  d-xl-none  d-lg-none mb-5 mt-3">
              <Button as={Link} to="/blog" variant="outline-secondary">
                All articles
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <Row>
          <Col>
            <h1>AboutPage</h1>
          </Col>
        </Row>
        <Row>
          {team.map((member) => (
            <Col key={member.name} md={3}>
              <TeamMember member={member} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AboutPage;
