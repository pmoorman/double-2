import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import cn from "classnames";

import { OgilvyForm } from "@app/components";

import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";

export interface OgilvyHeader2Props {
  dripId: string;
}

export const OgilvyHeader2: FC<OgilvyHeader2Props> = ({ dripId }) => {
  return (
    <div>
      <Row>
        <Col md={6} className="pe-0">
          <StaticImage
            src="./ogl-image.jpg"
            alt="hero image"
            objectFit="cover"
            objectPosition={"50% 50%"}
            className="h-100"
          />
        </Col>
        <Col md={6} className={cn(styles.blueSection, "ps-0")}>
          <Container>
            <Row className="p-md-7 text-white">
              <Col md={12}>
                <h1 className="mb-3 mt-4 mt-lg-0 mb-lg-5">
                  38 laws to avoid startup disaster
                </h1>
              </Col>
              <h3>Download your free copy</h3>
              <Col md={6}>
                <OgilvyForm
                  dripId={dripId}
                  buttonProps={{
                    variant: "primary",
                  }}
                  recaptchaProps={{
                    theme: "dark",
                    className: "mt-5",
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
