import React, { useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import cn from "classnames";

import { Carousel, ClientsGrid } from "@app/components";
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
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    []
  );
  const filteredCaseStudies = useMemo(() => {
    return filterCaseStudiesByCategories(caseStudies, selectedCategories)
      ?.sort(
        (a, b) => (b?.grid_item?.weight || 0) - (a?.grid_item?.weight || 0)
      )
      ?.filter((i) => i?.grid_item?.image);
  }, [caseStudies, selectedCategories]);

  const categories = getCaseStudyCategories(caseStudies);

  const handleCategoryClick = (category: string) => (e: any) => {
    setSelectedCategories((items) => {
      if (items.includes(category)) {
        return items.filter((i) => i !== category);
      }
      return [...items, category];
    });
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className="mb-4 personalise">Let’s personalise your search</h2>
            <h4 className="ok">select the service you’re looking for:</h4>
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
                "bg-primary border-none": selectedCategories.includes(t),
                "text-white": selectedCategories.includes(t),
              })}
            >
              <h4 className="mb-0">{t}</h4>
            </div>
          ))}
        </Carousel>
      </div>

      <ClientsGrid
        caseStudies={filteredCaseStudies}
        quotes={quotes}
        getImage={(c) => c.grid_item?.image}
      />
    </>
  );
};
