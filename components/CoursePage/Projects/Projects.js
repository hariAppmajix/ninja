import React, { useState } from "react";
import { Container, Card, Col, Image, Row, Button } from "react-bootstrap";
import styles from "./Projects.module.css";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import CModal from "../../CModal/CModal";

function Projects({ projects, course }) {
  const [show, setShow] = useState(false);
  // const [desc, setdesc] = useState("");
  const [modalProps, setModalProps] = useState({
    show: false,
    desc: "",
    project_name: "",
  });

  console.log(modalProps);

  return (
    <section id="Projects" className={styles.projects_banner}>
      <CModal
        show={modalProps.show}
        desc={modalProps.desc}
        onClose={() =>
          setModalProps({
            show: false,
            desc: "",
            project_name: "",
          })
        }
        project_name={modalProps.project_name}
      />
      <Container>
        <Row>
          <Col lg={8} md={8} sm={12} xs={12}>
            <div className="pd-b-25">
              <h2>
                <span class="color_text">{course.name}</span> Projects
              </h2>
              <p>
                You will be exposed to the complete {course.name} financials
                course details in the below sections.
              </p>
            </div>
            <div>
              <ol
                className=" list-unstyled"
                style={{ borderLeft: "3px solid #ececec" }}
              >
                {projects.slice(0, !show ? 2 : projects.length).map((item) => {
                  return (
                    <li className={styles.li_head}>
                      <h5>
                        <a
                          style={{ display: "inline-block" }}
                          onClick={() =>
                            setModalProps({
                              show: !modalProps.show,
                              desc: item.description,
                              project_name: item.project_name,
                            })
                          }
                        >
                          {/* {item.project_name} */}
                          <small>
                            <HiOutlineDocumentDuplicate
                              className={styles.dot}
                            />
                            <div
                              style={{ display: "inline-block" }}
                              className={styles.project_title}
                              dangerouslySetInnerHTML={{
                                __html: item.project_name,
                              }}
                            />
                          </small>

                          {/* <div style={{display: "inline-block"}} dangerouslySetInnerHTML={{__html: item.project_name}}/> */}
                        </a>
                      </h5>
                    </li>
                  );
                })}
              </ol>
              {/* <p style={{ textAlign: "center" }}>
                <a
                  href="https://mindmajix.com/all-courses"
                  className={"btn py-2 px-3 button_resp " + styles.read_more}
                >
                  <BiDownArrowAlt
                    style={{ fontSize: "30px", color: "#e51b29" }}
                  />
                  <span style={{ fontWeight: "700", color: "#e51b29" }}>
                    3+
                  </span>{" "}
                  Read more
                </a>
              </p> */}

              {projects.length > 2 ? (
                <p style={{ textAlign: "center" }}>
                  <a
                    onClick={
                      !show
                        ? () => setShow(!show)
                        : () => {
                            setShow(!show);
                            window.scrollTo(0, 1500);
                          }
                    }
                    aria-expanded={show}
                    className={"btn py-2 px-3 button_resp " + styles.read_more}
                  >
                    {!show ? (
                      <BiDownArrowAlt
                        style={{ fontSize: "30px", color: "#e51b29" }}
                      />
                    ) : (
                      <BiUpArrowAlt
                        style={{ fontSize: "30px", color: "#e51b29" }}
                      />
                    )}
                    <span style={{ fontWeight: "700", color: "#e51b29" }}>
                      {!show ? <>{projects.length - 2}+</> : null}
                    </span>{" "}
                    Read {show ? "less" : "more"}
                  </a>
                </p>
              ) : null}
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12} className="display_xs">
            <div className={styles.info_side}>
              <img
                src="https://cdn.mindmajixtechhub.com/mern/images/info_img.svg"
                alt="career info"
                className={styles.info_img}
              ></img>
              <h5 className="pd-t-25">
                59% of companies plan to increase positions requiring data
                analysis skills.
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
