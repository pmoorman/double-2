import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import {
  Link,
  HeadingRow,
  FeaturedCaseStudies,
  Hero,
  SEO,
  TwoColumnSection,
  Image,
  AppHead,
} from "@app/components";

const ServiceStrategy = () => {
  return (
    <>
      <Hero
        type={1}
        title="Strategy"
        body="You’re in the right place whether you’re looking to hire a paid
        ads expert, a sales funnel architect, or a product marketer."
        buttonText="Work with us"
        buttonLink="/contact"
        image={<StaticImage src="./hero.svg" alt="Union" />}
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
              Growth rests on systems thinking. Marketing isn’t just about
              acquisition, but every part of the funnel has a role in growth.
              From building engaged audiences to designing growth loops, we
              build funnels with exponential growth in mind.
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
        <TwoColumnSection title="Sales funnel architecture" leftWidth={6}>
          <p>
            A sales funnel lays out the ideal path buyers follow when deciding
            to make a purchase. Funnels are made up of systems that sell your
            products in an automated way. Their goal is to turn (cold) audiences
            into long-term customers
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            {" "}
            We design funnels that result in the highest sales and conversion
            rate. We build systems for each stage of the funnel — from awareness
            to referral — by carefully testing and selecting the best-performing
            channels. Then, we optimise every step of the funnel for maximum
            performance.
          </p>
          <h4 className="my-3"> Deliverables</h4>
          <p>
            {" "}
            Generated over 50k leads for clients across portfolio Increased lead
            to conversion rate by …% through lead nurturing materials Average
            conversion rate improvement of …% after 6 months
          </p>
        </TwoColumnSection>

        <TwoColumnSection title="Product-driven growth" leftWidth={6}>
          <p>
            Create a product experience that boosts activation, retention, and
            referral metrics. The goal of product-driven growth is to increase
            the rate of engaged product users and entice them to generate
            additional users. The product experience for users improves with
            each new user added.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            Our team re-evaluates the current product experience with retention,
            user acquisition, and referral in mind. We build an experience in
            which the product sells itself. We achieve this in areas like UX
            design, copy, and in-app content.
          </p>
          <h4 className="my-3">Deliverables </h4>
          <ul>
            <li>Creating in-app content that boosted engagement by …% </li>
            <li>Built pricing model that increased purchase rate by …%</li>
            <li>Reduced time to value experienced by …%</li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Onboarding & activation" leftWidth={6}>
          <p>
            First impressions matter. The experience a new user has upon
            viewing, subscribing to, or buying a product will influence how
            engaged they remain. Through onboarding and activation, the aim is
            to create a product experience that keeps people coming back for
            more.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            When optimising an onboarding experience, our team focuses on
            communicating and demonstrating a product’s value proposition and
            benefits. We do this through tools like UX design and copywriting.
          </p>
          <h4 className="my-3">Deliverables </h4>
          <ul>
            <li>
              Improve user experience of an onboarding flows to reduce drop-offs
            </li>
            <li>Create clear, engaging explainer videos</li>
            <li>
              Rewrite website, app, or product copy to better convey value
              proposition
            </li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Retention rate marketing" leftWidth={6}>
          <p>
            Retention plays a significant role in long-term growth. The goal of
            retention rate marketing is to prevent or undo a drop in engagement
            by reactivating existing users and customers.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            Our team encourages customers to make repeat purchases or
            continuously use a service. To achieve this, we rely on strategies
            like user segmentation, persona-based marketing, retargeting ad
            campaigns, and email marketing.
          </p>
          <h4 className="my-3">Common deliverables</h4>
          <ul>
            <li>Email nurture series </li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Referral & virality" leftWidth={6}>
          <p>
            Viral marketing helps companies go from their first 100 users to
            their first 10,000 or 100,000. Generating referrals and virality
            among audiences is a cost and time-effective way of achieving
            exponential growth. Especially compared to direct sales.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            One customer tells a friend, who tells another friend, and so on.
            With strategies like reward systems, referral programmes, or word of
            mouth we turn existing customers into brand promoters.
          </p>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>Influencer campaigns </li>
            <li>Social media promotions</li>
            <li>Product-based marketing loops</li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Growth loops" leftWidth={6}>
          <p>
            To drive user acquisition and retention, companies rely on growth
            loops. These are a set of repeatable, consecutive events that either
            result in more users or higher engagement by existing users. Growth
            loops represent the path followed by a user reaching the product via
            a given asset (e.g. blogspot, marketing email, product review) and
            resulting in new users.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            When building growth loops, we start by assessing the
            best-performing assets. Then, we reverse engineer the process to
            find what it would take to result in more users via the same channel
            or asset. Using this approach, we design the steps required to boost
            growth from a single asset.
          </p>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>Reap the benefits of automated systems </li>
            <li>Works in cycles</li>
            <li>Compounded interested</li>
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

export default ServiceStrategy;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO
        title="Growth Marketing Strategy - Double Agency"
        keywords="Growth Marketing Strategy"
        description="In systems thinking, every part of the funnel plays a role in growth. Explore what strategy would work best to unlock exponential growth for your business."
      />
    </>
  );
};
