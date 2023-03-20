import { FC } from "react";
import { Link, LinkProps } from "./components";

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.yaml" {
  const content: { [key: string]: any };
  export = content;
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpg";
declare module "*.mp4";
declare module "*.pdf";
