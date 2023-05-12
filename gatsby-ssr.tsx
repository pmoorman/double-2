import React from "react";
import { RenderBodyArgs } from "gatsby";

export const onRenderBody = ({ setHeadComponents }: RenderBodyArgs) => {
  setHeadComponents([
    <script
      key="termly"
      type="text/javascript"
      src="https://app.termly.io/embed.min.js"
      data-auto-block="on"
      data-website-uuid="23df6c4a-8b72-4204-b05b-f0f485f3dc9c"
    />,
  ]);
};

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents();

  // reorder your array with the sort method, by putting your item at top
  const orderedComponents = headComponents.sort((item) =>
    item.key === "termly" ? -1 : 1
  );
  replaceHeadComponents(orderedComponents);
};
