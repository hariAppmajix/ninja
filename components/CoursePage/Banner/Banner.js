import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import { Container, Button, Row, Col } from "react-bootstrap";
var ReactRotatingText = require("react-rotating-text");
import { RiGoogleFill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { SiTrustpilot } from "react-icons/si";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { course_headings } from "../../../staticpaths";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

function Banner({ course }) {
  const [showMore, setShowMore] = useState(true);

  const Readmore = ({ children }) => {
    const regex = /(<([^>]+)>)/gi;
    let text = children;
    text = text.replace(regex, "");

    const resultString = showMore ? text.slice(0, 200) + "..." : text;
    return (
      <p className={styles.description}>
        {text.length > 200 ? resultString : text}
        {course.description.length > 200 ? (
          <a
            className={styles.read_more}
            onClick={() => setShowMore(!showMore)}
          >
            &nbsp; Read {!showMore ? "less" : "more"}
          </a>
        ) : null}
      </p>
    );
  };

  return (
    <div className={styles.hero_wrap}>
      <Container>
        <Row
          className={"no-gutters align-items-center " + styles.resp_row}
          data-scrollax-parent="true"
        >
          <Col md={8} sm={12}>
            {/* <p className={styles.course_typed}>
              Become a &nbsp;
              <ReactRotatingText
                className={styles.typed_bg}
                items={["Oracle", "Hadoop", "React"]}
              />
            </p>
            <span className="typed-cursor" /> */}
            <h1 className="pd-b-10 text-white">
              {typeof course_headings[course.id + ""] === "undefined"
                ? course.name
                : course_headings[course.id + ""]}
            </h1>
            <Row className="text-white pd-b-10">
              <Col lg={3} md={6} sm={6} xs={6} className="pd-b-15">
                <BsStarFill className={styles.social_banner_icon_2} />
                <BsStarFill className={styles.social_banner_icon_2} />
                <BsStarFill className={styles.social_banner_icon_2} />
                <BsStarFill className={styles.social_banner_icon_2} />
                <BsStarHalf className={styles.social_banner_icon_2} />
                <span style={{ marginLeft: "8px" }}>(5.0)</span>
              </Col>
              <Col lg={3} md={6} sm={6} xs={6} className="pd-b-15">
                <FiUsers style={{ marginBottom: "3px", marginRight: "5px" }} />{" "}
                4,076 learners
              </Col>
              <Col lg={2} md={2} sm={4} xs={4} className="pd-b-15">
                <FaGoogle style={{ marginBottom: "3px", marginRight: "8px" }} />
                4.3/5
              </Col>
              <Col lg={2} md={2} sm={4} xs={4} className="pd-b-15">
                <FaFacebookF
                  style={{ marginBottom: "3px", marginRight: "5px" }}
                />{" "}
                4.1/5
              </Col>
              <Col lg={2} md={2} sm={4} xs={4} className="pd-b-15">
                <SiTrustpilot
                  style={{ marginBottom: "3px", marginRight: "5px" }}
                />{" "}
                4.6/5
              </Col>
            </Row>
            <p className={styles.description}>
              {/* {filteredDesc.length > 350 ? !showMore ? filteredDesc.slice(0,200) + "..." : filteredDesc : filteredDesc}
              {filteredDesc.length > 350 ? <a className={styles.read_more} onClick={() => setShowMore(!showMore)}>
                &nbsp; Read {!showMore ? "more" : "less"}
              </a> : null} */}

              <Readmore>{course.description}</Readmore>
            </p>
            <Button
              variant="primary"
              className={"btn-outline-primary py-2 px-4 " + styles.c_btn}
              type="submit"
            >
              Enroll now
            </Button>
          </Col>
          <Col md={4} sm={12}>
            <a href="https://youtu.be/1boOw3rBNAc">
              <img
                className={`animate__animated animate__pulse  ${styles.play_icon}`}
                src="https://cdn.mindmajixtechhub.com/mern/images/play.svg"
                alt="demo play"
                style={{ width: "75px", height: "75px" }}
              />
            </a>
          </Col>
        </Row>
        <Row className={styles.course_rating}>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={2} md={4} sm={6} xs={6} className={styles.feature_block}>
                <Row className="m-auto">
                  <Col lg={4} md={4} sm={4} xs={4}>
                    <img
                      className={styles.course_feature_icon}
                      src="https://cdn.mindmajixtechhub.com/mern/images/courseFeatures/Instructor.svg"
                      alt="Live Training"
                      style={{ width: "30px", height: "30px" }}
                    ></img>
                  </Col>
                  <Col lg={8} sm={8} xs={8} className="col_pd_10">
                    <p className={styles.course_feature_text}>
                      {course.duration} Hrs Live Training
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={2} md={4} sm={6} xs={6} className={styles.feature_block}>
                <Row className="m-auto">
                  <Col lg={4} sm={4} xs={4}>
                    <img
                      className={styles.course_feature_icon}
                      src="https://cdn.mindmajixtechhub.com/mern/images/courseFeatures/projects.svg"
                      alt="Lab Sessions"
                      style={{ width: "30px", height: "30px" }}
                    ></img>
                  </Col>
                  <Col lg={8} sm={8} xs={8} className="col_pd_10">
                    <p className={styles.course_feature_text}>
                      {course.lab_sessions} hrs Lab Sessions
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={2} md={4} sm={6} xs={6} className={styles.feature_block}>
                <Row className="m-auto">
                  <Col lg={4} sm={4} xs={4}>
                    <img
                      className={styles.course_feature_icon}
                      src="https://cdn.mindmajixtechhub.com/mern/images/courseFeatures/Certification.svg"
                      alt="Certification Assistance"
                      style={{ width: "30px", height: "30px" }}
                    ></img>
                  </Col>
                  <Col lg={8} sm={8} xs={8} className="col_pd_10">
                    <p className={styles.course_feature_text}>
                      Certification Assistance
                    </p>
                  </Col>
                </Row>
              </Col>

              <Col lg={2} md={4} sm={6} xs={6} className={styles.feature_block}>
                <Row className="m-auto">
                  <Col lg={4} sm={4} xs={4}>
                    <img
                      className={styles.course_feature_icon}
                      src="https://cdn.mindmajixtechhub.com/mern/images/courseFeatures/career.svg"
                      alt="Career Assistance"
                      style={{ width: "30px", height: "30px" }}
                    ></img>
                  </Col>
                  <Col lg={8} sm={8} xs={8} className="col_pd_10">
                    <p className={styles.course_feature_text}>
                      Career Assistance
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={2} md={4} sm={6} xs={6} className={styles.feature_block}>
                <Row className="m-auto">
                  <Col lg={4} sm={4} xs={4}>
                    <img
                      className={styles.course_feature_icon}
                      src="https://cdn.mindmajixtechhub.com/mern/images/courseFeatures/Schedule.svg"
                      alt="Flexible Schedule"
                      style={{ width: "30px", height: "30px" }}
                    ></img>
                  </Col>
                  <Col lg={8} sm={8} xs={8} className="col_pd_10">
                    <p className={styles.course_feature_text}>
                      Flexible Schedule
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col lg={2} md={4} sm={6} xs={6} className={styles.feature_block}>
                <Row className="m-auto">
                  <Col lg={4} sm={4} xs={4}>
                    <img
                      className={styles.course_feature_icon}
                      src="https://cdn.mindmajixtechhub.com/mern/images/courseFeatures/Support.svg"
                      alt="24/7 Lifetime Support"
                      style={{ width: "30px", height: "30px" }}
                    ></img>
                  </Col>
                  <Col lg={8} sm={8} xs={8} className="col_pd_10">
                    <p className={styles.course_feature_text}>
                      24/7 Lifetime Support
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
