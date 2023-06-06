import React from "react";
import { ThankYou2, SEO, AppHead } from "@app/components";

const DownloadPlusClosed = () => {
  return <ThankYou2 />;
};

export default DownloadPlusClosed;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO title="Ahh! You missed it." />
    </>
  );
};
