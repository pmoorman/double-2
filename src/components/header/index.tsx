import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import cn from "classnames";

import { Link, DoubleLogo, MobileMenu } from "@app/components";
import * as styles from "./index.module.scss";
import { useMediaQuery } from "react-responsive";

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

  const isMdDevice = useMediaQuery({ query: '(min-width: 992px)' })

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <div className="container">
        {!isMdDevice && <MobileMenu></MobileMenu>}
        <Navbar.Brand as={Link} to="/" className={styles.navbarLogo}>
          <DoubleLogo />
        </Navbar.Brand>

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
      </div>
    </Navbar>
  );
};
