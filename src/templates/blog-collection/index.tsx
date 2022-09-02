import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./index.module.scss";

export interface BlogCollectionProps {
  file: {
    childMdx: {
      body: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const BlogCollection: FC<PageProps<BlogCollectionProps>> = (props) => {
  const { frontmatter } = props.data.file.childMdx;

  return (
    <>
      <div className={styles.hero}>
        <Container>
          <Row className="justify-content-between">
            <Col md={8}>
              <h1 className="mb-4">Sales funnels</h1>
              <p className="mb-4">
                Our blog features the tools & mental models to help you maximise
                your team’s marketing efforts.
              </p>
            </Col>
            <Col md={4} className="text-lg-end">
              <StaticImage src="./hero.svg" alt="Sales funnels" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BlogCollection;

// export const pageQuery = graphql`
//   query ($relativePath: String!) {
//     file(
//       relativePath: { eq: $relativePath }
//       sourceInstanceName: { eq: "blog" }
//     ) {
//       childMdx {
//         body
//         frontmatter {
//           title
//         }
//       }
//     }
//   }
// `;
