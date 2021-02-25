import React, { useState, useEffect, useCallback, useRef } from "react";
import styles from "./SliderNew.module.css";
import { Container, div, Row, Col, Image } from "react-bootstrap";

function SliderNew() {
  const [percentage, setpercentage] = useState(10);

  const innerDiv = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const position = window.pageYOffset;
      setScrollPosition(position);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    const totalHt = 2 * innerDiv.current.offsetHeight;
    const htStart = innerDiv.current.offsetTop - innerDiv.current.offsetHeight;
    const htEnd = innerDiv.current.offsetTop + innerDiv.current.offsetHeight;

    if (pageYOffset > htStart && pageYOffset < htEnd) {
      let percent = window.pageYOffset - htStart;

      percent = percent / totalHt;

      percent = percent.toFixed(2) * 100;

      if (percent > 80) {
        setpercentage(80);
      } else if (percent < 10) {
        setpercentage(10);
      } else {
        setpercentage(percent);
      }
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col lg={4} md={4} sm={12} xs={12} className={styles.heading_col}>
              <h4 className="mb-4 h2_mm">
                Key <span className="color_text">Features</span>
              </h4>
              <p className="pd-b-25">
                We believe in providing the best technology training loaded with
                essential features to deliver outstanding learning experience.
              </p>
            </Col>
            <Col lg={2} md={2} sm={1} xs={2} className={styles.pointer_col}>
              <div className="slider-inner" ref={innerDiv}>
                <div
                  className="progress-bar"
                  style={{
                    width: "4px",
                    height: `${percentage}%`,
                    transition: "height linear",
                    background: "none",
                  }}
                ></div>
                <Image
                  className={styles.slider_img}
                  alt="MindMajix"
                  src="https://cdn.mindmajixtechhub.com/mern/images/pointer.svg"
                ></Image>
              </div>
            </Col>
            <Col lg={6} md={6} sm={11} xs={10}>
              <div className={styles.feature_div}>
                <Row>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <Image
                      src="https://cdn.mindmajixtechhub.com/mern/images/feature-6.svg"
                      alt="Industry_standard_curriculum"
                      className={styles.features_icon}
                    ></Image>
                  </Col>
                  <Col lg={10} md={10} sm={10} xs={10}>
                    <h6 className={styles.feature_head}>
                      Industry standard curriculum
                    </h6>
                    <p className={styles.feature_p}>
                      Every technology syllabus is tailored to meet current
                      industry requirements.
                    </p>
                  </Col>
                </Row>
              </div>

              <div className={styles.feature_div}>
                <Row>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <Image
                      src="https://cdn.mindmajixtechhub.com/mern/images/feature-5.svg"
                      className={styles.features_icon}
                      alt="Real_world_projects"
                    ></Image>
                  </Col>
                  <Col lg={10} md={10} sm={10} xs={10}>
                    <h6 className={styles.feature_head}>Real world projects</h6>
                    <p className={styles.feature_p}>
                      Explore how technologies interacts with the
                      real&nbsp;world using industrial use-cases.
                    </p>
                  </Col>
                </Row>
              </div>

              <div className={styles.feature_div}>
                <Row>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <Image
                      src="https://cdn.mindmajixtechhub.com/mern/images/feature-1.svg"
                      className={styles.features_icon}
                      alt="Flexible_schedules"
                    ></Image>
                  </Col>
                  <Col lg={10} md={10} sm={10} xs={10}>
                    <h6 className={styles.feature_head}>Flexible schedules</h6>
                    <p className={styles.feature_p}>
                      If you feel NOW is the right time, we got your schedule
                      covered.
                    </p>
                  </Col>
                </Row>
              </div>

              <div className={styles.feature_div}>
                <Row>
                  <Col lg={2} md={2} sm={2} xs={2}>
                    <Image
                      src="https://cdn.mindmajixtechhub.com/mern/images/feature-8.svg"
                      className={styles.features_icon}
                      alt="Official_certification_guidance"
                    ></Image>
                  </Col>
                  <Col lg={10} md={10} sm={10} xs={10}>
                    <h6 className={styles.feature_head}>
                      Official certification guidance
                    </h6>
                    <p className={styles.feature_p}>
                      Along with course completion certificate, we assure you
                      with official certificate guidance.
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default SliderNew;
