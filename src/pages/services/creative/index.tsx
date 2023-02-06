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

const ServiceCreative = () => {
  return (
    <>
      <SEO
        title="Creative & Content Marketing Services - Double Agency"
        keywords="Creative Services, Content Marketing Services"
        description="Looking to hire a paid ads expert, a sales funnel architect, or a product marketer? Look no further! Start getting the most out of your marketing channels"
      />
      <Hero
        type={1}
        title="Creative"
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
              Get the most out of marketing channels by creating quality
              content. Clear deliverables (website design, blogpost, emails).
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
        <TwoColumnSection title="Conversion copywriting" leftWidth={6}>
          <p>
            Great copy effectively communicates a product or service’s benefits
            and value proposition to an audience. The goal is to reveal value
            quickly and clearly so as to positively influence a prospect’s
            purchasing decision.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            We help you identify which parts of your product and service are
            most worthy of a mention. Using proven writing techniques and
            insights into buyer psychology we write copy that converts.
          </p>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>Ad copy </li>
            <li>Website & landing page copy</li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Lead nurturing" leftWidth={6}>
          <p>
            Lead nurturing gives prospects the necessary pieces of information,
            encouragement, and added value to make positive buying decisions.
            Companies who nurture leads may see higher rates of closed sales,
            conversion rates, and brand engagement.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            We set up channels ranging from email marketing and content
            marketing to ad retargeting campaigns. We rely on personalisation
            and insights from past conversions to build strong relationships
            with buyers at every stage of the funnel.
          </p>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>Email sequences</li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Storytelling" leftWidth={6}>
          <p>
            Storytelling is used to explain a brand’s why. By going beyond a
            simple description of the product or service offered, companies use
            stories to promote their worldview. Appealing to an audience’s set
            of beliefs consistently improves conversions, engagement, and
            retention.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            With our proven story methodology, we help companies formulate what
            their brands stand for. We then weave stories around the brand’s why
            into content including marketing emails, ads, and website copy.
          </p>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>Brands that tell stories convert </li>
            <li>Conversion, retention,</li>
            <li>We use copy to tell stories that stick</li>
            <li>A compelling story is what people remember about your brand</li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Content creation" leftWidth={6}>
          <p>
            Long-form blog posts, email sequences, and social media content all
            have one goal: to add value. Even though content comes in many
            forms, it always aims to sufficiently inform and intrigue audiences
            through value creation.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            Our team may complement an established content strategy through
            content production and creation. Other times, we may lead a content
            strategy from scratch. From keyword research to identifying content
            gaps, we come up with an effective content strategy.
          </p>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>Email sequences</li>
            <li>Content</li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Graphic design" leftWidth={6}>
          <p>
            Design is one of the keys to building a strong, recognisable brand.
            Through consistent and captivating graphic design, brands can bring
            across key campaign messages more effectively.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            We help companies create campaign components such as SoMe ads,
            banner ads, and landing pages. Our team includes experts in graphic
            design, UX design, and advertising.
          </p>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>TikTok landing pages </li>
            <li>These ads for Alpian</li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Video & animation" leftWidth={6}>
          <p>
            Videos and animation art elevate storytelling. Animation art is a
            powerful tool for brands to captivate their audiences on channels
            where attention spans can be limited (SoMe, landing pages).
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            Our animation artists effortlessly take you through the video
            animation process — from ideation to final production. Our growth
            strategist will accompany distribution of the final product via
            various channels.
          </p>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>Showreel?</li>
            <li>Stryber videos</li>
            <li>Tell stories in different, engaging formats</li>
            <li>Suitable for social media platforms, landing pages </li>
            <li>Video (reels, TikTok LinkedIn) are king</li>
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

export default ServiceCreative;
