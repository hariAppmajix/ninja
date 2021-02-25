import React from "react";
import { Col, Container, Row, Card, Image } from "react-bootstrap";
import styles from "./RelatedCourses.module.css";

import { FiUsers } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";

function RelatedCourses() {
  return (
    <section>
      <Container>
        <p>Choose your own comfortable learning experience.</p>
        <h2 className="pd-b-25">
          <span className="color_text">Related</span> Courses
        </h2>
        <Row>
          <Col lg={4} md={4} sm={6} xs={12}>
            <Card className={styles.card}>
              <Card.Header className={styles.card_top}>
                <Image
                  className={styles.star_icon}
                  alt="Cyber Security"
                  src="https://cdn.mindmajixtechhub.com/mern/images/courses/Cyber_Security.svg"
                  style={{ width: "40px", height: "40px" }}
                ></Image>
              </Card.Header>
              <Card.Link href="https://mindmajix.com/cyber-security-training">
                <Card.Body className={styles.card_body}>
                  <Card.Title className={styles.card_title}>
                    Cyber Security
                  </Card.Title>

                  <Card.Text className={styles.learners_text}>
                    <p className={styles.card_text}>
                      <AiOutlineCalendar className={styles.learners_icon} />2
                      months
                    </p>
                    <p className={styles.card_text}>
                      <FiUsers className={styles.learners_icon} />
                      4,076 learners
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card.Link>
            </Card>
          </Col>
          <Col lg={4} md={4} sm={6} xs={12}>
            <Card className={styles.card}>
              <Card.Header className={styles.card_top}>
                <Image
                  className={styles.star_icon}
                  alt="Tableau"
                  src="https://cdn.mindmajixtechhub.com/mern/images/courses/Tableau.svg"
                  style={{ width: "40px", height: "40px" }}
                ></Image>
              </Card.Header>
              <Card.Link href="https://mindmajix.com/tableau-training">
                <Card.Body className={styles.card_body}>
                  <Card.Title className={styles.card_title}>Tableau</Card.Title>

                  <Card.Text className={styles.learners_text}>
                    <p className={styles.card_text}>
                      <AiOutlineCalendar className={styles.learners_icon} />2
                      months
                    </p>
                    <p className={styles.card_text}>
                      <FiUsers className={styles.learners_icon} />
                      4,076 learners
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card.Link>
            </Card>
          </Col>
          <Col lg={4} md={4} sm={6} xs={12}>
            <Card className={styles.card}>
              <Card.Header className={styles.card_top}>
                <Image
                  className={styles.star_icon}
                  alt="AWS"
                  src="https://cdn.mindmajixtechhub.com/mern/images/courses/aws.svg"
                  style={{ width: "40px", height: "40px" }}
                ></Image>
              </Card.Header>
              <Card.Link href="https://mindmajix.com/aws-training">
                <Card.Body className={styles.card_body}>
                  <Card.Title className={styles.card_title}>AWS</Card.Title>

                  <Card.Text className={styles.learners_text}>
                    <p className={styles.card_text}>
                      <AiOutlineCalendar className={styles.learners_icon} />2
                      months
                    </p>
                    <p className={styles.card_text}>
                      <FiUsers className={styles.learners_icon} />
                      4,076 learners
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card.Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default RelatedCourses;
