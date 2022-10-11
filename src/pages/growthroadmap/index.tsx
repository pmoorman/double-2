import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Alert } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link, SEO, ImageRow, Image, QuizHeader } from "@app/components";

import * as styles from "./index.module.scss";

const GrowthRoadMap = () => {
  return (
    <>
      <SEO title="Personalised growth roadmap" />

      <QuizHeader></QuizHeader>

      <div id="audit"></div>
    </>
  );
};

export default GrowthRoadMap;
