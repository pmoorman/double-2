import { graphql, useStaticQuery } from "gatsby";

import { Testimonial } from "@app/models";
import { getImage } from "gatsby-plugin-image";

export const useTestimonials = () => {
  const { file } = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "testimonials" }
        relativePath: { eq: "index.md" }
      ) {
        relativePath
        childMarkdownRemark {
          frontmatter {
            testimonials {
              quote
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

  const items: Testimonial[] =
    file.childMarkdownRemark.frontmatter.testimonials.map((m: any) => {
      const { quote, name, title, location, image } = m;
      return {
        quote,
        name,
        title,
        location,
        image: getImage(image),
      };
    });

  return items;
};
