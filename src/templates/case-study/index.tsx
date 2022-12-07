import React, { FC } from "react";
import { graphql, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

import { ImageRow, HeadingRow, Image } from "@app/components";
import { CaseStudy } from "@app/models";

import * as styles from "./index.module.scss";

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
    excerpt,
    hero_image,
    process_subtitle,
    process_graph,
    body_image,
    logo,
    stats,
    how_we_did_it,
    results,
    milestones,
    pageSubtitle,
  } = frontmatter;

  const bodyImage = getImage(body_image);
  const processGraph = getImage(process_graph);
  const heroImage = getImage(hero_image);
  const logoImage = getImage(logo);
  const resultsImage = getImage(results.image);
  ``;
  return (
    <div>
      <Container>
        <Row>
          <div className="pt-lg-7 pb-lg-8 py-4">
            <ImageRow
              imageOrder="last"
              image={
                heroImage && (
                  <Image>
                    <GatsbyImage image={heroImage} alt={title} />
                  </Image>
                )
              }
            >
              {logoImage && (
                <GatsbyImage
                  image={logoImage}
                  alt={title}
                  className={styles.logoImage}
                />
              )}
              <div className={styles.heroText}>
                <h1 className="mb-3">{title}</h1>
                <h3 className="mb-3">{pageSubtitle}</h3>
                <p>{excerpt}</p>
              </div>
            </ImageRow>
          </div>
        </Row>
      </Container>

      {stats && (
        <div className={`py-lg-7 py-5 + ${styles.blueBg}`}>
          <Container>
            <div className={styles.numberStat}>
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
        <h2>Situation</h2>
      </HeadingRow>
      <Container>
        {how_we_did_it && (
          <Row>
            <Col md="6"></Col>
            <Col md="6">
              <ReactMarkdown>{how_we_did_it}</ReactMarkdown>
            </Col>
          </Row>
        )}
        <Image className="mt-lg-8  mt-5">
          <GatsbyImage image={bodyImage} alt="Cover Image" />
        </Image>
        {results && (
          <div className="mt-lg-8 mb-lg-7 mb-6 mt-5">
            <ImageRow
              imageOrder="last"
              image={
                resultsImage && (
                  <Image className="m-3">
                    <GatsbyImage image={resultsImage} alt="Results" />
                  </Image>
                )
              }
            >
              <h3 className="mb-3">Strategy</h3>
              <ReactMarkdown>{results.body}</ReactMarkdown>
            </ImageRow>
          </div>
        )}
      </Container>

      <div className={styles.processSection}>
        <Container>
          <div className={styles.processes}>
            <h2 className="mb-4">Our process</h2>
            <div className="subtitle mb-6">{process_subtitle}</div>
          </div>
          <div>
            <Image>
              <GatsbyImage image={processGraph} alt="Process" />
            </Image>
          </div>
        </Container>
      </div>

      <Container>
        <div className="mt-lg-7 mt-5">
          <h2 className="mb-5 d-flex justify-content-center">Milestones</h2>
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
                    <Image>
                      <GatsbyImage image={image} alt={`Milestone ${i + 1}`} />
                    </Image>
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
          pageSubtitle
          excerpt
          process_subtitle
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 650)
            }
          }
          process_graph {
            childImageSharp {
              gatsbyImageData
            }
          }
          body_image {
            childImageSharp {
              gatsbyImageData
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
