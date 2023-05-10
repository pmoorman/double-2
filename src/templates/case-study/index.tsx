import React, { FC } from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { Col, Container, Row } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

import {
  ImageRow,
  HeadingRow,
  Image,
  BlockQuote,
  AppHead,
  SEO,
} from "@app/components";
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
    body_image,
    page_logo_image,
    stats,
    how_we_did_it,
    results,
    milestones,
    process,
    pageSubtitle,
    quote,
  } = frontmatter;

  const bodyImage = getImage(body_image);
  const heroImage = getImage(hero_image);
  const pageLogo = getImage(page_logo_image);
  const resultsImage = getImage(results.image);
  const processImage = getImage(process?.image);
  const quoteImage = getImage(quote?.image);

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
              {pageLogo && (
                <GatsbyImage
                  image={pageLogo}
                  alt={title}
                  className={styles.logoImage}
                  objectFit="contain"
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
        {bodyImage && (
          <Image className="mt-lg-8  mt-5">
            <GatsbyImage image={bodyImage} alt="Cover Image" />
          </Image>
        )}
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
      {process && (
        <div className={styles.processSection}>
          <Container>
            <div className={styles.processes}>
              <h2 className="mb-4">Our process</h2>
              <div className="subtitle mb-6">{process.process_subtitle}</div>
            </div>
            <div>
              {processImage && (
                <Image>
                  <GatsbyImage image={processImage} alt="Process" />
                </Image>
              )}
            </div>
          </Container>
        </div>
      )}

      {quote && (
        <Container>
          <BlockQuote
            name={<h4>{quote.name}</h4>}
            title={<strong>{quote.title}</strong>}
            subtitle={quote.subtitle}
            image={
              quoteImage && <GatsbyImage image={quoteImage} alt="Process" />
            }
            quoteStyle={{ color: "#1288FF", fontSize: "24px" }}
            quoteLineStyle={{ borderColor: "#1288FF" }}
          >
            <span>{quote.content}</span>
          </BlockQuote>
        </Container>
      )}

      {milestones && (
        <Container>
          <div className="mt-lg-7 mb-lg-6 mt-5">
            <h2 className="mb-5 d-flex justify-content-center">Milestones</h2>
          </div>
        </Container>
      )}

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
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 650)
            }
          }
          body_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          page_logo_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          stats {
            title
            value
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
          process {
            process_subtitle
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          quote {
            content
            name
            title
            subtitle
            image {
              childImageSharp {
                gatsbyImageData(width: 400)
              }
            }
          }
        }
      }
    }
  }
`;

export const Head: HeadFC<CaseStudyTemplateProps> = ({ data }) => {
  const { frontmatter } = data.file.childMdx;
  const { title, excerpt } = frontmatter;

  return (
    <>
      <AppHead />
      <SEO title={`${title} - Double Agency`} description={excerpt} />
    </>
  );
};
