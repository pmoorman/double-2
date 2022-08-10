import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

export interface BlogPostTemplateProps {
  file: {
    childMdx: {
      body: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const BlogPostTemplate: FC<PageProps<BlogPostTemplateProps>> = (props) => {
  const { frontmatter } = props.data.file.childMdx;

  return (
    <Container>
      <Row>
        <Col>
          <h2>{frontmatter.title}</h2>
          <p>BlogPostTemplate</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query ($relativePath: String!) {
    file(
      relativePath: { eq: $relativePath }
      sourceInstanceName: { eq: "blog" }
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
