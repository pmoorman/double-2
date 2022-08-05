import React from "react";
import { PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

import "@app/styles/current/style.scss";

import { Footer, Header, SEO, DoubleLogo } from "@app/components";

const mdxComponents = { DoubleLogo };

export const Layout = ({ children, pageContext }: PageProps) => {
  return (
    <>
      <SEO {...pageContext} />
      <Header />
      <MDXProvider components={mdxComponents}>
        <main>{children}</main>
      </MDXProvider>
      <Footer />
    </>
  );
};

export default Layout;
