import { graphql, useStaticQuery } from "gatsby";

import { TeamMemberData } from "@app/models";
import { getImage } from "gatsby-plugin-image";

export type UseTeamProps = {
  sortByName?: boolean;
};

export const useTeam = (props?: UseTeamProps) => {
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

  if (props?.sortByName) {
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }

  return items;
};
