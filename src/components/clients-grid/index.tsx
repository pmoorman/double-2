import React, { FC, useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import cn from "classnames";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

import { CaseStudy } from "@app/models";
import { CaseStudyGridItem } from "@app/components";

import * as styles from "./index.module.scss";

export type ClientsGridProps = {
  caseStudies: CaseStudy[];
  quotes: Record<string, string>;
  amount?: number;
  getImage: (name: CaseStudy) => IGatsbyImageData;
};

export const ClientsGrid: FC<ClientsGridProps> = ({
  caseStudies,
  quotes,
  amount = 7,
  getImage,
}) => {
  const [more, setMore] = useState(false);

  const filteredCaseStudies = useMemo(() => {
    // Only show first 7 items if not "more" clicked
    return more ? caseStudies : caseStudies?.slice(0, amount);
  }, [caseStudies, more, amount]);

  const renderQuote = (q: any) => (
    <Col md={4} className="d-flex align-items-end mb-6">
      <div>
        <div
          className={cn(styles.quote, "p-4 text-white d-flex align-items-end")}
          style={{ background: q.background }}
        >
          <div>
            <h3>{q.quote}</h3>
            <p className="lead">{q.name}</p>
          </div>
        </div>
        <div style={{ height: "50px" }} />
      </div>
    </Col>
  );

  return (
    <Container>
      <Row>
        {filteredCaseStudies.map((c, i) => {
          if (!c.grid_item) return null;

          return (
            <>
              {quotes[`${i}`] && renderQuote(quotes[`${i}`])}

              <CaseStudyGridItem
                key={c.slug}
                slug={c.slug}
                size={c.grid_item.size}
                title={c.grid_item.title}
                subtitle={c.grid_item.subtitle}
                tags={c.grid_item.hover_tags}
                align={c.grid_item.align}
                image={
                  <GatsbyImage
                    className="w-100 h-100"
                    image={getImage(c)}
                    alt={c.grid_item.title}
                  />
                }
              />
            </>
          );
        })}
      </Row>
      {!more && (
        <Row>
          <Col className="mb-6">
            <h3 role="button" onClick={() => setMore(true)}>
              See more work →
            </h3>
          </Col>
        </Row>
      )}
    </Container>
  );
};
