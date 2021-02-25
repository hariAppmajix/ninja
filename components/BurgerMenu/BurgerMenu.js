import { slide as Menu } from "react-burger-menu";
import React, { useState, useContext } from "react";
import styles from "./BurgerMenu.module.css";
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
import { FiMinus } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

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
        <Col
          lg={10}
          md={10}
          sm={9}
          xs={9}
          className="d-flex align-items-center"
        >
          {children}
        </Col>
        <Col lg={2} md={2} sm={3} xs={3} className="d-flex align-items-center">
          {isCurrentEventKey ? (
            <FiMinus style={{ fontSize: "20px" }} />
          ) : (
            <GoPlus style={{ fontSize: "20px" }} />
          )}
        </Col>
      </Row>
    </Card>
  );
}

function BurgerMenu(props) {
  return (
    <Menu className={styles.menu} {...props}>
      <Container>
        <Accordion defaultActiveKey="11" className={styles.course_block}>
          <Card className={styles.card}>
            <ContextAwareToggle
              className={styles.card_header}
              as={Card.Header}
              eventKey="11"
            >
              <h5 className={"pd-b-10 pd-t-10 " + styles.cat_head}>
                Course Categories
              </h5>
            </ContextAwareToggle>
            <Accordion.Collapse eventKey="11">
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Accordion eventKey="0">
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="0"
                      >
                        <p className={styles.cat_main}>
                          AI and Machine Learning
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/artificial-intelligence-course-training">
                            <a style={{ color: "#222222 !important" }}>
                              Artificial Intelligence Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/machine-learning-training">
                            <a style={{ color: "#222222 !important" }}>
                              Machine Learning Training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>

                          {/* <Link href="https://mindmajix.com/artificial-intelligence-course-hyderabad">
                            <a style={{ color: "#222222 !important" }}>
                              Artificial Intelligence Course in Hyderabad -
                              Online Certification
                            </a>
                          </Link>
                          <br></br> */}
                          <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/artificial-intelligence-courses"
                          >
                            View more
                          </a>
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="1"
                      >
                        <p className={styles.cat_main}>
                          API Management and Testing
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/api-testing-training">
                            <a style={{ color: "#222222 !important" }}>
                              API Testing Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/apigee-training">
                            <a style={{ color: "#222222 !important" }}>
                              Apigee Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/ibm-api-connect-training">
                            <a style={{ color: "#222222 !important" }}>
                              IBM API Connect Training
                            </a>
                          </Link>
                          <br></br>

                          <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/api-management-testing-courses"
                          >
                            View more
                          </a>
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="2"
                      >
                        <p className={styles.cat_main}>Big Data</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/apache-spark-training">
                            <a style={{ color: "#222222 !important" }}>
                              Apache Spark Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/apache-kafka-training">
                            <a style={{ color: "#222222 !important" }}>
                              Apache Kafka Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/denodo-training">
                            <a style={{ color: "#222222 !important" }}>
                              Denodo Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/elasticsearch-training">
                            <a style={{ color: "#222222 !important" }}>
                              Elasticsearch Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/microsoft-azure-training">
                            <a style={{ color: "#222222 !important" }}>
                              Microsoft Azure Training and Certification Course
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/elk-stack-training">
                            <a style={{ color: "#222222 !important" }}>
                              ELK Stack Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/hadoop-training">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/apache-solr-training">
                            <a style={{ color: "#222222 !important" }}>
                              SOLR Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/splunk-training">
                            <a style={{ color: "#222222 !important" }}>
                              Splunk Training
                            </a>
                          </Link>
                          <br></br>
                          {/* <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/cloud-computing-certification-courses"
                          >
                            View more
                          </a> */}
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="3"
                      >
                        <p className={styles.cat_main}>
                          Business Intelligence and Analytics
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/alteryx-training">
                            <a style={{ color: "#222222F !important" }}>
                              AlterYX Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/domo-training">
                            <a style={{ color: "#222222 !important" }}>
                              Domo Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/ibm-cognos-tm1-training">
                            <a style={{ color: "#222222 !important" }}>
                              IBM Cognos TM1 Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/cognos-training">
                            <a style={{ color: "#222222 !important" }}>
                              IBM Cognos Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/looker-training">
                            <a style={{ color: "#222222 !important" }}>
                              Looker Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/power-bi-training">
                            <a style={{ color: "#222222 !important" }}>
                              Microsoft Power BI Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/microstrategy-training">
                            <a style={{ color: "#222222 !important" }}>
                              MicroStrategy Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/obia-training">
                            <a style={{ color: "#222222 !important" }}>
                              OBIA Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/obiee-training">
                            <a style={{ color: "#222222 !important" }}>
                              OBIEE Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/qlikview-training">
                            <a style={{ color: "#222222 !important" }}>
                              QlikView Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/qlik-sense-training">
                            <a style={{ color: "#222222 !important" }}>
                              Qlik Sense Training
                            </a>
                          </Link>
                          <br></br>

                          {/* <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/business-intelligence-analytics-courses"
                          >
                            View more
                          </a> */}
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="9"
                      >
                        <p className={styles.cat_main}>CI/CD Devops</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="9">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/ansible-training">
                            <a style={{ color: "#222222 !important" }}>
                              Ansible Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/jenkins-training">
                            <a style={{ color: "#222222 !important" }}>
                              JENKINS Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/saltstack-training">
                            <a style={{ color: "#222222 !important" }}>
                              SaltStack Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/atlassian-bamboo-training">
                            <a style={{ color: "#222222 !important" }}>
                              Atlassian Bamboo Training
                            </a>
                          </Link>
                          <br></br>
                          {/* <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/frontend-development-courses"
                          >
                            View more
                          </a> */}
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Col>

                <Col lg={6} md={6} sm={12} xs={12}>
                  <Accordion eventKey="0">
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="0"
                      >
                        <p className={styles.cat_main}>
                          Cyber Security and SIEM Tools
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/arcsight-training">
                            <a style={{ color: "#222222 !important" }}>
                              ArcSight Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/blue-coat-training">
                            <a style={{ color: "#222222 !important" }}>
                              Blue Coat Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/ca-siteminder-training">
                            <a style={{ color: "#222222 !important" }}>
                              CA SiteMinder Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/commvault-training">
                            <a style={{ color: "#222222 !important" }}>
                              CommVault Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/cyber-security-training">
                            <a style={{ color: "#222222 !important" }}>
                              Cyber Security Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/cyberark-training">
                            <a style={{ color: "#222222 !important" }}>
                              CyberArk Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/fortinet-training">
                            <a style={{ color: "#222222 !important" }}>
                              FortiNet Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/palo-alto-training">
                            <a style={{ color: "#222222 !important" }}>
                              Palo Alto Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/rsa-archer-training">
                            <a style={{ color: "#222222 !important" }}>
                              RSA Archer Training
                            </a>
                          </Link>
                          <br></br>
                          {/* <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/bigdata-analytics-courses"
                          >
                            View more
                          </a> */}
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="1"
                      >
                        <p className={styles.cat_main}>Data Science</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/data-scientist-course-training">
                            <a style={{ color: "#222222 !important" }}>
                              Data Science Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/deep-learning-with-python-training">
                            <a style={{ color: "#222222 !important" }}>
                              Deep Learning Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/machine-learning-with-python-training">
                            <a style={{ color: "#222222 !important" }}>
                              ML with Python Training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                          {/* <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/devops-courses"
                          >
                            View more
                          </a> */}
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="2"
                      >
                        <p className={styles.cat_main}>
                          Programming and Frameworks
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/net-training">
                            <a style={{ color: "#222222 !important" }}>
                              .NET Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/core-java-training">
                            <a style={{ color: "#222222 !important" }}>
                              Core Java Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/go-training">
                            <a style={{ color: "#222222 !important" }}>
                              Go Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/iphone-development-training">
                            <a style={{ color: "#222222 !important" }}>
                              IOS Development Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/javascript-training">
                            <a style={{ color: "#222222 !important" }}>
                              JavaScript Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/kotlin-training">
                            <a style={{ color: "#222222 !important" }}>
                              Kotlin Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/labview-training">
                            <a style={{ color: "#222222 !important" }}>
                              LabVIEW Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/mean-stack-training">
                            <a style={{ color: "#222222 !important" }}>
                              MEAN Stack Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/microservices-training">
                            <a style={{ color: "#222222 !important" }}>
                              Microservices Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/oracle-apex-training">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Apex Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/powerapps-training">
                            <a style={{ color: "#222222 !important" }}>
                              PowerApps Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/python-training">
                            <a style={{ color: "#222222 !important" }}>
                              Python Training
                            </a>
                          </Link>
                          <br></br>
                          {/* <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/cyber-security-courses"
                          >
                            View more
                          </a> */}
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="3"
                      >
                        <p className={styles.cat_main}>
                          Software and Automation Testing
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/appium-training">
                            <a style={{ color: "#222222 !important" }}>
                              Appium Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/jmeter-training">
                            <a style={{ color: "#222222 !important" }}>
                              JMeter Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/katalon-training">
                            <a style={{ color: "#222222 !important" }}>
                              Katalon Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/manual-testing-training">
                            <a style={{ color: "#222222 !important" }}>
                              Manual Testing Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/qa-training">
                            <a style={{ color: "#222222 !important" }}>
                              QA Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/selenium-training">
                            <a style={{ color: "#222222 !important" }}>
                              Selenium Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/soapui-training">
                            <a style={{ color: "#222222 !important" }}>
                              SoapUI Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/tosca-training">
                            <a style={{ color: "#222222 !important" }}>
                              Tosca Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/uft-training">
                            <a style={{ color: "#222222 !important" }}>
                              UFT Training
                            </a>
                          </Link>
                          <br></br>
                          {/* <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/data-science-courses"
                          >
                            View more
                          </a> */}
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    {/* <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="10"
                      >
                        <p className={styles.cat_main}>
                          Software and Automation Testing
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="10">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/selenium-training">
                            <a style={{ color: "#222222 !important" }}>
                              Selenium Training and Certification Course
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/winrunner-training">
                            <a style={{ color: "#222222 !important" }}>
                              WinRunner Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/appium-training">
                            <a style={{ color: "#222222 !important" }}>
                              Appium Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/coded-ui-training">
                            <a style={{ color: "#222222 !important" }}>
                              Coded UI Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/ranorex-training">
                            <a style={{ color: "#222222 !important" }}>
                              Ranorex Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/katalon-training">
                            <a style={{ color: "#222222 !important" }}>
                              Katalon Training
                            </a>
                          </Link>
                          <br></br>
                          <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/automation-testing-courses"
                          >
                            View more
                          </a>
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card> */}
                  </Accordion>
                  <Link href="https://mindmajix.com/all-courses">
                    <a className="nav-link btn btn-outline-primary py-2 px-4">
                      <MdKeyboardArrowRight className={styles.course_icon} />
                      More Courses
                    </a>
                  </Link>
                </Col>
              </Row>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        {/* xs accordion starts */}

        <Accordion eventKey="11" className={styles.course_block_xs}>
          <Card className={styles.card}>
            <ContextAwareToggle
              className={styles.card_header}
              as={Card.Header}
              eventKey="11"
            >
              <h5 className="pd-b-10 pd-t-10">Course categories</h5>
            </ContextAwareToggle>
            <Accordion.Collapse eventKey="11">
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <Accordion eventKey="0">
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="0"
                      >
                        <p className={styles.cat_main}>
                          AI and Machine Learning
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/artificial-intelligence-course-training">
                            <a style={{ color: "#222222 !important" }}>
                              Artificial Intelligence Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/machine-learning-training">
                            <a style={{ color: "#222222 !important" }}>
                              Machine Learning Training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>

                          {/* <Link href="https://mindmajix.com/artificial-intelligence-course-hyderabad">
                            <a style={{ color: "#222222 !important" }}>
                              Artificial Intelligence Course in Hyderabad -
                              Online Certification
                            </a>
                          </Link>
                          <br></br> */}
                          <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/artificial-intelligence-courses"
                          >
                            View more
                          </a>
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="1"
                      >
                        <p className={styles.cat_main}>
                          API Management and Testing
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/api-testing-training">
                            <a style={{ color: "#222222 !important" }}>
                              API Testing Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/apigee-training">
                            <a style={{ color: "#222222 !important" }}>
                              Apigee Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/ibm-api-connect-training">
                            <a style={{ color: "#222222 !important" }}>
                              IBM API Connect Training
                            </a>
                          </Link>
                          <br></br>

                          <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/api-management-testing-courses"
                          >
                            View more
                          </a>
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="2"
                      >
                        <p className={styles.cat_main}>Big Data</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/apache-spark-training">
                            <a style={{ color: "#222222 !important" }}>
                              Apache Spark Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/apache-kafka-training">
                            <a style={{ color: "#222222 !important" }}>
                              Apache Kafka Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/denodo-training">
                            <a style={{ color: "#222222 !important" }}>
                              Denodo Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/elasticsearch-training">
                            <a style={{ color: "#222222 !important" }}>
                              Elasticsearch Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/microsoft-azure-training">
                            <a style={{ color: "#222222 !important" }}>
                              Microsoft Azure Training and Certification Course
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/elk-stack-training">
                            <a style={{ color: "#222222 !important" }}>
                              ELK Stack Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/hadoop-training">
                            <a style={{ color: "#222222 !important" }}>
                              Hadoop Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/apache-solr-training">
                            <a style={{ color: "#222222 !important" }}>
                              SOLR Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/splunk-training">
                            <a style={{ color: "#222222 !important" }}>
                              Splunk Training
                            </a>
                          </Link>
                          <br></br>
                          {/* <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/cloud-computing-certification-courses"
                          >
                            View more
                          </a> */}
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="3"
                      >
                        <p className={styles.cat_main}>
                          Business Intelligence and Analytics
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/alteryx-training">
                            <a style={{ color: "#222222F !important" }}>
                              AlterYX Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/domo-training">
                            <a style={{ color: "#222222 !important" }}>
                              Domo Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/ibm-cognos-tm1-training">
                            <a style={{ color: "#222222 !important" }}>
                              IBM Cognos TM1 Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/cognos-training">
                            <a style={{ color: "#222222 !important" }}>
                              IBM Cognos Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/looker-training">
                            <a style={{ color: "#222222 !important" }}>
                              Looker Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/power-bi-training">
                            <a style={{ color: "#222222 !important" }}>
                              Microsoft Power BI Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/microstrategy-training">
                            <a style={{ color: "#222222 !important" }}>
                              MicroStrategy Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/obia-training">
                            <a style={{ color: "#222222 !important" }}>
                              OBIA Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/obiee-training">
                            <a style={{ color: "#222222 !important" }}>
                              OBIEE Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/qlikview-training">
                            <a style={{ color: "#222222 !important" }}>
                              QlikView Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/qlik-sense-training">
                            <a style={{ color: "#222222 !important" }}>
                              Qlik Sense Training
                            </a>
                          </Link>
                          <br></br>

                          {/* <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/business-intelligence-analytics-courses"
                          >
                            View more
                          </a> */}
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="9"
                      >
                        <p className={styles.cat_main}>CI/CD Devops</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="9">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/ansible-training">
                            <a style={{ color: "#222222 !important" }}>
                              Ansible Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/jenkins-training">
                            <a style={{ color: "#222222 !important" }}>
                              JENKINS Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/saltstack-training">
                            <a style={{ color: "#222222 !important" }}>
                              SaltStack Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/atlassian-bamboo-training">
                            <a style={{ color: "#222222 !important" }}>
                              Atlassian Bamboo Training
                            </a>
                          </Link>
                          <br></br>
                          {/* <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/frontend-development-courses"
                          >
                            View more
                          </a> */}
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Col>

                <Col lg={6} md={6} sm={12} xs={12}>
                  <Accordion eventKey="0">
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="0"
                      >
                        <p className={styles.cat_main}>
                          Cyber Security and SIEM Tools
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/arcsight-training">
                            <a style={{ color: "#222222 !important" }}>
                              ArcSight Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/blue-coat-training">
                            <a style={{ color: "#222222 !important" }}>
                              Blue Coat Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/ca-siteminder-training">
                            <a style={{ color: "#222222 !important" }}>
                              CA SiteMinder Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/commvault-training">
                            <a style={{ color: "#222222 !important" }}>
                              CommVault Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/cyber-security-training">
                            <a style={{ color: "#222222 !important" }}>
                              Cyber Security Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/cyberark-training">
                            <a style={{ color: "#222222 !important" }}>
                              CyberArk Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/fortinet-training">
                            <a style={{ color: "#222222 !important" }}>
                              FortiNet Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/palo-alto-training">
                            <a style={{ color: "#222222 !important" }}>
                              Palo Alto Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/rsa-archer-training">
                            <a style={{ color: "#222222 !important" }}>
                              RSA Archer Training
                            </a>
                          </Link>
                          <br></br>
                          {/* <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/bigdata-analytics-courses"
                          >
                            View more
                          </a> */}
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="1"
                      >
                        <p className={styles.cat_main}>Data Science</p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/data-scientist-course-training">
                            <a style={{ color: "#222222 !important" }}>
                              Data Science Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/deep-learning-with-python-training">
                            <a style={{ color: "#222222 !important" }}>
                              Deep Learning Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/machine-learning-with-python-training">
                            <a style={{ color: "#222222 !important" }}>
                              ML with Python Training
                            </a>
                          </Link>
                          <br></br>

                          <br></br>
                          {/* <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/devops-courses"
                          >
                            View more
                          </a> */}
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="2"
                      >
                        <p className={styles.cat_main}>
                          Programming and Frameworks
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/net-training">
                            <a style={{ color: "#222222 !important" }}>
                              .NET Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/core-java-training">
                            <a style={{ color: "#222222 !important" }}>
                              Core Java Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/go-training">
                            <a style={{ color: "#222222 !important" }}>
                              Go Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/iphone-development-training">
                            <a style={{ color: "#222222 !important" }}>
                              IOS Development Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/javascript-training">
                            <a style={{ color: "#222222 !important" }}>
                              JavaScript Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/kotlin-training">
                            <a style={{ color: "#222222 !important" }}>
                              Kotlin Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/labview-training">
                            <a style={{ color: "#222222 !important" }}>
                              LabVIEW Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/mean-stack-training">
                            <a style={{ color: "#222222 !important" }}>
                              MEAN Stack Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/microservices-training">
                            <a style={{ color: "#222222 !important" }}>
                              Microservices Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/oracle-apex-training">
                            <a style={{ color: "#222222 !important" }}>
                              Oracle Apex Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/powerapps-training">
                            <a style={{ color: "#222222 !important" }}>
                              PowerApps Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/python-training">
                            <a style={{ color: "#222222 !important" }}>
                              Python Training
                            </a>
                          </Link>
                          <br></br>
                          {/* <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/cyber-security-courses"
                          >
                            View more
                          </a> */}
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="3"
                      >
                        <p className={styles.cat_main}>
                          Software and Automation Testing
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/appium-training">
                            <a style={{ color: "#222222 !important" }}>
                              Appium Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/jmeter-training">
                            <a style={{ color: "#222222 !important" }}>
                              JMeter Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/katalon-training">
                            <a style={{ color: "#222222 !important" }}>
                              Katalon Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/manual-testing-training">
                            <a style={{ color: "#222222 !important" }}>
                              Manual Testing Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/qa-training">
                            <a style={{ color: "#222222 !important" }}>
                              QA Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/selenium-training">
                            <a style={{ color: "#222222 !important" }}>
                              Selenium Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/soapui-training">
                            <a style={{ color: "#222222 !important" }}>
                              SoapUI Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/tosca-training">
                            <a style={{ color: "#222222 !important" }}>
                              Tosca Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/uft-training">
                            <a style={{ color: "#222222 !important" }}>
                              UFT Training
                            </a>
                          </Link>
                          <br></br>
                          {/* <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/data-science-courses"
                          >
                            View more
                          </a> */}
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    {/* <Card className={styles.card}>
                      <ContextAwareToggle
                        className={styles.card_header}
                        as={Card.Header}
                        eventKey="10"
                      >
                        <p className={styles.cat_main}>
                          Software and Automation Testing
                        </p>
                      </ContextAwareToggle>
                      <Accordion.Collapse eventKey="10">
                        <Card.Body className={styles.card_body}>
                          <Link href="https://mindmajix.com/selenium-training">
                            <a style={{ color: "#222222 !important" }}>
                              Selenium Training and Certification Course
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/winrunner-training">
                            <a style={{ color: "#222222 !important" }}>
                              WinRunner Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/appium-training">
                            <a style={{ color: "#222222 !important" }}>
                              Appium Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/coded-ui-training">
                            <a style={{ color: "#222222 !important" }}>
                              Coded UI Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/ranorex-training">
                            <a style={{ color: "#222222 !important" }}>
                              Ranorex Training
                            </a>
                          </Link>
                          <br></br>

                          <Link href="https://mindmajix.com/katalon-training">
                            <a style={{ color: "#222222 !important" }}>
                              Katalon Training
                            </a>
                          </Link>
                          <br></br>
                          <a
                            style={{ float: "right" }}
                            className="btn-outline-primary  py-1 px-4 m-t-10"
                            href="https://mindmajix.com/automation-testing-courses"
                          >
                            View more
                          </a>
                          <br></br>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card> */}
                  </Accordion>
                  <Link href="https://mindmajix.com/all-courses">
                    <a className="nav-link btn btn-outline-primary py-2 px-4">
                      <MdKeyboardArrowRight className={styles.course_icon} />
                      More Courses
                    </a>
                  </Link>
                </Col>
              </Row>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        {/* xs accordion ends */}

        <div class={styles.sub_block}>
          <p>
            <Link href="https://mindmajix.com/blog">
              <a class={styles.sub_menu}>Blog</a>
            </Link>
          </p>
          <p>
            <Link href="https://mindmajix.com/corporate-training">
              <a class={styles.sub_menu}>Corporate Training</a>
            </Link>
          </p>
          <p>
            <Link href="https://mindmajix.com/instructor">
              <a class={styles.sub_menu}>Become an Instructor</a>
            </Link>
          </p>
          <p>
            <Link href="https://mindmajix.com/corporate-training">
              <a class={styles.sub_menu}>About us</a>
            </Link>
          </p>
          <p>
            <Link href="https://mindmajix.com/instructor">
              <a class={styles.sub_menu}>Become an Instructor</a>
            </Link>
          </p>
          <p>
            <Link href="https://mindmajix.com/blog">
              <a class={styles.sub_menu}>Blog</a>
            </Link>
          </p>
        </div>
      </Container>
    </Menu>
  );
}

export default BurgerMenu;
