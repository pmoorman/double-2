import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link, HeadingRow, ImageCard } from "@app/components";

const ServicePerformance = () => {
  return (
    <div>
      <Container>
        <Row className="pt-lg-7 pb-lg-8 py-4">
          <Col lg="8" md="8">
            <h1 className="mb-lg-5 mb-4">Performance</h1>
            <div className="subtitle mb-lg-5 mb-4">
              You’re in the right place whether you’re looking to hire a paid
              ads expert, a sales funnel architect, or a product marketer.
            </div>
            <Button as={Link} to="/contact" variant="secondary">
              Work with us
            </Button>
          </Col>
          <Col lg="4" md="4" className="my-lg-0 my-4">
            <StaticImage src="./hero.svg" alt="Union" />
          </Col>
        </Row>

        <Row className="mb-lg-7 mb-5">
          <Col lg="5" md="6" className="d-none d-lg-flex">
            <StaticImage
              src="./services.jpeg"
              alt="services"
              className="cutted_image"
            />
          </Col>
          <Col lg="1" className="d-none d-xl-flex"></Col>
          <Col xl="6" lg="6" md="6">
            <h2 className="mb-4">Our approach</h2>
            <StaticImage
              src="./services.jpeg"
              alt="services"
              className="cutted_image_double d-lg-none d-block mb-3"
            />
            <p className="mb-lg-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
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
        <Row className="py-lg-6 py-5">
          <Col lg="6">
            <h3 className="mb-3">Area title</h3>
          </Col>
          <Col lg="6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim.
            </p>
            <p>
              Ut enim ad minim.Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim.
            </p>
          </Col>
        </Row>
        <Row className="py-lg-6 py-5">
          <Col lg="6">
            <h3 className="mb-3">Area title</h3>
          </Col>
          <Col lg="6">
            <p>
              At least 3 full-time years of experience as a (growth) marketer
              You’re a great prioritiser and thrive in a market that requires
              you to be sharp, committed, and knowledgeable. You enjoy working
              autonomously and have a strong sense of ownership Excellent oral
              and written communication skills in English A basic to good
              understanding of the following skills and an expert in one or some
              of them (preferably one of the first three):
            </p>
            <ul>
              <li>Marketing automation</li>
              <li>Paid advertising</li>
              <li> Copywriting A/B-testing & high tempo experimentation</li>
              <li>Customer onboarding optimisation</li>
              <li>Sales Data analysis and analytics</li>
              <li>Basic coding</li>
              <li>Video editing</li>
              <li>General design skills</li>
            </ul>
          </Col>
        </Row>
        <div className="py-lg-6 py-5">
          <h2 className="mb-5">See our work in practise</h2>
          <ImageCard></ImageCard>
        </div>
      </Container>
    </div>
  );
};

export default ServicePerformance;
