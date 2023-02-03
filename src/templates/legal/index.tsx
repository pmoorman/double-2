import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { MDXRenderer } from "gatsby-plugin-mdx";

import * as styles from "./index.module.scss";

interface LegalDetailsPageProps {
  file: {
    childMdx: {
      body: any;
      frontmatter: {
        title: string;
      };
    };
  };
}

export const LegalDetailsPage: FC<PageProps<LegalDetailsPageProps>> = ({
  data,
}) => {
  const { body, frontmatter } = data.file.childMdx;
  const { title } = frontmatter;
  return (
    <Container>
      {/* Hero */}
      <section className="my-5">
        <Row className="justify-content-center">
          {/* Title */}
          <Col>
            <h1 className="mb-0 text-center">{title}</h1>
          </Col>
        </Row>
      </section>

      {/* Content */}
      <section className={styles.content}>
        <Row className="justify-content-center mb-6">
          <Col md={10}>
            <MDXRenderer>{body}</MDXRenderer>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default LegalDetailsPage;

export const query = graphql`
  query ($relativePath: String!) {
    file(
      sourceInstanceName: { eq: "legal" }
      relativePath: { eq: $relativePath }
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
