import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "./Corporate.module.css";
import Swiper from "./CorporateSwipe";
import Swiper2 from "./CorporateSwipe2";
import TrainingFeatures from "./CorporateTraningFeatures";
import TrainingModes from "./CorporateTrainigModes";
import ClientReviews from "./ClientReviews";
import RecentTechnology from "./RecentTechnologies";
import GetInTouch from "./GetInTouch";

const CorporateLanding = () => {
  return (
    <div className={styles.Corporate__main}>
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active> Corporate Training</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            minHeight: "35vh",
          }}
        >
          <Col>
            <h1 className={styles.Corporate__Title}>
              <span className={styles.Corporate__Span__Title}>Corporate </span>
              Training
            </h1>
          </Col>
          <Col>
            <p className={styles.Corporate__Description}>
              "LinkedIn reports,
              <span className={styles.Corporate__Description__span}>
                {" "}
                94%
              </span>{" "}
              of the employees would potentially stay longer with <br /> a
              company that invests in
              <span className={styles.Corporate__Description__span}>
                {" "}
                learning and development"
              </span>
            </p>
          </Col>
        </Row>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "18vh",
            marginBottom: "40px",
          }}
        >
          <h1 className={styles.Corporate__Title}>
            <span className={styles.Corporate__Span__Title}>Esteemed </span>
            Clients
          </h1>
          <p className={styles.Corporate__minDesc}>
            We have delivered corporate training to 120+ enterprises around the
            globe with an impressive feedback.
          </p>
        </Col>
      </Container>
      <div style={{ marginBottom: "20px" }}>
        <Swiper />
      </div>
      <Swiper2 />
      <Container>
        <TrainingFeatures />
        <TrainingModes />
        <ClientReviews />
        <RecentTechnology />
        <GetInTouch />
      </Container>
    </div>
  );
};

export default CorporateLanding;
