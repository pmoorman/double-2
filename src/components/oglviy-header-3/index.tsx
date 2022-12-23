import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import cn from "classnames";

import { OgilvyForm } from "@app/components";

import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";

export interface OgilvyHeader3Props {
  dripId: string;
}

export const OgilvyHeader3: FC<OgilvyHeader3Props> = ({ dripId }) => {
  return (
    <div>
      <Row>
        <Col md={4} className={cn(styles.blueSection, "pe-0")}>
          <Container>
            <Row className="p-md-7 text-white">
              <Col md={12}>
                <h1 className="mb-3 mt-4 mt-lg-0 mb-lg-5 h2">
                  Dowload your free copy
                </h1>
              </Col>

              <Col md={12}>
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
        <Col md={8} className="ps-0">
          <StaticImage
            src="./ogl-image-2.jpg"
            alt="hero image"
            objectFit="cover"
            objectPosition={"50% 50%"}
            className="h-100"
          />
        </Col>
      </Row>
    </div>
  );
};
