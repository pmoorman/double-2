import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";

import { Col, Container, Row, Button, Link } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./index.module.scss";
import {
  ApplicationProcess,
  HeadingRow,
  TwoColumnSection,
} from "@app/components";

export interface CareerTemplateProps {
  file: {
    childMdx: {
      body: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const CareerTemplate: FC<PageProps<CareerTemplateProps>> = (props) => {
  const { frontmatter } = props.data.file.childMdx;

  return (
    <>
      {/* Hero */}
      <Container className="pt-lg-6 pb-lg-8 pt-4 pb-6">
        <Row className="justify-content-between">
          <Col md={7}>
            <h1 className="mb-4">All-round Marketing Consultant</h1>
            <p className="mb-4">
              We’re looking for an All-round Marketing Consultant (3+ years
              experience), someone to help us elevate our clients’ business
              growth and get them more happy customers. This role has 40 hrs per
              week and a monthly starting salary of €4500. We expect you to have
              strengths and weaknesses across the spectrum of marketing but a
              solid understanding of the fundamentals is necessary.
            </p>
            <Button
              as={Link}
              to="#"
              variant="secondary"
              className="mb-lg-0 mb-4"
            >
              Apply now
            </Button>
          </Col>
          <Col md={5} className="text-lg-end">
            <StaticImage src="./hero.svg" alt="Growth" />
          </Col>
        </Row>
      </Container>

      {/* ROle */}
      <div className={styles.roleSection}>
        <Container>
          <Row>
            <Col md="5">
              <StaticImage
                src="./role.jpeg"
                alt="Role"
                className="cutted_image_double"
              />
            </Col>
            <Col md="1"></Col>
            <Col md="6">
              <h2 className="mb-5">Your role</h2>
              <p>
                All of our consultants work directly with a variety of
                fast-growing companies in industries like fintech, high-tech,
                SaaS, e-commerce. One thing connects our clients; they want to
                optimise their brand awareness and attract leads, aka growth
                marketing.
              </p>
              <p>
                {" "}
                You’ll help them figure out the right growth strategy for their
                lifecycle and set up supporting systems so that they can
                maintain success. Your secret weapon? Being a jack of all
                trades.
              </p>
              <Button as={Link} to="#" variant="outline-light" className="mt-4">
                Apply now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <HeadingRow>
        <h2>What we are looking for</h2>
      </HeadingRow>
      <Container>
        <TwoColumnSection title="Area title" leftWidth={6}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim.
          </p>
          <p>
            Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim.
          </p>
        </TwoColumnSection>
      </Container>

      <div className={styles.bonusPoints}>
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }}>
              <h2 className="mb-4">Bonus points if you..</h2>
              <p>
                Have an education / training in growth marketing (online courses
                count, too!) Experience being client-facing (e.g. sales,
                marketing, customer service) Worked in fast-paced (performance)
                marketing team or within a start-up environments before
              </p>
              <Button
                as={Link}
                to="#"
                variant="secondary"
                className="mb-lg-0 mb-4"
              >
                Apply now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="gray-bg pt-lg-6 pb-lg-8 py-4 text-secondary">
        <ApplicationProcess></ApplicationProcess>
      </div>
    </>
  );
};

export default CareerTemplate;

export const pageQuery = graphql`
  query ($relativePath: String!) {
    file(
      relativePath: { eq: $relativePath }
      sourceInstanceName: { eq: "careers" }
    ) {
      childMdx {
        body
        frontmatter {
          title
        }
      }
    }
  }
`;
