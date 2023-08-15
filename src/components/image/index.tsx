import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";

import * as styles from "./index.module.scss";

export interface ImageProps extends HTMLAttributes<HTMLElement> {
  double?: boolean;
}

export const Image: FC<ImageProps> = ({ double, children, ...rest }) => {
  const className = cn(rest.className, {
    [styles.single]: !double,
    [styles.double]: double,
  });

  return (
    <div {...rest} className={className}>
      {children}
    </div>
  );
};
