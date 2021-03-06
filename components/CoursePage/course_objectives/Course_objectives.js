import React, { useState, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  AccordionContext,
  useAccordionToggle,
} from "react-bootstrap";
import styles from "./course_objectives.module.css";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <Card
      onClick={decoratedOnClick}
      className={styles.card_header}
      as={Card.Header}
    >
      <Row>
        <Col lg={1} md={2} sm={2} xs={2} className="d-flex align-items-center">
          {isCurrentEventKey ? <FiMinus /> : <GoPlus />}
        </Col>
        <Col
          lg={11}
          md={10}
          sm={10}
          xs={10}
          className="d-flex align-items-center"
        >
          {children}
        </Col>
      </Row>
    </Card>
  );
}
function Course_objectives({ objectives, heading, course }) {
  const formatValue = (value) => `${value.toFixed(2)}`;
  return (
    <section id="Objectives" className="ftco-section services-section sec-pad">
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}></Col>
          <Col lg={8} md={12} sm={12} xs={12}>
            <p>Choose your own comfortable learning experience.</p>
            <h2 className="pd-b-25">
              {heading}
              <span className="color_text"> Objectives</span>
            </h2>

            <Accordion eventKey="0" className="pd-t-25">
              {objectives.map((item, index) => {
                return (
                  <Card className={styles.card}>
                    <ContextAwareToggle
                      className={styles.card_header}
                      as={Card.Header}
                      eventKey={index + 1}
                    >
                      <h6 className="m-0">{item.objective}</h6>
                    </ContextAwareToggle>
                    <Accordion.Collapse eventKey={index + 1}>
                      <Card.Body
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </Accordion.Collapse>
                  </Card>
                );
              })}
            </Accordion>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12} style={{ margin: "auto" }}></Col>
        </Row>
      </Container>
    </section>
  );
}

export default Course_objectives;
