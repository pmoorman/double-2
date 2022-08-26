import { useLocation } from "@reach/router";

import { useSiteMetadata } from "./use-site-metadata";

export const useSocialShareLinks = (title: string) => {
  const { pathname } = useLocation();
  const { siteUrl } = useSiteMetadata();
  const url = `${siteUrl}${pathname}`;

  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
  };
};
