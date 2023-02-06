import { graphql, useStaticQuery } from "gatsby";

import data from "../../content/data.json";

export interface SiteMetadata {
  siteUrl: string;
  title: string;
  keywords: string;
  description: string;
  recaptchaKey: string;

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
          keywords
          description
          recaptchaKey
        }
      }
    }
  `);

  return { ...site.siteMetadata, ...data } as SiteMetadata;
};
