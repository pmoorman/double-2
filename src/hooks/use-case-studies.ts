import { graphql, useStaticQuery } from "gatsby";

import { CaseStudy } from "@app/models";
import { getImage } from "gatsby-plugin-image";

export const useCaseStudies = () => {
  const { pages, sections } = useStaticQuery(graphql`
    {
      sections: allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          relativePath: { glob: "case-studies/**/*/section.mdx" }
          extension: { eq: "mdx" }
        }
      ) {
        edges {
          node {
            relativeDirectory
            childMdx {
              body
              frontmatter {
                embeddedImages {
                  childImageSharp {
                    gatsbyImageData(layout: FULL_WIDTH)
                  }
                }
              }
            }
            relativePath
          }
        }
      }
      pages: allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          relativePath: { glob: "case-studies/**/*/index.mdx" }
          extension: { eq: "mdx" }
        }
        sort: { fields: childMdx___frontmatter___weight }
      ) {
        edges {
          node {
            relativeDirectory
            childMdx {
              frontmatter {
                title
                categories
                featured
                show_on_homepage
                hero_body
                hero_image {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                logo {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                quote {
                  content
                  name
                  title
                }
                section_type
                stats {
                  title
                  value
                }
                subtitle
                featured_thumbnail {
                  childImageSharp {
                    gatsbyImageData(
                      width: 299
                      height: 299
                      layout: FIXED
                      transformOptions: { fit: COVER }
                    )
                  }
                }
                image {
                  publicURL
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const items: CaseStudy[] = pages.edges.map((edge: any) => {
    const { relativeDirectory, childMdx } = edge.node;
    const {
      title,
      subtitle,
      categories,
      hero_body,
      hero_image,
      featured_thumbnail,
      image,
      logo,
      quote,
      section_type,
      stats,
      featured,
      show_on_homepage,
    } = childMdx.frontmatter;

    const section = sections.edges.find(
      (edge: any) => edge.node.relativeDirectory === relativeDirectory
    );
    const sectionBody = section?.node?.childMdx?.body;
    const embeddedImages = section?.node.childMdx.frontmatter.embeddedImages;

    const item: CaseStudy = {
      title,
      subtitle,
      categories: categories || [],
      hero_body,
      hero_image: getImage(hero_image),
      image: getImage(image),
      image_url: image.publicURL,
      logo: getImage(logo),
      quote,
      section_type,
      stats,
      slug: `/${relativeDirectory}`,
      section_body: sectionBody,
      embeddedImages: embeddedImages || [],
      featured,
      show_on_homepage,
      featured_thumbnail: featured_thumbnail
        ? getImage(featured_thumbnail)
        : undefined,
    };

    return item;
  });

  return items;
};
