import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import { BlogPost } from "@app/models";

export interface UseBlogPostsProps {
  categories?: string[];
  featured?: boolean;
  exclude?: string[];
  limit?: number;
}

export const useBlogPosts = (props?: UseBlogPostsProps) => {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "blog" }
          relativePath: { glob: "**/*/index.mdx" }
          extension: { eq: "mdx" }
        }
      ) {
        edges {
          node {
            childMdx {
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
                thumbnail {
                  childImageSharp {
                    gatsbyImageData(width: 420, layout: FULL_WIDTH)
                  }
                }
                hero_image {
                  childImageSharp {
                    gatsbyImageData(width: 700)
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const posts: BlogPost[] = allFile.edges
    .filter((edge: any) =>
      props?.exclude ? !props.exclude.includes(edge.node.childMdx.slug) : true
    )
    .filter((edge: any) => {
      return props?.featured ? edge.node.childMdx.frontmatter.featured : true;
    })
    .filter((edge: any) => {
      return props?.categories
        ? edge.node.childMdx.frontmatter.categories.some((c: string) =>
            props?.categories?.includes(c)
          )
        : true;
    })
    .map((edge: any) => {
      const { frontmatter, slug } = edge.node.childMdx;
      return {
        ...frontmatter,
        thumbnail: frontmatter.thumbnail
          ? getImage(frontmatter.thumbnail)
          : undefined,
        slug: `/blog/${slug}`,
      };
    });

  return posts.slice(0, props?.limit || 1000);
};
