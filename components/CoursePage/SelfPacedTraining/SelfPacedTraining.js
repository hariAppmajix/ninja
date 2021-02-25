import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./SelfPacedTraining.module.css";
import { BiTimeFive, BiRupee } from "react-icons/bi";
import { RiArrowDropRightLine } from "react-icons/ri";

function SelfPacedTraining() {
  return (
    <Row id="SelfPacedTraining" className={styles.training_row}>
      <Col lg={8} md={7} sm={12} xs={12}>
        <h4>
          Self Paced <span class="color_text">Training</span>
        </h4>

        <div className={styles.cp_text}>
          <ul className="ul_arrow">
            <li className={styles.p_text}>
              Complete set of live-online training sessions recorded videos.
            </li>
            <li className={styles.p_text}>
              Learn technology at your own pace.
            </li>
            <li className={styles.p_text}>Get access for lifetime.</li>
            <li className={styles.p_text}>
              Learn technology at your own pace.
            </li>
          </ul>
        </div>
      </Col>

      <Col lg={4} md={5} sm={12} xs={12}>
        <div className={styles.details}>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <img
                src="https://cdn.mindmajixtechhub.com/mern/images/self_paced_training.svg"
                alt="self paced training"
                style={{ width: "125px", height: "125px" }}
              ></img>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12} className="m-auto">
              <h4 className={styles.price}>
                <BiRupee className={styles.batch_icon} />
                8,900
              </h4>
              <h4 className={styles.price_strike}>
                <BiRupee className={styles.batch_icon} />
                12,000
              </h4>
            </Col>

            <Col lg={12} md={12} sm={12} xs={12}>
              <p className="text-center m-0">
                <a
                  href="https://mindmajix.com/all-courses"
                  className="btn btn-outline-primary py-2 px-3 button_resp"
                >
                  Check out
                </a>
              </p>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
}

export default SelfPacedTraining;
