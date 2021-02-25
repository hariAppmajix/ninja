import React from "react";
import styles from "../Corporate.module.css";
import { Row, Col } from "react-bootstrap";
import { FaBeer } from "react-icons/fa";

const TrainingFeatures = () => {
  return (
    <div className={styles.Corporate__features__main}  >
      <h1 className={styles.Corporate__Title}>
        <span className={styles.Corporate__Span__Title}>Corporate</span>{" "}
        Training Features
      </h1>
      <Row>
        <Col xs={12} md={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}>
            <p>
              Our expertise in understanding corporate needs made us design
              training programs with impressive features to meet versatile and
              customized training services.
            </p>
          </div>
        </Col>
        <Col>
          <div className={styles.Feature__box}>
            <FaBeer />
            <p>
              Course{" "}
              <span className={styles.Feature__Span__Box}>customization</span>
            </p>
          </div>
          <div className={styles.Feature__box}>
            <FaBeer />
            <p>
              Flexible
              <span className={styles.Feature__Span__Box}> schedules</span>{" "}
              irrespective of time zones
            </p>
          </div>
          <div className={styles.Feature__box}>
            <FaBeer />
            <p>
              Virtual{" "}
              <span className={styles.Feature__Span__Box}>interactive</span>{" "}
              sessions with learning analytics
            </p>
          </div>
          <div className={styles.Feature__box}>
            <FaBeer />
            <p>
              Highly{" "}
              <span className={styles.Feature__Span__Box}>qualified</span>{" "}
              mentors
            </p>
          </div>
          <div className={styles.Feature__box}>
            <FaBeer />
            <p>
              <span className={styles.Feature__Span__Box}>Onsite</span> services
            </p>
          </div>
          <div className={styles.Feature__box}>
            <FaBeer />
            <p>
              {" "}
              <span className={styles.Feature__Span__Box}> Dedicated</span>
              trainer for the team
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TrainingFeatures;
