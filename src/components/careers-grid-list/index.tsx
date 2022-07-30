import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import cn from "classnames";

import { useCareers } from "@app/hooks";
import { CareerData } from "@app/models";
import { Link } from "@app/components";

import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";

export const CareersGridList = () => {
  const careers = useCareers();

  const renderItem = (career: CareerData) => (
    <Col md={4} key={career.title}>
      <div className={cn(styles.item, "p-4")}>
        <div className={styles.itemContent}>
          <h3>{career.title}</h3>
          <div className="d-flex align-items-center mb-3">
            <StaticImage alt="" src="./pin_icon.svg" />
            <p className="mb-0 ms-2">{career.location}</p>
          </div>
          <p>{career.excerpt}</p>
        </div>
        <div>
          <Button as={Link} to="/TODO" variant="outline-secondary">
            More info
          </Button>
        </div>
      </div>
    </Col>
  );

  return <Row>{careers.map(renderItem)}</Row>;
};
