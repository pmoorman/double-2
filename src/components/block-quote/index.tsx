import React, { FC } from "react";

import * as styles from "./index.module.scss";

export interface BlockQuoteProps {
  name: string;
  title?: string;
  location?: string;
}

export const BlockQuote: FC<BlockQuoteProps> = ({
  children,
  name,
  title,
  location,
}) => {
  const hasFooter = !!(name || title || location);

  return (
    <blockquote className={styles.blockquote}>
      <div className={styles.quoteLine}></div>
      <p>“{children}”</p>
      {hasFooter && (
        <footer>
          <div>{name}</div>
          {title && <div>{title}</div>}
          {location && (
            <div className="d-flex align-items-center">
              <i className={styles.mapIcon}></i>
              {location}
            </div>
          )}
        </footer>
      )}
    </blockquote>
  );
};
