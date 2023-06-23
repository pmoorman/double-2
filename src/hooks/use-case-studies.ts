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
        sort: { fields: [childMdx___frontmatter___weight] }
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
                homepageweight
                has_single_page
                categories
                stats {
                  title
                  value
                }
                grid_item {
                  title
                  subtitle
                  size
                  weight
                  align
                  tags
                  hover_tags
                  image {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
                section {
                  type
                  on_homepage
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
                carousel {
                  weight
                  image {
                    childImageSharp {
                      gatsbyImageData(width: 420, quality: 100)
                    }
                  }
                }
                featured
                featured_subtitle
                featured_title
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
      pageSubtitle,
      subtitle,
      excerpt,
      logo,
      weight,
      homepageweight,
      has_single_page,
      categories,
      stats,
      section = {},
      carousel = {},
      featured,
      featured_thumbnail,
      featured_subtitle,
      featured_title,
      grid_item,
    } = childMdx.frontmatter;

    const sectionNode = sections.edges.find(
      (edge: any) => edge.node.relativeDirectory === relativeDirectory
    );
    const sectionBody = sectionNode?.node?.childMdx?.body;
    const embeddedImages =
      sectionNode?.node.childMdx.frontmatter.embeddedImages;

    const gridItem =
      grid_item || grid_item?.sort((a: any, b: any) => a.weight - b.weight);

    const item: CaseStudy = {
      embeddedImages,
      pageSubtitle,
      slug: `/case-studies/${relativeDirectory}`,
      title: title || "",
      subtitle: subtitle || "",
      excerpt: excerpt || "",
      logo: getImage(logo),
      weight,
      homepageweight,
      categories: categories || [],
      has_single_page: has_single_page || false,
      stats: stats || [],
      section: {
        ...section,
        body: sectionBody,
        image: getImage(section?.image),
        image_url: section?.image?.publicURL,
      },
      carousel: {
        ...carousel,
        image: carousel?.image ? getImage(carousel.image) : undefined,
      },
      featured: !!featured,
      featured_subtitle: featured_subtitle || "",
      featured_title: featured_title || "",
      featured_thumbnail: featured_thumbnail
        ? getImage(featured_thumbnail)
        : undefined,
      hero_image: "",
      body_image: "",
      page_logo_image: "",
      process: childMdx.frontmatter.process,
      how_we_did_it: "",
      results: {
        body: "",
        image: "",
      },
      grid_item: {
        ...gridItem,
        image: getImage(gridItem?.image),
      },
    };

    return item;
  });

  return items;
};
