import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SEO } from "@app/components";

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
    <>
      <SEO
        title="Privacy Policy - Double Agency"
        keywords="Double Agency Privacy Policy"
        description="This privacy notice for Double LLC describes how and why we might collect, store, use, and/or share your information when you use our services."
      />
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
    </>
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
