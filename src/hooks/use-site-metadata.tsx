import { graphql, useStaticQuery } from "gatsby";

export interface SiteMetadata {
  siteUrl: string;
  title: string;
  description: string;
}

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          title
          description
        }
      }
    }
  `);

  return site.siteMetadata as SiteMetadata;
};
