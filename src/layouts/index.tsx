import React from "react";
import { PageProps } from "gatsby";
import "@app/styles/current/style.scss";

import { Footer, Header, SEO } from "@app/components";

export const Layout = ({ children, pageContext }: PageProps) => {
  return (
    <>
      <SEO {...pageContext} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
