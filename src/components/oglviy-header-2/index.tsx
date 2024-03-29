import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import cn from "classnames";

import { OgilvyForm } from "@app/components";

import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";

export interface OgilvyHeader2Props {
  formId: string;
}

export const OgilvyHeader2: FC<OgilvyHeader2Props> = ({ formId }) => {
  return (
    <div>
      <Row>
        <Col lg={6} className="pe-0">
          <StaticImage
            src="./ogl-image.jpg"
            alt="hero image"
            objectFit="cover"
            objectPosition={"50% 50%"}
            className="h-100 d-none d-md-block"
          />
          <StaticImage
            src="./ogl-image-mobile.jpg"
            alt="hero image"
            objectFit="cover"
            objectPosition={"50% 50%"}
            className="h-100 d-md-none"
          />
        </Col>
        <Col lg={6} className={cn(styles.blueSection, "ps-0")}>
          <Container>
            <Row className="px-md-7 py-md-5 text-white">
              <Col md={12}>
                <h1 className="mb-5 mt-4 mt-lg-0 mb-lg-5">
                  38 laws to avoid startup disaster
                </h1>
              </Col>
              <h3>Download your free copy</h3>
              <Col md={6}>
                <OgilvyForm
                  formId={formId}
                  buttonProps={{
                    variant: "primary",
                  }}
                  recaptchaProps={{
                    theme: "dark",
                    className: "mt-3 mt-md-5",
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </div>
  );
};
