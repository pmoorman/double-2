import React from "react";
import { ThankYou, SEO, AppHead } from "@app/components";

const OglviyThankYou = () => {
  return <ThankYou 
  title={<span style={{ fontSize: "50px" }}>Success! The first lesson is on the way.</span>}
  subtitle={<span style={{ fontSize: "25px" }}>Please check your email inbox. 
  <br />
  If you don’t find it, it might be in the promotions or the spam folders.</span>}
  />;
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
