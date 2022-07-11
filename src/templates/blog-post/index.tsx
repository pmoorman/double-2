import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

export interface BlogPostTemplateProps {
  mdx: {
    body: string;
    frontmatter: {
      title: string;
    };
  };
}

const BlogPostTemplate: FC<PageProps<BlogPostTemplateProps>> = (props) => {
  const { mdx } = props.data;

  return (
    <Container>
      <Row>
        <Col>
          <h2>{mdx.frontmatter.title}</h2>
          <p>BlogPostTemplate</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPostTemplate;

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
