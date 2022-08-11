import React, { FC } from "react";

import { Hero1 } from "./hero-1";

export interface HeroProps {
  type: 1;
  title: string;
  body: string;
  image: any;
  buttonText: string;
  buttonLink: string;
}

export const Hero: FC<HeroProps> = (props) => {
  switch (props.type) {
    case 1:
      return <Hero1 {...props} />;
    default:
      return null;
  }
};
