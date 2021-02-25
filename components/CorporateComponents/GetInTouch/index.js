import React from "react";
import Forms from "./Forms";
import CorporateTraining from "./CorporateTraining";
import { Row, Col } from "react-bootstrap";

const index = () => {
  return (
    <Row>
      <Col>
        <Forms />
      </Col>
      <Col>
        <CorporateTraining />
      </Col>
    </Row>
  );
};

export default index;
