import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./WhatWeAre.module.css";
import { MdFormatQuote } from "react-icons/md";

function WhatWeAre() {
  return (
    <section className={styles.whatweare_banner}>
      <Container>
        <Row className="m-0">
          <Col lg={4} md={4} sm={12} xs={12} className={styles.quote_box}>
            <Row className="m-0">
              <Col lg={12} md={12} sm={3} xs={3} className="m-auto">
                <img
                  className={styles.whatweare_icons}
                  style={{
                    width: "75px",
                    height: "75px",
                    margin: "auto",
                    display: "block",
                  }}
                  alt="Learn"
                  src="images/whatarewe/learn.svg"
                />
              </Col>
              <Col lg={12} md={12} sm={9} xs={9}>
                <h5 className={"pd-t-25 " + styles.quote_line}>
                  We'll explain, <br></br>
                  <span style={{ fontWeight: "500" }}>
                    you'll <span className="color_text">LEARN</span>
                  </span>
                </h5>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12} className={styles.quote_box}>
            <Row>
              <Col lg={12} md={12} sm={3} xs={3} className="m-auto">
                <img
                  className={styles.whatweare_icons}
                  style={{
                    width: "75px",
                    height: "75px",
                    margin: "auto",
                    display: "block",
                  }}
                  alt="Remember"
                  src="images/whatarewe/remember-2.svg"
                />
              </Col>
              <Col lg={12} md={12} sm={9} xs={9}>
                <h5 className={"pd-t-25 " + styles.quote_line}>
                  We'll demonstrate, <br></br>
                  <span style={{ fontWeight: "500" }}>
                    you'll <span className="color_text">REMEMBER</span>
                  </span>
                </h5>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12} className={styles.quote_box}>
            <Row>
              <Col lg={12} md={12} sm={3} xs={3} className="m-auto">
                <img
                  className={styles.whatweare_icons}
                  style={{
                    width: "75px",
                    height: "75px",
                    margin: "auto",
                    display: "block",
                  }}
                  alt="Perform"
                  src="images/whatarewe/perform.svg"
                />
              </Col>
              <Col lg={12} md={12} sm={9} xs={9}>
                <h5 className={"pd-t-25 " + styles.quote_line}>
                  We'll involve, <br></br>
                  <span style={{ fontWeight: "500" }}>
                    you'll <span className="color_text">PERFORM</span>
                  </span>
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default WhatWeAre;
