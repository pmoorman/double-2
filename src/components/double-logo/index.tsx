import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const DoubleLogo = () => {
  return (
    <div>
      <StaticImage
        alt="Double logo"
        src="./double-logo-black.svg"
        width={120}
      />
    </div>
  );
};
