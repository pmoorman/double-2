import React from "react";
import { ThankYou, SEO, AppHead } from "@app/components";

const OglviyThankYou = () => {
  return <ThankYou />;
};

export default OglviyThankYou;

export const Head = () => {
  return (
    <>
      <AppHead />
      <SEO title="Thank you" />
    </>
  );
};
