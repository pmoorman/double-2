import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";

import * as styles from "./index.module.scss";

export interface ImageProps extends HTMLAttributes<HTMLElement> {
  double?: boolean;
  nocut?: boolean;
}

export const Image: FC<ImageProps> = ({ double, nocut, children, ...rest }) => {
  const className = cn(rest.className, {
    [styles.single]: !nocut && !double,
    [styles.double]: !nocut && double,
  });

  return (
    <div {...rest} className={className}>
      {children}
    </div>
  );
};
