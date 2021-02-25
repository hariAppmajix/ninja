import React, { useState, useContext } from "react";
import styles from "./CourseBenifits.module.css";
import {
  Container,
  Row,
  Col,
  Accordion,
  Card,
  AccordionContext,
  useAccordionToggle,
} from "react-bootstrap";
import { CgArrowRightO } from "react-icons/cg";
import { RiArrowDropRightLine } from "react-icons/ri";
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
        <Col lg={2} md={2} sm={2} xs={2} className="d-flex align-items-center">
          {isCurrentEventKey ? <FiMinus /> : <GoPlus />}
        </Col>
        <Col
          lg={10}
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

function CourseBenifits() {
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col className={styles.benifits} lg={8} md={8} sm={12} xs={12}>
              <p>Your intent to master next level skills are appreciated and</p>
              <h4 className="mb-4 pd-b-15 h2_mm">
                we help to achieve career
                <span className="color_text"> transitions</span>
              </h4>

              <div className="meter">
                <span style={{ width: "87%" }}>
                  <span className="progress" />
                </span>
              </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Accordion defaultActiveKey="0">
                <Card className={styles.card}>
                  <ContextAwareToggle
                    className={styles.card_header}
                    as={Card.Header}
                    eventKey="0"
                  >
                    <h5 className="m-0">Mock Interviews</h5>
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <p className={styles.p_text}>
                        Mock interviews help you in understanding your strengths
                        and areas you need to focus on improving to clear
                        interviews.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className={styles.card}>
                  <ContextAwareToggle
                    className={styles.card_header}
                    as={Card.Header}
                    eventKey="1"
                  >
                    <h5 className="m-0">Resume Building</h5>
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <p className={styles.p_text}>
                        A good resume creates positive intent on the profile. We
                        will guide you to prepare an impressive resume with
                        essential elements.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card className={styles.card}>
                  <ContextAwareToggle
                    className={styles.card_header}
                    as={Card.Header}
                    eventKey="2"
                  >
                    <h5 className="m-0">Job Assistance</h5>
                  </ContextAwareToggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <p className={styles.p_text}>
                        80% of the job market is hidden and we will help
                        deserving candidates in finding the right opportunities.
                      </p>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default CourseBenifits;
