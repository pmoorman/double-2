import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import { StaticImage } from "gatsby-plugin-image";

import {
  SEO,
  AppHead,
  AppAccordion,
  ContactSection,
  ClientsGrid,
  AboutSection,
} from "@app/components";
import { useCaseStudies } from "@app/hooks";
import { getHomepageCaseStudies } from "@app/helpers";

import * as styles from "./index-assets/index.module.scss";
import { clientQuotes } from "@app/data";
import { ServicesSection } from "@app/page-components/home/services-section";

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
    (a, b) =>
      (b?.grid_item?.homepageweight || 0) - (a?.grid_item?.homepageweight || 0)
  );

  return (
    <>
      <div className="pt-5 pb-lg-6 pb-5">
        <Container>
          <Row className="justify-content-center">
            <Col lg={{ span: 6 }} md={{ span: 6 }} className="text-center">
              <h1 className="mb-5 d-headline">
                Imagine your business <span>doubled</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="pb-5">
        <HomeVideo />
      </Container>

      <div id="services" className="pb-5 my-md-6">
        <ServicesSection />
      </div>

      <div id="caseStudies">
        <Container className="mb-5">
          <Row>
            <Col>
              <h2 className="mb-0">Clients</h2>
            </Col>
          </Row>
        </Container>
        <ClientsGrid
          caseStudies={caseStudies}
          quotes={clientQuotes}
          amount={5}
          getImage={(c) => c.grid_item?.homepageimage}
        />
      </div>

      <AboutSection />

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
        className="d-flex"
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
