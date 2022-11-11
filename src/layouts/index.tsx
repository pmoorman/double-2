import React from "react";
import { PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useLocation } from "@reach/router";
import { MDXProvider } from "@mdx-js/react";
import { Button } from "react-bootstrap";
import { ParallaxProvider } from "react-scroll-parallax";

import "@app/styles/current/style.scss";

import {
  Footer,
  Header,
  SEO,
  DoubleLogo,
  Link,
  TwoColumnSection,
  TwoColumnSectionWithImage,
  BlockQuote,
  FooterPolicy,
} from "@app/components";

const mdxComponents = {
  DoubleLogo,
  TwoColumnSection,
  TwoColumnSectionWithImage,
  Button,
  Link,
  StaticImage,
  BlockQuote,
};

export const Layout = ({ children, pageContext }: PageProps) => {
  const { pathname } = useLocation();
  const hideNav = ["/short", "/long"].some((p) => pathname.includes(p));

  console.log({ pathname });

  const hideFooter = ["/contact", "/short", "/long"].some((p) =>
    pathname.includes(p)
  );

  return (
    <ParallaxProvider>
      <SEO {...pageContext} />
      <Header hideNav={hideNav} />
      <MDXProvider components={mdxComponents}>
        <main>{children}</main>
      </MDXProvider>
      {!hideFooter && <Footer />}
      <FooterPolicy />
    </ParallaxProvider>
  );
};

export default Layout;
