import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row, Button } from "react-bootstrap";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

import * as styles from "./index.module.scss";
import {
  ApplicationProcess,
  HeadingRow,
  Image,
  TwoColumnSection,
  Link,
} from "@app/components";

export interface CareerTemplateProps {
  file: {
    childMdx: {
      frontmatter: {
        title: string;
        hero_body: string;
        role_image: any;
        role_description: string;
        sections: { title: string; body: string }[];
      };
    };
  };
}

const CareerTemplate: FC<PageProps<CareerTemplateProps>> = (props) => {
  const { frontmatter } = props.data.file.childMdx;
  const { title, hero_body, role_image, role_description, sections } =
    frontmatter;
  const roleImage = getImage(role_image);

  return (
    <>
      {/* Hero */}
      <Container className="pt-lg-6 pb-lg-8 pt-4 pb-6">
        <Row className="justify-content-between">
          <Col md={7}>
            <h1 className="mb-4">{title}</h1>
            <p className="mb-4">{hero_body}</p>
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
            {roleImage && <GatsbyImage image={roleImage} alt="role image" />}
          </Col>
        </Row>
      </Container>

      {/* ROle */}
      <div className={styles.roleSection}>
        <Container>
          <Row>
            <Col md="5">
              <Image double>
                <StaticImage src="./role.jpeg" alt="Role" />
              </Image>
            </Col>
            <Col md="1"></Col>
            <Col md="6">
              <h2 className="mb-5">Your role</h2>
              <ReactMarkdown>{role_description}</ReactMarkdown>
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
        {sections.map((section) => (
          <TwoColumnSection
            key={section.title}
            title={section.title}
            leftWidth={6}
          >
            <ReactMarkdown>{section.body}</ReactMarkdown>
          </TwoColumnSection>
        ))}
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
        frontmatter {
          title
          hero_body
          role_description
          role_image {
            childImageSharp {
              gatsbyImageData(width: 530)
            }
          }
          sections {
            title
            body
          }
        }
      }
    }
  }
`;
