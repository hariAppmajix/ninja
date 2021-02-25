import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "./ContactSticky.module.css";

function ContactSticky() {
  return (
    <Row className={styles.sticky}>
      <Col lg={6} md={6} sm={6} xs={6} className={styles.call}>
        <h6 className="m-0">Call us</h6>
      </Col>
      <Col lg={6} md={6} sm={6} xs={6} className={styles.Chat}>
        <h6 className="m-0">Chat</h6>
      </Col>
    </Row>
  );
}

export default ContactSticky;
