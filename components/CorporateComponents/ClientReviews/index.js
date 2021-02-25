import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "../Corporate.module.css";

const Clientreviews = () => {
  return (
    <div>
      <h1 className={styles.Corporate__Title}>
        <span className={styles.Corporate__Span__Title}>Client</span>
        Reviews
      </h1>
      <Row>
        <Col sm={2}>Logo</Col>
        <Col sm={10}>
          <div className={styles.Client__Comment__Box}>
            <h1 className={styles.Client__Tiltle}>Preethi Jain</h1>
            <h1 className={styles.Client__Subject}>Company Name</h1>
            <p>
              Over the past couple of years, depending on the course and timing,
              between 75 and 100 of our first and second-level employees and
              managers have participated in Mindmajix Corporate Training. From
              my point of view it has been very rewarding to coordinate these
              classes through online. There's no question that anyone that takes
              a corporate training on any course will benefit from the content.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Clientreviews;
