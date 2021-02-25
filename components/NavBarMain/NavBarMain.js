import React, { useState, useEffect, useContext } from "react";
import styles from "./NavBarMain.module.css";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import toggleContext from "../../context/context";
import { Nav, Navbar, Container, Image, Form } from "react-bootstrap";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  connectStateResults,
  Configure,
  connectSearchBox,
  connectHits,
} from "react-instantsearch-dom";
const searchClient = algoliasearch(
  "02NVWU5GZ0",
  "0a66ea3adf27b08233b648b353a4f7f8"
);

const Results = connectStateResults(
  ({ searchState, searchResults, children }) =>
    searchState && searchState.query ? (
      searchResults && searchResults.nbHits !== 0 ? (
        children
      ) : (
        <div>No results have been found for {searchState.query}.</div>
      )
    ) : null
);

const Hits = ({ hits }) => (
  <ul className="search_dropdown list-unstyled">
    {hits.map((hit) => (
      <a
        className="a_search"
        href={`http://www.mindmajix.com/${hit.url_title}`}
      >
        <li className="li_search" key={hit.objectID}>
          {hit.course}
        </li>
      </a>
    ))}
  </ul>
);

const CustomHits = connectHits(Hits);

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <Form>
    <Form.Group
      controlId="exampleForm.ControlInput1 text-white"
      className="m-0"
    >
      <Form.Control
        className={styles.search_bar}
        type="text"
        placeholder="Search Courses"
        style={{ color: "white" }}
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </Form.Group>
  </Form>
);

const CustomSearchBox = connectSearchBox(SearchBox);

function NavBarMain({ addClass }) {
  const [scrolled, setScrolled] = useState(false);

  const { showMenu, setshowMenu } = useContext(toggleContext);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  // `navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ${styles.scrolled}`

  let x = [styles.nav_mm, "display_xs"];
  if (scrolled) {
    x.push(styles.scrolled);
  }
  // if(blog){
  //   x.push(styles.blog_header);
  // }

  let xs = [styles.nav_mm, "displayon_xs"];
  if (scrolled) {
    xs.push(styles.scrolled);
  }

  return (
    <div>
      <Navbar expand="lg" className={styles.cap}>
        <Container>
          <Nav className="ml-auto">
            <Nav.Link
              className="text-white pd-r-15"
              style={{ padding: "0.5rem 1rem" }}
              href="https://mindmajix.com/corporate-training"
            >
              Corporate Training
            </Nav.Link>
            <Nav.Link
              className="text-white pd-r-25 "
              style={{ padding: "0.5rem 1rem" }}
              href="https://mindmajix.com/instructor"
            >
              Become an Instructor
            </Nav.Link>
            <Nav.Link
              className="text-white ml-auto"
              style={{ padding: "0.5rem 1rem" }}
              href="https://mindmajix.com/blog"
            >
              Blog
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar expand="lg" className={x.join(" ")}>
        <Container>
          <Navbar.Brand href="https://mindmajix.com">
            <Image
              src="https://cdn.mindmajixtechhub.com/mern/images/logo-d.svg"
              alt="logo-MindMajix"
              style={{ width: "150px", height: "100%" }}
            />
          </Navbar.Brand>

          <ul className="navbar-nav ml-auto">
            {scrolled ? (
              <li className="pd-r-15">
                <InstantSearch
                  indexName="mindmajix"
                  searchClient={searchClient}
                >
                  <Configure hitsPerPage={5} distinct />
                  <CustomSearchBox />
                  <Results>
                    <CustomHits />
                  </Results>
                </InstantSearch>
              </li>
            ) : null}
            <li
              className="pd-r-15"
              onClick={() => {
                setshowMenu(true);
              }}
            >
              <Nav.Link className="text-white  btn-outline-primary py-1 px-4">
                <RiMenuUnfoldFill
                  className={`text-white ${styles.course_icon}`}
                />
                Courses
              </Nav.Link>
            </li>

            <Nav.Link className="text-white" href="https://mindmajix.com/login">
              <FaRegUserCircle
                style={{ fontSize: "24px", marginRight: "5px" }}
              />
              Login
            </Nav.Link>
          </ul>
        </Container>
      </Navbar>
      <Navbar className={xs.join(" ")} style={{ display: "none" }}>
        <Container>
          <ul className="ml-auto list-unstyled" style={{ display: "contents" }}>
            <li
              onClick={() => {
                setshowMenu(true);
              }}
            >
              <Nav.Link
                className="btn-outline-mm text-white"
                style={{ padding: "0" }}
              >
                <RiMenuUnfoldFill
                  className={`text-white ${styles.course_icon}`}
                />
              </Nav.Link>
            </li>

            {scrolled ? (
              <li>
                <InstantSearch
                  indexName="mindmajix"
                  searchClient={searchClient}
                >
                  <Configure hitsPerPage={5} distinct />
                  <CustomSearchBox />
                  <Results>
                    <CustomHits />
                  </Results>
                </InstantSearch>
              </li>
            ) : (
              <li>
                <a href="https://mindmajix.com">
                  <Image
                    src="images/logo-d.svg"
                    alt="logo-MindMajix"
                    style={{ width: "160px", height: "100%" }}
                  />
                </a>
              </li>
            )}
            <li>
              <a
                href="https://mindmajix.com/login"
                className="nav-link text-white"
                style={{ padding: "0" }}
              >
                <AiOutlineUser className={`text-white ${styles.course_icon}`} />
              </a>
            </li>
          </ul>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarMain;
