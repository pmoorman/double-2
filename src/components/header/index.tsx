import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import cn from "classnames";

import { Link, DoubleLogo } from "@app/components";

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

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglerClass = cn(styles.navbarToggler, {
    [styles.navbarTogglerCollapsed]: !isOpen,
  });

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <div className="container">
        <Navbar.Brand as={Link} to="/" className={styles.navbarLogo}>
          <DoubleLogo />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setIsOpen((v) => !v)}
          className={togglerClass}
          aria-controls={ID}
        >
          <span className={styles.menuIcon}></span>
        </Navbar.Toggle>

        <Navbar.Collapse in={isOpen} className={styles.navbarCollapse} id={ID}>
          <Nav className={styles.navbarNav}>
            {LINKS.map((link) => (
              <Nav.Link
                key={link.to}
                className={styles.navLink}
                activeClassName={styles.navLinkActive}
                onClick={() => setIsOpen(false)}
                as={Link}
                to={link.to}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
