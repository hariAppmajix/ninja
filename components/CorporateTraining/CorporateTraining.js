import React from "react";
import styles from "./CorporateTraining.module.css";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Container, Row, Col, Image } from "react-bootstrap";

function CorporateTraining() {
  return (
    <section className={styles.corporate_row}>
      <Container>
        <Row>
          <Col lg={7} md={7} sm={12} xs={12} className="m-auto">
            <div className="w-100">
              <p className="mb-3">
                Improve your workforce to enhance productivity exceptionally.
              </p>
              <h2 className="mb-4">
                <span className="color_text"> Enterprise</span> Training
                Solutions
              </h2>
            </div>
            <div className={styles.cp_text}>
              <p className={styles.p_text}>
                <RiArrowDropRightLine className="btn_icon" />
                Customized learning methodologies scaled to your corporate
                needs.
              </p>
              <p className={styles.p_text}>
                <RiArrowDropRightLine className="btn_icon" />
                Instructor led virtual training mode with real time projects.
              </p>
              <p className={styles.p_text}>
                <RiArrowDropRightLine className="btn_icon" />
                Learn as per full day schedule with discussions, exercises and
                practical use cases.
              </p>
            </div>
            <p>
              <a
                href="https://mindmajix.com/corporate-training"
                className="btn btn-outline-primary py-2 px-3 button_resp"
              >
                Read more
              </a>
            </p>
          </Col>
          <Col lg={5} md={5} sm={12} xs={12}>
            <Row className={styles.client_row}>
              <Col lg={4} md={4} sm={6} xs={6} className={styles.client_img}>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className={styles.client_bg}
                  >
                    <Image
                      src="https://cdn.mindmajixtechhub.com/mern/images/clients/bosch.svg"
                      style={{ width: "110px", height: "55px" }}
                      alt="bosch"
                    />
                  </Col>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className={styles.client_bg}
                  >
                    <Image
                      src="https://cdn.mindmajixtechhub.com/mern/images/clients/capgemini.svg"
                      style={{ width: "110px", height: "55px" }}
                      alt="capgemini"
                    />
                  </Col>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className={styles.client_bg}
                  >
                    <Image
                      src="https://cdn.mindmajixtechhub.com/mern/images/clients/deloitte.svg"
                      style={{ width: "110px", height: "55px" }}
                      alt="deloitte"
                    />
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={4} sm={6} xs={6} className={styles.client_img}>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className={styles.client_bg}
                  >
                    <Image
                      src="https://cdn.mindmajixtechhub.com/mern/images/clients/intel.svg"
                      style={{ width: "110px", height: "55px" }}
                      alt="intel"
                    />
                  </Col>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className={styles.client_bg}
                  >
                    <Image
                      src="https://cdn.mindmajixtechhub.com/mern/images/clients/novartis.svg"
                      style={{ width: "110px", height: "55px" }}
                      alt="novartis"
                    />
                  </Col>
                  <Col
                    lg={12}
                    md={12}
                    sm={12}
                    xs={12}
                    className={styles.client_bg}
                  >
                    <Image
                      src="https://cdn.mindmajixtechhub.com/mern/images/clients/pwc.svg"
                      style={{ width: "110px", height: "55px" }}
                      alt="pwc"
                    />
                  </Col>
                </Row>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12} className={styles.client_img}>
                <Row>
                  <Col
                    lg={12}
                    md={12}
                    sm={6}
                    xs={6}
                    className={styles.client_bg}
                  >
                    <Image
                      src="https://cdn.mindmajixtechhub.com/mern/images/clients/techdata.svg"
                      style={{ width: "110px", height: "55px" }}
                      alt="techdata"
                    />
                  </Col>
                  <Col
                    lg={12}
                    md={12}
                    sm={6}
                    xs={6}
                    className={styles.client_bg}
                  >
                    <Image
                      src="https://cdn.mindmajixtechhub.com/mern/images/clients/visa.svg"
                      style={{ width: "110px", height: "55px" }}
                      alt="visa"
                    />
                  </Col>
                  <Col
                    lg={12}
                    md={12}
                    sm={6}
                    xs={6}
                    className={styles.client_bg}
                  >
                    <Image
                      src="https://cdn.mindmajixtechhub.com/mern/images/clients/tata_power.svg"
                      style={{ width: "110px", height: "55px" }}
                      alt="tata_power"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CorporateTraining;
