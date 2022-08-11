import React, { FC } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { Link } from "@app/components";
import { HeroProps } from "..";

export const Hero1: FC<HeroProps> = ({
  title,
  body,
  buttonText,
  buttonLink,
  image,
}) => {
  return (
    <Container>
      <Row className="pt-lg-7 pb-lg-8 py-4">
        <Col lg="8" md="8">
          <h1 className="mb-lg-5 mb-4">{title}</h1>
          <div className="subtitle mb-lg-5 mb-4">{body}</div>
          <Button as={Link} to={buttonLink} variant="secondary">
            {buttonText}
          </Button>
        </Col>
        <Col lg="4" md="4" className="my-lg-0 my-4">
          {image}
        </Col>
      </Row>
    </Container>
  );
};
