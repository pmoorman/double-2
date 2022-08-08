import { graphql, useStaticQuery } from "gatsby";

import { CareerData } from "@app/models";

export const useCareers = () => {
  const { allFile } = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "content" }
          relativeDirectory: { glob: "careers/*" }
        }
      ) {
        edges {
          node {
            childMdx {
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
  }));

  return careers;
};
