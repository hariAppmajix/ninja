import React from "react";
import styles from "./Instructor.module.css";
import { Container, Button, Row, Col } from "react-bootstrap";

function Instructor() {
  return (
    <section id="Instructor" className={styles.instructor_banner}>
      <Container>
        <p>A line on Instructor.</p>
        <h2>
          Our <span className="h2_mm color_text">Instructor</span>
        </h2>
        <Row>
          <Col className="d-flex" lg={2} md={2} sm={12} xs={12}>
            <img
              className={styles.character}
              src="https://cdn.mindmajixtechhub.com/mern/images/person_1.jpg"
              alt="instructor"
            ></img>
          </Col>
          <Col
            className={"d-flex " + styles.instructor_text}
            lg={10}
            md={10}
            sm={12}
            xs={12}
          >
            <Row style={{ width: "100%" }}>
              <Col lg={9} md={9} sm={12} xs={12} className="m-auto">
                <table>
                  <tbody>
                    <tr>
                      <th className={styles.table_element}>Instructor</th>
                      <td className={styles.table_element}>Jamesh josef</td>
                    </tr>
                    <tr>
                      <th className={styles.table_element}>Experience</th>
                      <td className={styles.table_element}>12+</td>
                    </tr>
                    <tr>
                      <th className={styles.table_element}>Specialist in</th>
                      <td className={styles.table_element}>
                        Python, Java, C++, C#
                      </td>
                    </tr>
                    <tr>
                      <th className={styles.table_element}>Description</th>
                      <td className={styles.table_element}>
                        A two line description on Instructor way of explanation
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>
              <Col
                lg={3}
                md={3}
                sm={12}
                xs={12}
                className={styles.training_modes}
              >
                <img
                  style={{ width: "150px", height: "150px" }}
                  src="https://cdn.mindmajixtechhub.com/mern/images/certified.svg"
                  alt="MindMajix certified"
                ></img>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Instructor;
