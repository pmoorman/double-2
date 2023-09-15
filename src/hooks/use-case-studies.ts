import { graphql, useStaticQuery } from "gatsby";

import { CaseStudy } from "@app/models";
import { getImage } from "gatsby-plugin-image";

export const useCaseStudies = () => {
  const { pages } = useStaticQuery(graphql`
    {
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
                  homepageweight
                  homepageimage {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  image {
                    childImageSharp {
                      gatsbyImageData
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

    if (!childMdx?.frontmatter) {
      console.log("No frontmatter for", relativeDirectory);
      console.log("childMdx", childMdx);
    }

    const {
      title,
      pageSubtitle,
      subtitle,
      excerpt,
      logo,
      weight,
      has_single_page,
      categories,
      stats,
      featured,
      featured_thumbnail,
      featured_subtitle,
      featured_title,
      grid_item,
    } = childMdx.frontmatter;

    const gridItem =
      grid_item || grid_item?.sort((a: any, b: any) => a.weight - b.weight);

    const item: CaseStudy = {
      pageSubtitle,
      slug: `/case-studies/${relativeDirectory}`,
      title: title || "",
      subtitle: subtitle || "",
      excerpt: excerpt || "",
      logo: getImage(logo),
      weight,
      categories: categories || [],
      has_single_page: has_single_page || false,
      stats: stats || [],
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
        homepageimage: gridItem?.homepageimage
          ? getImage(gridItem?.homepageimage)
          : getImage(gridItem?.image),
      },
    };

    return item;
  });

  return items;
};
