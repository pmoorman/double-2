import { graphql, useStaticQuery } from "gatsby";

import { CaseStudy } from "@app/models";
import { getImage } from "gatsby-plugin-image";

export const useCaseStudies = () => {
  const { pages, sections } = useStaticQuery(graphql`
    {
      sections: allFile(
        filter: {
          sourceInstanceName: { eq: "case-studies" }
          relativePath: { glob: "**/*/section.mdx" }
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
          sourceInstanceName: { eq: "case-studies" }
          relativePath: { glob: "**/*/index.mdx" }
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
                subtitle
                excerpt
                logo {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
                weight
                has_single_page
                categories
                stats {
                  title
                  value
                }
                section {
                  type
                  on_homepage
                  hide_arrow
                  quote {
                    content
                    name
                    title
                  }
                  image {
                    publicURL
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                featured
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
      excerpt,
      logo,
      weight,
      has_single_page,
      categories,
      stats,
      section = {},
      featured,
      featured_thumbnail,
    } = childMdx.frontmatter;

    const sectionNode = sections.edges.find(
      (edge: any) => edge.node.relativeDirectory === relativeDirectory
    );
    const sectionBody = sectionNode?.node?.childMdx?.body;
    const embeddedImages =
      sectionNode?.node.childMdx.frontmatter.embeddedImages;

    const item: CaseStudy = {
      embeddedImages,
      slug: `/case-studies/${relativeDirectory}`,
      title: title || "",
      subtitle: subtitle || "",
      excerpt: excerpt || "",
      logo: getImage(logo),
      weight,
      categories: categories || [],
      has_single_page: has_single_page || false,
      stats: stats || [],
      section: {
        ...section,
        body: sectionBody,
        image: getImage(section.image),
        image_url: section.image.publicURL,
      },
      featured: !!featured,
      featured_thumbnail: featured_thumbnail
        ? getImage(featured_thumbnail)
        : undefined,
      hero_image: "",
      how_we_did_it: "",
      results: {
        body: "",
        image: "",
      },
    };

    return item;
  });

  return items;
};
