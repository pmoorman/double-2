import React, { useState } from "react";
import { Link } from "@app/components";
import { slide as Menu, State as MenuState } from "react-burger-menu";
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
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: MenuState) => {
    setIsOpen(state.isOpen);
  };

  return (
    <Menu
      isOpen={isOpen}
      onStateChange={(state) => handleStateChange(state)}
      width={260}
      burgerBarClassName={styles.menuIcon}
      bodyClassName={"bodyScroll"}
      menuClassName={styles.mobileBar}
      overlayClassName={styles.mobileBarOverlay}
      burgerButtonClassName={styles.mobileBarBurgerButton}
      crossButtonClassName={styles.mobileBarCrossButton}
      morphShapeClassName={"my-class"}
    >
      {LINKS.map((link) => (
        <Link
          onClick={() => setIsOpen(false)}
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
