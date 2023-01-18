import React, { FC } from "react";
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";

import { addTrailingSlash } from "@app/utils";

export interface LinkProps extends GatsbyLinkProps<any> {}

export const Link: FC<LinkProps> = ({ to: _to, children, ref, ...rest }) => {
  let to =
    _to.includes("#") || _to.startsWith("http") ? _to : addTrailingSlash(_to);

  // External link
  if (
    to?.startsWith("http") ||
    to?.startsWith("mailto") ||
    to?.startsWith("tel")
  ) {
    return (
      <a href={to} target="_blank" rel="noopener" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <GatsbyLink to={to} {...rest}>
      {children}
    </GatsbyLink>
  );
};
