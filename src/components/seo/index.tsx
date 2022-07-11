import React, { FC } from "react";
import Helmet from "react-helmet";

type MetaItem = { name?: string; property?: string; content: string };

export interface SEOProps {
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  isArticle?: boolean;
  image?: string;
  meta?: MetaItem[];
}

export const SEO: FC<SEOProps> = ({ seoTitle }) => {
  return <Helmet title={seoTitle} meta={[]} />;
};
