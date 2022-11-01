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
  const hideNav = [
    "/freeguide/",
    "/download/",
    "/growthroadmap/",
    "/growthaudit",
  ].some((p) => pathname.includes(p));

  const hideFooter = [
    "/contact/",
    "/freeguide",
    "/download",
    "/growthroadmap/",
    "/growthaudit",
  ].some((p) => pathname.includes(p));

  return (
    <ParallaxProvider>
      <SEO {...pageContext} />
      <Header hideNav={hideNav} />
      <MDXProvider components={mdxComponents}>
        <main>{children}</main>
      </MDXProvider>
      {!hideFooter && <Footer />}
    </ParallaxProvider>
  );
};

export default Layout;
