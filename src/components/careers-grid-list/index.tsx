import React from "react";
import { Button, Row, Col } from "react-bootstrap";

import { useCareers } from "@app/hooks";
import { CareerData } from "@app/models";

export const CareersGridList = () => {
  const careers = useCareers();

  const renderItem = (career: CareerData) => (
    <Col md={4} key={career.title}>
      <h3>{career.title}</h3>
      <p>{career.location}</p>
      <p>{career.excerpt}</p>
      <Button variant="text">More Info</Button>
    </Col>
  );

  return <Row>{careers.map(renderItem)}</Row>;
};
