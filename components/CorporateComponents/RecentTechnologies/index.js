import React from "react";
import styles from "../Corporate.module.css";
import Card from "../Card";
import { Row, Col } from "react-bootstrap";

const RecentTechnology = () => {
  return (
    <div>
      <h1 className={styles.Corporate__Title}>
        <span className={styles.Corporate__Span__Title}>
          RecentTechnologies
        </span>{" "}
        Delivered To Corporates
      </h1>
      <Row>
        <Col>
          <Card
            name="salesForce"
            logo="logo"
            name2="Batch of 16"
            logo2="logo"
          />
        </Col>
        <Col>
          <Card name="Angularjs" logo="logo" name2="Batch of 16" logo2="logo" />
        </Col>
        <Col>
          <Card
            name="Kubernetes"
            logo="logo"
            name2="Batch of 16"
            logo2="logo"
          />
        </Col>
      </Row>
    </div>
  );
};

export default RecentTechnology;
