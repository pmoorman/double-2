import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";

import { ImageRow, HeadingRow } from "@app/components";
import { CaseStudy } from "@app/models";

import * as styles from "./index.module.scss";
import ReactMarkdown from "react-markdown";

export interface CaseStudyTemplateProps {
  file: {
    childMdx: {
      frontmatter: CaseStudy;
    };
  };
}

const CaseStudyTemplate: FC<PageProps<CaseStudyTemplateProps>> = (props) => {
  const { frontmatter } = props.data.file.childMdx;
  const {
    title,
    subtitle,
    excerpt,
    hero_image,
    logo,
    stats,
    how_we_did_it,
    results,
    milestones,
  } = frontmatter;

  const heroImage = getImage(hero_image);
  const logoImage = getImage(logo);
  const resultsImage = getImage(results.image);

  return (
    <div>
      <Container>
        <Row>
          <div className="pt-lg-7 pb-lg-8 py-4">
            <ImageRow
              imageOrder="last"
              image={
                heroImage && (
                  <GatsbyImage
                    image={heroImage}
                    alt=""
                    className="cutted_image"
                  />
                )
              }
            >
              {logoImage && <GatsbyImage image={logoImage} alt="" />}
              <h2 className="mb-3">{title}</h2>
              <h3 className="mb-3">{subtitle}</h3>
              <p>{excerpt}</p>
            </ImageRow>
          </div>
        </Row>
      </Container>

      {stats && (
        <div className={`py-lg-7 py-5 + ${styles.blueBg}`}>
          <Container>
            <div className="numberStat">
              {stats.map((stat) => (
                <div key={stat.title}>
                  <div className="mb-lg-3 mb-0">{stat.value}</div>
                  <span>{stat.title}</span>
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}

      <HeadingRow>
        <h2>Strategy</h2>
      </HeadingRow>
      <Container>
        {how_we_did_it && (
          <Row>
            <Col md="6">
              <h3>How we did it</h3>
            </Col>
            <Col md="6">
              <ReactMarkdown>{how_we_did_it}</ReactMarkdown>
            </Col>
          </Row>
        )}
        {results && (
          <div className="mt-lg-7 mb-lg-7 mb-6 mt-5">
            <ImageRow
              imageOrder="last"
              image={
                resultsImage && (
                  <GatsbyImage
                    image={resultsImage}
                    alt="Results"
                    className="cutted_image m-3"
                  />
                )
              }
            >
              <h3 className="mb-3">Results</h3>
              <ReactMarkdown>{results.body}</ReactMarkdown>
            </ImageRow>
          </div>
        )}
      </Container>

      <div className={styles.processSection}>
        <Container>
          <div className={styles.processes}>
            <h2>Our process</h2>
            <div className="subtitle">
              Since there was a strong foundation we could start implementing
              right away and learn faster.
            </div>
          </div>
          <div>
            <StaticImage src="./graph.svg" alt="Process" />
          </div>
        </Container>
      </div>

      <Container>
        <div className="mt-lg-7 mt-5">
          <h2 className="mb-5 d-flex justify-content-center">Key milestones</h2>
        </div>
      </Container>

      {milestones?.map((m, i) => {
        const image = getImage(m.image);

        return (
          <div className="gray" key={m.title}>
            <Container>
              <Row className="pt-lg-7 pb-lg-5 py-5">
                <Col lg="5">
                  <h3 className="mb-5">{m.title}</h3>
                  {image && (
                    <GatsbyImage
                      image={image}
                      alt={`Milestone ${i + 1}`}
                      className="cutted_image"
                    />
                  )}
                </Col>
                <Col
                  lg="1"
                  className="d-flex justify-content-lg-end my-3 my-lg-0"
                >
                  <div className="number">{`0${i + 1}`}</div>
                </Col>
                <Col lg="6">
                  <p>{m.body}</p>
                </Col>
              </Row>
            </Container>
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudyTemplate;

export const pageQuery = graphql`
  query ($relativePath: String!) {
    file(
      relativePath: { eq: $relativePath }
      sourceInstanceName: { eq: "case-studies" }
    ) {
      childMdx {
        frontmatter {
          title
          subtitle
          excerpt
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 650)
            }
          }
          stats {
            title
            value
          }
          logo {
            childImageSharp {
              gatsbyImageData(height: 128)
            }
          }
          results {
            body
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          how_we_did_it
          milestones {
            title
            body
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
