import React, { FC, HTMLAttributes } from "react";
import cn from "classnames";

import * as styles from "./index.module.scss";

export interface ImageProps extends HTMLAttributes<HTMLElement> {}

export const Image: FC<ImageProps> = ({ children, ...rest }) => {
  const className = cn(rest.className, styles.item);

  return (
    <div {...rest} className={className}>
      {children}
    </div>
  );
};
