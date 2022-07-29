import React, { useState } from "react";
import { Link } from "@app/components";
import { slide as Menu } from "react-burger-menu";
import * as styles from "./index.module.scss";

const ID = "main-nav";
const LINKS = [
  { label: "Case studies", to: "/case-studies" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/careers" },
  { label: "Blog", to: "/blog" },
  { label: "Contact us", to: "/contact" },
];

export const MobileMenu = () => {
  return (
    <Menu
      left
      width={"260px"}
      burgerBarClassName={"menuIcon"}
      noOverlay
      disableOverlayClick
    >
      {LINKS.map((link) => (
        <Link
          key={link.to}
          className={styles.mobileLink}
          as={Link}
          to={link.to}
        >
          {link.label}
        </Link>
      ))}
    </Menu>
  );
};
