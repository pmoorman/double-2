import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";

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
    <Container>
      <Row>
        <Col>
          <h2>{frontmatter.title}</h2>
          <p>CareerTemplate</p>
        </Col>
      </Row>
    </Container>
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
