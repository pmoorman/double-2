import React, { FC, useContext } from "react";
import {
  Accordion,
  AccordionContext,
  useAccordionButton,
} from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import cn from "classnames";

import * as styles from "./index.module.scss";

export type AppAccordionProps = {
  items: { title: string; body: string }[];
  defaultOpenTitle?: string;
};

export const AppAccordion: FC<AppAccordionProps> = ({
  items,
  defaultOpenTitle,
}) => {
  return (
    <Accordion defaultActiveKey={defaultOpenTitle}>
      {items.map((item, index) => (
        <div key={item.title + index} className="mb-3">
          <AppAccordionHeader eventKey={item.title}>
            <h3 className="mb-0">{item.title}</h3>
          </AppAccordionHeader>
          <Accordion.Collapse eventKey={item.title}>
            <>{item.body}</>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};

const AppAccordionHeader: FC<{
  eventKey: string;
  callback?: (key: string) => void;
}> = ({ children, eventKey, callback }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;
  const iconClassName = cn(styles.icon, "ms-3", {
    [styles.iconActive]: isCurrentEventKey,
  });

  return (
    <div
      role="button"
      className="d-flex align-items-center mb-2"
      onClick={decoratedOnClick}
    >
      {children}{" "}
      <StaticImage
        className={iconClassName}
        src="./icon.svg"
        alt="icon"
        width={14}
        height={7}
      />
    </div>
  );
};
