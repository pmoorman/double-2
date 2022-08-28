import { graphql, useStaticQuery } from "gatsby";

import data from "../../content/data.json";

export interface SiteMetadata {
  siteUrl: string;
  title: string;
  description: string;

  contact_email: string;
  contact_phone: string;
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

  return { ...site.siteMetadata, ...data } as SiteMetadata;
};
