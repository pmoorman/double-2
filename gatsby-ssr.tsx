import React from "react";
import { RenderBodyArgs } from "gatsby";

import WhiteLogo from "./static/images/white-logo.svg";

export const onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setBodyAttributes,
  setPostBodyComponents,
  pathname,
}: RenderBodyArgs) => {
  setHeadComponents([
    <script
      key="termly"
      type="text/javascript"
      src="https://app.termly.io/embed.min.js"
      data-auto-block="on"
      data-website-uuid="23df6c4a-8b72-4204-b05b-f0f485f3dc9c"
    />,
    pathname === "/" && (
      <link
        key="preloader-link"
        as="script"
        rel="preload"
        href="/scripts/preloader.js"
      />
    ),
    pathname === "/" && (
      <link key="preloader-css" rel="stylesheet" href="/css/preloader.css" />
    ),
  ]);

  if (pathname === "/") {
    setPreBodyComponents([
      <div id="preloader" className="customLoading" key="preloader-element">
        <div className="loading" id="counter"></div>

        <svg width="200" height="200" className="loadingPie">
          <circle r="50" cx="100" cy="100" className="loadingCircle" />
        </svg>

        <div className="preLogo">
          <div>
            <img src={WhiteLogo} className="logoImage" />
          </div>
        </div>

        <div className="halfCircle"></div>
      </div>,
    ]);

    setBodyAttributes({
      className: "preloader_active",
    });

    setPostBodyComponents([
      <script key="preloader-script" src="/scripts/preloader.js" />,
    ]);
  }
};

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();

  // reorder your array with the sort method, by putting your item at top
  const orderedComponents = headComponents.sort((item) =>
    item.key === "termly" ? -1 : item.key === "preloader" ? -1 : 1
  );
  replaceHeadComponents(orderedComponents);
};
