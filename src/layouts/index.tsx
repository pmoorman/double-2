import React, { useEffect, useState } from "react";
import { PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useLocation } from "@reach/router";
import { MDXProvider } from "@mdx-js/react";
import { Button } from "react-bootstrap";
import { ParallaxProvider } from "react-scroll-parallax";

import "@app/styles/current/style.scss";
import * as styles from "./index.module.scss";

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
  Preloader,
} from "@app/components";
import { LoadingScreen } from "@app/components/loader";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);
  const { pathname } = useLocation();
  const hideNav = [
    pathname.startsWith("/academy") &&
      pathname !== "/academy/" &&
      pathname !== "/academy",
    pathname.startsWith("/long"),
    pathname.startsWith("/38-laws-of-growth"),
    pathname.startsWith("/38-laws-to-avoid-startup-disaster"),
    pathname.startsWith("/double-plus-closed"),
  ].some((p) => p);

  const hideFooter = [
    pathname.startsWith("/academy") &&
      pathname !== "/academy/" &&
      pathname !== "/academy",
    pathname.startsWith("/long"),
    pathname.startsWith("/contact"),
    pathname.startsWith("/38-laws-of-growth"),
    pathname.startsWith("/38-laws-to-avoid-startup-disaster"),
    pathname.startsWith("/double-plus-closed"),
  ].some((p) => p);
  const noFooter = ["/38-laws-of-growth"].some((p) => pathname.includes(p));

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  useEffect(() => {
    setIsLoading1(true);
    const timer = setTimeout(() => {
      setIsLoading1(false);
    }, 1650);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <ParallaxProvider>
      <SEO {...pageContext} />
      <Header hideNav={hideNav} />
      {isLoading && <LoadingScreen />}
        <div className={`${styles.animWrap} ${!isLoading1 && styles.loading}`}>
          <MDXProvider components={mdxComponents}>
            <main>{children}</main>
          </MDXProvider>
          {!hideFooter && <Footer />}
          {hideFooter && !noFooter && <FooterPolicy />}
        </div>
      <Preloader />
    </ParallaxProvider>
  );
};

export default Layout;
