import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { format } from "date-fns";

import * as styles from "./index.module.scss";
import { useSiteMetadata, useSocialShareLinks } from "@app/hooks";

export interface BlogPostTemplateProps {
  file: {
    childMdx: {
      body: string;
      frontmatter: {
        title: string;
        subtitle: string;
        date: string;
        featured: boolean;
        excerpt: string;
        author: string;
        categories: string[];
        summary_points: string[];
        hero_image: any;
      };
    };
  };
}

const BlogPostTemplate: FC<PageProps<BlogPostTemplateProps>> = (props) => {
  const { body, frontmatter } = props.data.file.childMdx;
  const {
    title,
    subtitle,
    date,
    featured,
    excerpt,
    author,
    categories,
    summary_points,
    hero_image,
  } = frontmatter;
  const heroImage = getImage(hero_image);
  const shareLinks = useSocialShareLinks(title);

  return (
    <>
      <div className={styles.hero}>
        <Container>
          <Row>
            <Col className="text-center" lg={{ span: 8, offset: 2 }}>
              <h1 className="mb-3">{title}</h1>
              <div className="subtitle mb-4">{subtitle}</div>
              <small>
                {format(new Date(date), "dd/MM/yyyy")} | By {author}
              </small>
            </Col>
          </Row>
        </Container>
      </div>

      {heroImage && (
        <div className={styles.imageSection}>
          <Container>
            <div className="d-flex justify-content-between align-items-center">
              <Parallax scale={[0.7, 1, "easeInQuad"]}>
                <GatsbyImage image={heroImage} alt="" />
              </Parallax>
            </div>
          </Container>
        </div>
      )}

      <div className={`mt-lg-6 mb-lg-8 my-4`}>
        <Container>
          <Row className="align-items-start">
            <Col md="4" lg="4" className={styles.leftMenu}>
              {/* Social share links */}
              <div>
                <a target="_blank" href={shareLinks.facebook}>
                  <i className={styles.fbIcon}></i>
                </a>
                <a target="_blank" href={shareLinks.twitter}>
                  <i className={styles.twitterIcon}></i>
                </a>
                <a target="_blank" href={shareLinks.linkedin}>
                  <i className={styles.linkedinIcon}></i>
                </a>
              </div>

              {/* Summary points */}
              <div className={styles.points}>
                <small>Summary points:</small>
                <ul>
                  {summary_points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col lg="1" className="d-none d-lg-block"></Col>
            <Col md="8" lg="7" className={styles.postContent}>
              {/* Content */}
              <MDXRenderer>{body}</MDXRenderer>

              <div className="mt-lg-6 mb-lg-5 my-5">
                <h2 className="mb-4">You may like</h2>
                <Row className="mb-5">
                  <Col md="3">
                    <StaticImage src="./artical.svg" alt="artical" />
                  </Col>
                  <Col md="9">
                    <small>6 Aug 2021 | Author</small>
                    <h3>Want to hire the best talent? Hire remote</h3>
                    <p>
                      Remote work has made hidden gems more accessible. When
                      will you take advantage?
                    </p>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col md="3">
                    <StaticImage src="./artical.svg" alt="artical" />
                  </Col>
                  <Col md="9">
                    <small>6 Aug 2021 | Author</small>
                    <h3>Want to hire the best talent? Hire remote</h3>
                    <p>
                      Remote work has made hidden gems more accessible. When
                      will you take advantage?
                    </p>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col md="3">
                    <StaticImage src="./artical.svg" alt="artical" />
                  </Col>
                  <Col md="9" className={styles.featuredPosts}>
                    <small>6 Aug 2021 | Author</small>
                    <h3>Want to hire the best talent? Hire remote</h3>
                    <p>
                      Remote work has made hidden gems more accessible. When
                      will you take advantage?
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
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
          subtitle
          date
          featured
          excerpt
          author
          categories
          summary_points
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
