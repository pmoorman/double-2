import React, { FC } from "react";
import { GatsbyLinkProps, Link as GatsbyLink } from "gatsby";

export interface LinkProps extends GatsbyLinkProps<any> {}

export const Link: FC<LinkProps> = ({ to, children, ref, ...rest }) => {
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
