import React from "react";
import styles from "./Banner.module.css";
// import Typical from "react-typical";
// import Typist from "react-typist";
// var ReactRotatingText = require("react-rotating-text");
import { Form, Row, Container, Col, Image } from "react-bootstrap";
import { RiGoogleFill } from "react-icons/ri";
import { RiFacebookFill } from "react-icons/ri";
import { SiTrustpilot } from "react-icons/si";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import ReactDOM from "react-dom";
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
  <ul className="search_dropdown list-unstyled" style={{ width: "90%" }}>
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
  <Form className="pd-t-10 ">
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

function Banner() {
  return (
    <div>
      <div className={styles.hero_wrap}>
        <Container>
          <Row className={styles.resp_row}>
            <Col lg={6} md={6} sm={12} xs={12} className="m-auto">
              <h1
                style={{
                  color: "white",
                  paddingBottom: "10px",
                }}
              >
                <span className="color_text">Your</span> True
                <span className="color_text"> Partner</span> <br />
                in&nbsp;
                <span className="color_text">Skill</span> Upgrade
              </h1>

              <p className="text-white">
                We have got world-class technologies<br></br>
                to create career-changing opportunities
              </p>

              <InstantSearch indexName="mindmajix" searchClient={searchClient}>
                <Configure hitsPerPage={5} distinct />
                <CustomSearchBox />
                <Results>
                  <CustomHits />
                </Results>
              </InstantSearch>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} className="display_xs">
              <img
                src="images/banner.svg"
                srcSet="https://cdn.mindmajixtechhub.com/mern/images/banner.svg 555w, https://cdn.mindmajixtechhub.com/mern/images/banner.svg 480w, https://cdn.mindmajixtechhub.com/mern/images/banner.svg 350w"
                alt="MindMajix banner"
              ></img>
            </Col>
          </Row>
        </Container>

        <Container className={styles.home_rating}>
          <Row className={styles.rating_row}>
            <Col lg={3} md={3} sm={3} xs={11} className={styles.rating_col}>
              <Row style={{ textAlign: "center" }}>
                <Col lg={4} md={4} sm={4} xs={4} className="pd-b-25 pd-t-25">
                  <div>
                    <RiGoogleFill className={styles.social_banner_icon} />
                  </div>
                  <div>
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarHalf className={styles.social_banner_icon_2} />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4} className="pd-b-25 pd-t-25">
                  <div>
                    <RiFacebookFill className={styles.social_banner_icon} />
                  </div>
                  <div>
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarHalf className={styles.social_banner_icon_2} />
                  </div>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4} className="pd-b-25 pd-t-25">
                  <div>
                    <SiTrustpilot className={styles.social_banner_icon} />
                  </div>
                  <div>
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarFill className={styles.social_banner_icon_2} />
                    <BsStarHalf className={styles.social_banner_icon_2} />
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={3} md={3} sm={3} xs={3} className={styles.text_col_lg}>
              <p className={styles.text_tag}>
                Trusted and <br></br>appreciated by
              </p>
            </Col>

            <Col
              lg={12}
              md={12}
              sm={12}
              xs={12}
              style={{ display: "none" }}
              className={styles.text_col_xs}
            >
              <p className={styles.text_tag}>Trusted and appreciated by</p>
            </Col>

            <Col lg={5} md={5} sm={12} xs={12} className={styles.company_col}>
              <Row>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image
                    className={styles.company_logo}
                    style={{ width: "120px", height: "65px" }}
                    alt="Infosys"
                    src="https://cdn.mindmajixtechhub.com/mern/images/infosys.svg"
                  ></Image>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image
                    className={styles.company_logo}
                    style={{ width: "120px", height: "65px" }}
                    alt="Gartner"
                    src="https://cdn.mindmajixtechhub.com/mern/images/gartner.svg"
                  ></Image>
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  <Image
                    className={styles.company_logo}
                    style={{ width: "120px", height: "75px" }}
                    alt="TCS"
                    src="https://cdn.mindmajixtechhub.com/mern/images/pfizer.svg"
                  ></Image>
                </Col>
              </Row>
            </Col>

            <Col lg={1} md={1} sm={1} xs={1} className={styles.display_xs}>
              <div className={styles.box}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Col>
          </Row>
          <div className={styles.xs_rating}>
            <Row className="m-0">
              <Col lg={4} md={4} sm={4} xs={4}>
                <p className={styles.xs_text}>
                  <Image
                    className={styles.company_logo}
                    style={{ width: "90px", height: "65px" }}
                    alt="Infosys"
                    src="https://cdn.mindmajixtechhub.com/mern/images/infosys.svg"
                  ></Image>
                </p>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4}>
                <p className={styles.xs_text}>
                  <Image
                    className={styles.company_logo}
                    style={{ width: "90px", height: "65px" }}
                    alt="Gartner"
                    src="https://cdn.mindmajixtechhub.com/mern/images/gartner.svg"
                  ></Image>
                </p>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4}>
                <p className={styles.xs_text}>
                  <Image
                    className={styles.company_logo}
                    style={{ width: "90px", height: "75px" }}
                    alt="TCS"
                    src="https://cdn.mindmajixtechhub.com/mern/images/pfizer.svg"
                  ></Image>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container className={styles.xs_rating}>
        <Row className="m-0">
          <Col lg={4} md={4} sm={4} xs={4} style={{ textAlign: "center" }}>
            <p className={styles.xs_text}>
              <Image
                className={styles.xs_icon}
                src="https://cdn.mindmajixtechhub.com/mern/images/google_icon.svg"
                style={{ width: "30px", height: "30px" }}
                alt="google rating"
              ></Image>{" "}
              4.5/5
            </p>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4} style={{ textAlign: "center" }}>
            <p className={styles.xs_text}>
              <Image
                className={styles.xs_icon}
                src="https://cdn.mindmajixtechhub.com/mern/images/facebook_icon.svg"
                style={{ width: "30px", height: "30px" }}
                alt="facebook rating"
              ></Image>{" "}
              4.5/5
            </p>
          </Col>
          <Col lg={4} md={4} sm={4} xs={4} style={{ textAlign: "center" }}>
            <p className={styles.xs_text}>
              <Image
                className={styles.xs_icon}
                src="https://cdn.mindmajixtechhub.com/mern/images/trustpilot_icon.svg"
                style={{ width: "30px", height: "30px" }}
                alt="Trustpilot rating"
              ></Image>{" "}
              4.5/5
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
