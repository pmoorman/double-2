import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

export interface CaseStudyTemplateProps {
  mdx: {
    body: string;
    frontmatter: {
      title: string;
    };
  };
}

const CaseStudyTemplate: FC<PageProps<CaseStudyTemplateProps>> = (props) => {
  const { mdx } = props.data;

  return (
    <Container>
      <Row>
        <Col>
          <h2>{mdx.frontmatter.title}</h2>
          <p>CaseStudyTemplate</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CaseStudyTemplate;

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
      }
      body
    }
  }
`;
