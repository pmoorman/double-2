import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Parallax } from "react-scroll-parallax";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { format } from "date-fns";

import { useBlogPosts, useSocialShareLinks } from "@app/hooks";
import { BlogPost } from "@app/models";

import * as styles from "./index.module.scss";
import { SectionFeaturedArticles } from "@app/components";

export interface BlogPostTemplateProps {
  file: {
    childMdx: {
      slug: string;
      body: string;
      frontmatter: BlogPost;
    };
  };
}

const BlogPostTemplate: FC<PageProps<BlogPostTemplateProps>> = (props) => {
  const { slug, body, frontmatter } = props.data.file.childMdx;
  const {
    title,
    subtitle,
    date,
    featured,
    excerpt,
    author,
    categories,
    summary_items,
    hero_image,
  } = frontmatter;
  const heroImage = getImage(hero_image);
  const shareLinks = useSocialShareLinks(title);
  const posts = useBlogPosts({
    categories: categories,
    exclude: [slug],
    limit: 3,
  });

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
            <div className="d-flex justify-content-center align-items-center">
              <Parallax scale={[0.7, 1, "easeInQuad"]}>
                <GatsbyImage image={heroImage} alt={title} />
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
                  {summary_items.map((point) => (
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
                <SectionFeaturedArticles title="You may like" posts={posts} />
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
        slug
        frontmatter {
          title
          subtitle
          date
          featured
          excerpt
          author
          categories
          summary_items
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 700)
            }
          }
        }
      }
    }
  }
`;
