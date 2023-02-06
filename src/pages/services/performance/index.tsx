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
} from "@app/components";

const ServicePerformance = () => {
  return (
    <>
      <SEO
        title="Performance Marketing Services - Double Agency"
        keywords="Performance Marketing Services"
        description="Our approach is to find the winning channel that suits your business goals. Measure what works and optimise for traffic, lead generation, and conversions."
      />
      <Hero
        type={1}
        title="Performance"
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
            <Image className="d-lg-none d-block mb-3">
              <StaticImage src="./services.jpeg" alt="services" />
            </Image>
            <p className="mb-lg-4">
              Find the winning channel that suits business goals. Measure what
              works and optimise for traffic, lead generation, and conversions.
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
        <TwoColumnSection title="Paid social" leftWidth={6}>
          <p>
            Generate awareness and acquisition by promoting branded content to
            audiences via social media. Social advertising expands a company’s
            reach and customer base in a quantifiable way. Prospects are
            targeted based on interests, demographics, and online behaviour.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            To start, we help reach new customers by selecting the right social
            platform for an audience. Then, we create content (videos, images,
            designs) and set up campaigns to reach the target audience. Once
            campaigns are live, we continuously measure and optimise
            performance.
          </p>
          <p>Platforms include:</p>
          <ul>
            <li>Facebook (Instagram) </li>
            <li>TikTok </li>
            <li>Pinterest</li>
            <li>Quora </li>
            <li>LinkedIn </li>
            <li>Youtube </li>
            <li>Reddit</li>
          </ul>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>Lead generation campaigns</li>
            <li>Dashboarding and visualising ad performance </li>
            <li>Maintenance</li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Search Ads " leftWidth={6}>
          <p>
            Advertise on the most widely-used search engines in the world. With
            search ads, businesses target specific keywords and pay a variable
            amount per click. This lets companies compete with each other to
            display their ads to high-intent audiences.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            Starting with the metric to improve, we run tests that establish a
            winning platform and ad type (e.g. search or display). We fine-tune
            copy, match tone of voice, and build keyword lists to drive the
            campaign goal (e.g. brand awareness, lead generation or conversion).
            Every piece of content is drafted manually, no templates, we make
            sure your ads fit your brand and your desired customer's language.
          </p>
        </TwoColumnSection>

        <TwoColumnSection title="SEO" leftWidth={6}>
          <p>
            When prospects have a question, in most cases they turn to search
            engines like Google. Search Engine Optimisation (SEO) ensures an
            online business is eligible to rank for searches related to a
            product or service.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            Our team’s goal is a mid to long-term strategy to claim online real
            estate and gradually grow organic traffic. We cover on-page,
            off-page, and technical SEO. Some of the metrics we optimise for
            include domain authority, backlinks, and keyword ranking.
          </p>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>SEO site audit</li>
            <li>
              Short-term focus on quick wins related to site health &
              infrastructure
            </li>
            <li>Mid to long-term SEO strategy</li>
            <li>Bi-weekly /Monthly website crawls using Ahrefs</li>
            <li>Search Console and Analytics</li>
            <li>Monthly analysis, optimisation and maintenance</li>
            <li>Keyword research, analysis and strategy</li>
            <li>Backlink analysis and strategy</li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Influencer marketing" leftWidth={6}>
          <p>
            The modern-day spin-off of traditional PR, influencer marketing
            leverages the power of ‘word of mouth’ and referrals. Brands today
            collaborate with influencers to tap into existing audiences.
            Companies benefit from exposure, receive engaging user-generated
            content, and improve brand trust.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            We help companies identify relevant influencers for their target
            audience and build campaigns that match their current business goals
            — from awareness to acquisition. We also assist with influencer
            outreach schedules and templates.
          </p>
        </TwoColumnSection>

        <TwoColumnSection title="Demand gen (B2B)" leftWidth={6}>
          <p>
            The age of traditional outbound sales may be coming to an end.
            Instead, B2B brands are becoming increasingly focused on demand
            generation. By becoming the thought and community leaders around
            certain issues, companies are turning audiences into high-intent
            leads.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            With a range of expertise from content marketing to paid marketing,
            our team builds awareness campaigns that draw in audiences to learn
            more. We tailor messaging and content to address specific audience
            questions and challenges. This results in informed, warmed up leads
            for sales to convert.
          </p>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>Content strategy </li>
            <li>Awareness ad campaigns </li>
            <li>LinkedIn marketing </li>
            <li>Nurture email flows</li>
          </ul>
        </TwoColumnSection>

        <TwoColumnSection title="Account-based marketing)" leftWidth={6}>
          <p>
            Account-based marketing creates a personalised buying experience per
            buyer persona or audience segment. This highly-tailored approach
            improves the probability of closing deals compared to that expected
            from cold outreach.
          </p>
          <h4 className="my-3">How we can help</h4>
          <p>
            To kick start account-based marketing efforts, we identify the
            warmest leads and divide prospects into segments. Then, we set up a
            plan for relationship-building and nurturing. The success of ABM
            depends on value creation for prospects, meaning messaging is
            tailored to meet individual account needs.
          </p>
          <h4 className="my-3">Deliverables</h4>
          <ul>
            <li>Create sales materials </li>
            <li>Lead gens </li>
            <li>Content / blogposts</li>
            <li>Personalised demo’s </li>
            <li>Sales scripts</li>
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

export default ServicePerformance;
