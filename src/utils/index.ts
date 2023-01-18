export const isBrowser = () => {
  return typeof window !== `undefined`;
};

export const addTrailingSlash = (url: string) => {
  return url.endsWith("/") ? url : `${url}/`;
};
