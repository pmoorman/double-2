import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

export interface ServiceTemplateProps {
  mdx: {
    body: string;
    frontmatter: {
      title: string;
    };
  };
}

const ServiceTemplate: FC<PageProps<ServiceTemplateProps>> = (props) => {
  const { mdx } = props.data;

  return (
    <Container>
      <Row>
        <Col>
          <h2>{mdx.frontmatter.title}</h2>
          <p>ServiceTemplate</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceTemplate;

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
