import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import {
  Link,
  HeadingRow,
  FeaturedCaseStudies,
  SEO,
  Hero,
  TwoColumnSection,
  Image,
} from "@app/components";

const ServiceInfrastructure = () => {
  return (
    <>
      <SEO
        title="Marketing Infrastructure Services - Double Agency"
        keywords="Marketing Infrastructure Services"
        description="The technology behind marketing success. From data integration, analytics, technical marketing like website health to marketing automation and dashboarding."
      />
      <Hero
        type={1}
        title="Infrastructure"
        body="You’re in the right place whether you’re looking to hire a paid
        ads expert, a sales funnel architect, or a product marketer."
        buttonText="Work with us"
        buttonLink="/contact"
      />
      <Container>
        <Row className="mb-lg-7 mb-5">
          <Col lg="5" md="6" className="d-none d-lg-flex">
            <Image>
              <StaticImage src="./services.jpeg" alt="services" />
            </Image>
          </Col>
          <Col lg="1" className="d-none d-xl-flex"></Col>
          <Col xl="6" lg="6" md="6">
            <h2 className="mb-4">Our approach</h2>
            <Image double className="d-lg-none d-block mb-3">
              <StaticImage src="./services.jpeg" alt="services" />
            </Image>
            <p className="mb-lg-4">
              The behind-the-scenes. The underlying technology that ensures
              everything works smoothly (from data collection to automations).
            </p>
            <Button as={Link} to="/about" variant="outline-secondary">
              More about us
            </Button>
          </Col>
        </Row>
      </Container>

      <HeadingRow>
        <h2>We are experts in</h2>
      </HeadingRow>

      <Container>
        <TwoColumnSection title="Data integration " leftWidth={6}>
          <p>
            Proper data integration ensures that valuable marketing data is
            collected and accessible to stakeholders. Being able to look into
            past data is an essential part of marketing experimentation.
          </p>
          <ul>
            <li>Capture and understand all of your data</li>
            <li>Ensure you’re not losing any valuable data along the funnel</li>
            <li>Data sources — Dataiku</li>
            <li>Data collection integration</li>
          </ul>
          <h4 className="my-3">How we can help</h4>
          <p>
            Our team helps you integrate the business’ key data sources. The
            data that needs to be integrated may range from website or app data
            to social media and email marketing.
          </p>
        </TwoColumnSection>

        <TwoColumnSection title="Analytics" leftWidth={6}>
          <p>
            Interpret collected data into audiences, behaviour, and product
            usability. With collected insights we optimise funnels and
            experiments to improve metrics such as acquisition, conversion, and
            retention.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            Our analytics team assists you in collecting, visualising, and
            interpreting key business data for all stakeholders to understand.
            Uncover how products, ads, and content perform. To collect data we
            rely on platforms ranging from Google Analytics to more advanced
            options like Mixpanel and Amplitude. For data cleaning, we use Excel
            and DataIku. For visualisation, we use tools like Tableau.
          </p>
          <ul>
            <li>Google Analytics</li>
            <li>Amplitude</li>
            <li>Firewall</li>
            <li>Mixpanel</li>
            <li>Data Studios</li>
          </ul>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>Live dashboards </li>
            <li>SoMe analytics (Pixel setup) </li>
            <li>Data visualisation graphs</li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Technical marketing" leftWidth={6}>
          <p>
            Much of marketing efforts today are permeated with technical tasks.
            Whether they are one-off tasks or long-term efforts, more and more
            businesses choose to save time and outsource these technicalities.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            Our team helps you with the technical configurations of marketing
            processes. These may include starting from scratch or maintaining
            and optimising existing processes. We regularly work alongside teams
            of client-side data scientists, developers, and designers to ensure
            smooth operations.
          </p>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>Chatbots</li>
            <li>Technical SEO</li>
            <li>Email domain warmup</li>
            <li>Website / LP development </li>
            <li>CRM</li>
            <li>Ecommerce (Shopify)</li>
            <li>SemRush</li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Marketing automation" leftWidth={6}>
          <p>
            Build marketing systems that run smoothly and independently through
            automation. The goal of marketing automation is to improve the
            scalability of processes by eliminating repetitive tasks that are
            prone to human error.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            We help teams save time and scale faster by automating proven
            processes. Such processes include CRM, sales, email marketing, and
            content planning. We build workflows for automation within a channel
            or tool, as well as across channels.
          </p>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>CRM workflows in Hubspot</li>
            <li>Email marketing in Drip</li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Dashboarding" leftWidth={6}>
          <p>
            BDashboarding is an essential tool used in data-driven growth
            marketing. It tells the story of real-life data and helps teams make
            more informed decisions. Data visualisation through dashboarding
            aims to share insights quickly and clearly with important
            stakeholders.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            A functioning dashboard requires a good understanding of both the
            data insights and the business goals. Our team uses visualisation to
            adequately translate data into a clear, useful story.
          </p>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>Graphs to use in presentations</li>
          </ul>
        </TwoColumnSection>

        {/* <div className="py-lg-6 py-5">
          <h2 className="mb-5">See our work in practise</h2>
          <FeaturedCaseStudies />
        </div> */}
      </Container>
    </>
  );
};

export default ServiceInfrastructure;
