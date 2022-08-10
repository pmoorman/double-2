import { graphql, useStaticQuery } from "gatsby";

import { TeamMemberData } from "@app/models";
import { getImage } from "gatsby-plugin-image";

export const useTeam = () => {
  const { file } = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "team" }
        relativePath: { eq: "index.md" }
      ) {
        relativePath
        childMarkdownRemark {
          frontmatter {
            members {
              name
              title
              location
              image {
                childImageSharp {
                  gatsbyImageData(width: 298, height: 368)
                }
              }
            }
          }
        }
      }
    }
  `);

  const items: TeamMemberData[] =
    file.childMarkdownRemark.frontmatter.members.map((m: any) => {
      const { name, title, location, image } = m;
      return {
        name,
        title,
        location,
        image: getImage(image),
      };
    });

  return items;
};
