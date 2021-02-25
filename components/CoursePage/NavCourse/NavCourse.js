import React, { useEffect, useState } from "react";
import styles from "./NavCourse.module.css";
import { Navbar, Nav } from "react-bootstrap";
import { RiMenuAddFill } from "react-icons/ri";

function NavCourse() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 600) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="display_xs">
      <Navbar
        expand="lg"
        className={
          !scrolled
            ? styles.navbar_bg
            : styles.navbar_bg + " " + styles.nav_sticky
        }
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ marginLeft: "auto" }}
        >
          <RiMenuAddFill />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" className={styles.nav_center}>
            <Nav.Link href="#Curriculum" className={styles.link}>
              Curriculum
            </Nav.Link>
            <Nav.Link href="#Projects" className={styles.link}>
              Projects
            </Nav.Link>
            <Nav.Link href="#TrainingOptions" className={styles.link}>
              Training options
            </Nav.Link>

            <Nav.Link href="#Certification" className={styles.link}>
              Certification
            </Nav.Link>
            <Nav.Link href="#Reviews" className={styles.link}>
              Reviews
            </Nav.Link>
            <Nav.Link href="#Instructor" className={styles.link}>
              Instructor
            </Nav.Link>
            <Nav.Link href="#FAQ" className={styles.link}>
              FAQ's
            </Nav.Link>

            <Nav.Link
              href="#EnrollNow"
              className="btn-outline-primary px-3 py-2"
            >
              Enroll now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavCourse;
