import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

export interface CareerTemplateProps {
  mdx: {
    body: string;
    frontmatter: {
      title: string;
    };
  };
}

const CareerTemplate: FC<PageProps<CareerTemplateProps>> = (props) => {
  const { mdx } = props.data;

  return (
    <Container>
      <Row>
        <Col>
          <h2>{mdx.frontmatter.title}</h2>
          <p>CareerTemplate</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CareerTemplate;

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
