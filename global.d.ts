declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.yaml" {
  const content: { [key: string]: any };
  export = content;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.mp4";
declare module "*.pdf";
declare module "*.svg";
