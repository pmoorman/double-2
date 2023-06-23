import React, { useMemo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import cn from "classnames";
import { GatsbyImage } from "gatsby-plugin-image";

import { Carousel, CaseStudyGridItem, Link } from "@app/components";
import { useCaseStudies } from "@app/hooks";
import {
  filterCaseStudiesByCategories,
  getCaseStudyCategories,
} from "@app/helpers";

import * as styles from "./index.module.scss";

const quotes: any = {
  "3": {
    quote:
      "Very reliable, reactive and diligent. Strategic growth hackers understanding the craft.",
    name: "Roman Balzan, CMO at Alpian",
    background: "var(--bs-primary)",
  },
  "9": {
    quote:
      "Double became my marketing team, which meant working with a bunch of razor-sharp analytical minds with strong execution power.",
    name: "Charlotte Sachs, Marketing Lead at Stryber",
    background: "var(--bs-secondary)",
  },
};

export const CasestudiesSection = () => {
  const caseStudies = useCaseStudies();
  const [more, setMore] = useState(false);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    []
  );
  const filteredCaseStudies = useMemo(() => {
    const items = filterCaseStudiesByCategories(caseStudies, selectedCategories)
      ?.sort(
        (a, b) => (b?.grid_item?.weight || 0) - (a?.grid_item?.weight || 0)
      )
      ?.filter((i) => i?.grid_item?.image);

    // Only show first 7 items if not "more" clicked
    return more ? items : items?.slice(0, 7);
  }, [caseStudies, selectedCategories, more]);

  const categories = getCaseStudyCategories(caseStudies);

  const handleCategoryClick = (category: string) => (e: any) => {
    setSelectedCategories((items) => {
      if (items.includes(category)) {
        return items.filter((i) => i !== category);
      }
      return [...items, category];
    });
  };

  const renderQuote = (q: any) => (
    <Col md={4} className="d-flex align-items-end mb-9">
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
    <>
      <Container>
        <Row>
          <Col>
            <h2>Let’s personalise your search</h2>
            <h4>Select any service you’re looking for</h4>
          </Col>
        </Row>
      </Container>
      <div className="mb-7">
        <Carousel hideArrows>
          {categories.map((t) => (
            <div
              key={t}
              onClick={handleCategoryClick(t)}
              className={cn(styles.category, {
                "bg-primary": selectedCategories.includes(t),
                "text-white": selectedCategories.includes(t),
              })}
            >
              <h4 className="mb-0">{t}</h4>
            </div>
          ))}
        </Carousel>
      </div>

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
                      image={c.grid_item.image}
                      alt={c.grid_item.title}
                      quality={100}
                    />
                  }
                />
              </>
            );
          })}
        </Row>
        {!more && (
          <Row>
            <Col>
              <h3 role="button" onClick={() => setMore(true)}>
                See more work →
              </h3>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};
