import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import { StaticImage } from "gatsby-plugin-image";

import { SEO, AppHead, AppAccordion, ContactSection } from "@app/components";
import { useCaseStudies } from "@app/hooks";
import { getHomepageCaseStudies } from "@app/helpers";
import { CaseStudyCarousel } from "@app/components/case-study-carousel";

import * as styles from "./index-assets/index.module.scss";

const services = [
  {
    title: "Strategy",
    body: "From building engaged audiences to designing growth loops, we build strategy with exponential growth in mind.",
  },
  {
    title: "Performance",
    body: "We find the winning channel that suits your business goals. We measure what works and optimise for traffic, lead generation, and conversion.",
  },
  {
    title: "Infrastructure",
    body: "The underlying technology that ensures everything works smoothly, from data collection to automations. ",
  },
  {
    title: "Creative",
    body: "Get the most out of your marketing channels with clear and creative deliverables. We create websites, blogposts, emails, animations and much more.",
  },
];

const HomePage = () => {
  const _caseStudies = useCaseStudies();
  const caseStudies = getHomepageCaseStudies(_caseStudies).sort(
    (a, b) => (b.homepageweight || 0) - (a.homepageweight || 0)
  );

  return (
    <>
      <div className="pt-5 pb-lg-6 pb-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={{ span: 6 }} md={{ span: 6 }} className="text-center">
              <h1 className="mb-5 d-headline">
                Imagine your business <span>Doubled</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="pb-5">
        <HomeVideo />
      </Container>

      <div id="services" className="pb-5 my-md-6">
        <Container>
          <Row className="justify-content-between">
            <Col md={3} className="mb-3 mb-md-0">
              <h3>We offer a range of marketing services</h3>
            </Col>
            <Col md={5}>
              <AppAccordion items={services} />
            </Col>
          </Row>
        </Container>
      </div>

      <div id="caseStudies">
        <CaseStudyCarousel />
      </div>

      <div id="features" className="pb-8 pt-lg-6">
        <Container>
          <div className={`d-flex flex-column flex-lg-row ` + styles.features}>
            <div>
              <div className="d-flex align-items-center px-lg-3 mb-4 mb-lg-0">
                <StaticImage
                  className="me-3 flex-shrink-0"
                  src="./index-assets/star.png"
                  alt="star"
                  width={84}
                />
                <h3 className="mb-0">60k+ Academy subscribers </h3>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center px-lg-3 mb-4 mb-lg-0">
                <StaticImage
                  className="me-3 flex-shrink-0"
                  src="./index-assets/pyra.png"
                  alt="pyra"
                  width={86}
                />
                <h3 className="mb-0">Experienced start-up founders</h3>
              </div>
            </div>
            <div>
              <div className="d-flex align-items-center px-lg-3 mb-4 mb-lg-0">
                <StaticImage
                  className="me-3 flex-shrink-0"
                  src="./index-assets/diamond.png"
                  alt="diamond"
                  width={88}
                />
                <h3 className="mb-0">Worked with 100+ tech companies </h3>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <ContactSection />
    </>
  );
};

const HomeVideo = () => {
  const [playing, setPlaying] = React.useState(true);

  const renderButtonIcon = () => {
    if (playing) {
      return (
        <StaticImage
          src="./index-assets/pause.svg"
          alt="Pause"
          width={65}
          height={65}
          placeholder="none"
        />
      );
    }

    return (
      <StaticImage
        src="./index-assets/play.svg"
        alt="Play"
        width={65}
        height={65}
        placeholder="none"
      />
    );
  };

  return (
    <div className={styles.videoContainer}>
      <ReactPlayer
        url="https://d6nxaq6ghh9kf.cloudfront.net/DOUBLE_compREEL_v2.mp4"
        width="100%"
        height="100%"
        playing={playing}
        muted
        loop
        playsinline
      />
      <div className={styles.playButton}>
        <div role="button" onClick={() => setPlaying((v) => !v)}>
          {renderButtonIcon()}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO
        title="Growth Marketing Agency - Double"
        keywords="Growth Marketing Agency, Double Agency, Experts in exponential growth"
        description="Looking for a growth marketing agency that will help you do better marketing, and drive explosive user growth? It's not a coincidence that you've found us."
      />
    </>
  );
};
