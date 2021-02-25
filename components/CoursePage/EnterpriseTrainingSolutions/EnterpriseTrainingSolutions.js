import React from "react";
import styles from "./EnterpriseTrainingSolutions.module.css";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Container, Row, Col, Image } from "react-bootstrap";

function EnterpriseTrainingSolutions() {
  return (
    <section className={styles.corporate_row}>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="m-auto">
            <h2 className="text-center">
              For
              <span className="color_text special_text"> Corporates</span>
            </h2>
            <p className="pd-b-35 text-center">
              Be ready with the skills before the industry adopts the
              technology.
            </p>
          </Col>
          <Col lg={7} md={7} sm={12} xs={12} className="m-auto">
            <div className="w-100">
              <h2 className="mb-4">
                Corporate<span className="color_text"> Training</span>
              </h2>
            </div>
            <div className={styles.cp_text}>
              <ul className="ul_arrow">
                <li className={styles.p_text}>
                  Self-Paced/Live Online/Classroom modes of training available.
                </li>
                <li className={styles.p_text}>
                  Engage in Spotfire Classroom Training lecture by an industry
                  expert at your facility.
                </li>
                <li className={styles.p_text}>
                  {" "}
                  Learn as per full day schedule with discussions,exercises and
                  practical use cases.
                </li>
                <li className={styles.p_text}>
                  Design your own course content based on your project
                  requirements.
                </li>
                <li className={styles.p_text}>
                  Gain complete guidance on certification.
                </li>
              </ul>
            </div>
            <p style={{ float: "right" }}>
              <a
                href="https://mindmajix.com/corporate-training"
                className="btn btn-outline-primary py-2 px-3 button_resp"
              >
                Get a call back
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

export default EnterpriseTrainingSolutions;
