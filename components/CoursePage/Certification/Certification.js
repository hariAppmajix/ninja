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
import { RiArrowDropRightLine } from "react-icons/ri";
import { GoPlus } from "react-icons/go";
import styles from "./Certification.module.css";
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

function Certification({ heading, course }) {
  const formatValue = (value) => `${value.toFixed(2)}`;
  return (
    <section
      id="Certification"
      className="ftco-section services-section sec-pad"
    >
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}></Col>
          <Col lg={8} md={12} sm={12} xs={12}>
            <p>Choose your own comfortable learning experience.</p>
            <h2 className="pd-b-25">
              {heading}
              <span className="color_text"> Certification</span>
            </h2>

            <Accordion defaultActiveKey="0" className="pd-t-25">
              <Card className={styles.card}>
                <ContextAwareToggle eventKey="0">
                  <h6 className="m-0">
                    Shall I appear for Agile certification exam after completion
                    of Agile course?
                  </h6>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className={styles.p_text}>
                      Our Agile course covers all the topics that are required
                      to clear Agile certification. Trainer will share Agile
                      certification guide, Agile certification sample questions,
                      Agile certification practice questions.
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
                  <h6 className="m-0">
                    What is an Agile Certified Practitioner (ACP) Certification?
                  </h6>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className={styles.p_text}>
                      Agile Certified Practitioner (ACP) is a certification
                      accredited by the Project Management Institute (PMI) that
                      recognizes your skills, experience, and versatility in
                      applying agile practices and principles as a part of an
                      agile team.
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
                  <h6 className="m-0">How do I get certified in Agile?</h6>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p className={styles.p_text}>
                      Once you complete the Agile Training at Mindmajix, you’ll
                      be guided in the certification process. You can apply for
                      the exam from PMI Official website. Take the online exam
                      and achieve the qualifying score to get certified.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.card}>
                <ContextAwareToggle
                  className={styles.card_header}
                  as={Card.Header}
                  eventKey="3"
                >
                  <h6 className="m-0">Exam details</h6>
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <h6>
                      PMI Agile Certified Practitioner PMI-ACP Certification
                    </h6>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      Duration: 180 minutes
                    </p>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      Number of questions: 120 MCQs
                    </p>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      Passing score: Above 70%
                    </p>
                    <p className={styles.p_text}>
                      <RiArrowDropRightLine className={styles.p_icon} />
                      Non-PMI Member: $495.00
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12} style={{ margin: "auto" }}>
            <img
              className={styles.certificate}
              style={{
                width: "300px",
                height: "200px",
                display: "block",
                margin: "auto",
              }}
              src="https://cdn.mindmajixtechhub.com/mern/images/mindmajixcertificate.png"
              alt="MindMajix certificate"
            ></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Certification;
