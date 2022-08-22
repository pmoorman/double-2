import { graphql, useStaticQuery } from "gatsby";

import { CareerData } from "@app/models";

export const useCareers = () => {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "careers" }, ext: { eq: ".mdx" } }
      ) {
        edges {
          node {
            childMdx {
              slug
              frontmatter {
                excerpt
                location
                title
              }
            }
          }
        }
      }
    }
  `);

  const careers: CareerData[] = allFile.edges.map((edge: any) => ({
    title: edge.node.childMdx.frontmatter.title,
    location: edge.node.childMdx.frontmatter.location,
    excerpt: edge.node.childMdx.frontmatter.excerpt,
    slug: `/careers/${edge.node.childMdx.slug}`,
  }));

  return careers;
};
