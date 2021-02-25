import React, { useEffect, useState } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Accordion,
  Card,
  Button,
} from "react-bootstrap";
import styles from "./Curriculum.module.css";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { BiDownArrowAlt } from "react-icons/bi";
import { BiUpArrowAlt } from "react-icons/bi";
// import { GoPrimitiveDot } from "react-icons/go";
// import { curriculum_list } from "./CurriculumList";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { formSubmit, getCountryCodeFromIP } from "../../../apiCalls";
import Alert from "react-bootstrap/Alert";

function Curriculum({ lessons, heading, course }) {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loading, setloading] = useState(false);
  const [empty, setempty] = useState(true);
  const [success, setsuccess] = useState(true);
  const [ipMeta, setIPMeta] = useState({});
  const [activeTab, setActiveTab] = useState("");

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 450) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(async () => {
    window.addEventListener("scroll", handleScroll);

    const getIPMeta = await getCountryCodeFromIP();
    setIPMeta(getIPMeta.data);
  });

  console.log(ipMeta);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Address").required("Required"),
    phone: Yup.string()
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .required("Required"),
    message: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    // let formData = JSON.parse(JSON.stringify(values, null, 2));
    // if (formData) {
    //   setempty(false);
    // }
    // if (formData.phone) {
    //   formData.phone = `${ipMeta.country_calling_code + formData.phone}`;
    // }
    // formData.Course = null;
    // formData.country = ipMeta.country
    // setloading(true);

    // formSubmit(formData).then((res) => {
    //   if (res.success) {
    //     setsuccess(true);
    //   } else {
    //     setsuccess(false);
    //   }
    //   setloading(false);
    // });

    console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  const checkThis = (e) => {
    console.log(e.currentTarget.innerText);
  };

  return (
    <section id="Curriculum" className={styles.curriculum_banner}>
      <Container>
        <Row>
          <Col lg={8} md={12} sm={12} xs={12}>
            <div className="pd-b-25">
              <h2>
                {heading}
                <span class="color_text"> Curriculum</span>
              </h2>
              <p>
                You will be exposed to the complete oracle fusion financials
                course details in the below sections.
              </p>
            </div>
            <Accordion className={styles.accordion} defaultActiveKey="">
              {/* Accordion Base Component */}
              {lessons
                .slice(0, !show ? 3 : lessons.length)
                .map((lesson, itemIndex) => (
                  <Card className={styles.card}>
                    <Accordion.Toggle
                      as={Card.Header}
                      className={styles.card_header}
                      eventKey={"event" + itemIndex}
                      onClick={(e) =>
                        activeTab === "event" + itemIndex
                          ? setActiveTab("")
                          : setActiveTab("event" + itemIndex)
                      }
                    >
                      {activeTab === "event" + itemIndex ? (
                        <AiOutlineMinusCircle className={styles.headplus} />
                      ) : (
                        <AiOutlinePlusCircle className={styles.headplus} />
                      )}
                      {lesson.lesson}
                    </Accordion.Toggle>
                    <Accordion.Collapse
                      key={"event" + itemIndex}
                      id={"event" + itemIndex}
                      eventKey={"event" + itemIndex}
                    >
                      <Card.Body className={styles.card_body}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: lesson.description,
                          }}
                        />
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}

              {/* <Card className={styles.card}>
                <Accordion.Toggle
                  as={Card.Header}
                  className={styles.card_header}
                  eventKey="0"
                >
                  <TiPlus className={styles.headplus} />
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body className={styles.card_body}>
                    Hello! I'm the body
                  </Card.Body>
                </Accordion.Collapse>
              </Card>



              <Card className={styles.card}>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="1"
                  className={styles.card_header}
                >
                  <TiPlus className={styles.headplus} />
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className={styles.card_body}>
                    Hello! I'm another body 
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.card}>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="2"
                  className={styles.card_header}
                >
                  <TiPlus className={styles.headplus} />
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body className={styles.card_body}>
                    Hello! I'm another body 
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className={styles.card}>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="3"
                  className={styles.card_header}
                >
                  <TiPlus className={styles.headplus} />
                  Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body className={styles.card_body}>
                    Hello! I'm another body 
                  </Card.Body>
                </Accordion.Collapse>
              </Card> */}
            </Accordion>
            {lessons.length > 3 ? (
              <Row>
                <Col lg={8} md={8} sm={9} xs={9}>
                  <p style={{ textAlign: "center" }}>
                    <a
                      onClick={
                        !show
                          ? () => setShow(!show)
                          : () => {
                              setShow(!show);
                              window.scrollTo(0, 600);
                            }
                      }
                      aria-expanded={show}
                      className={
                        "btn py-2 px-3 button_resp " + styles.read_more
                      }
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
                        {!show ? <>{lessons.length - 3}+</> : null}
                      </span>{" "}
                      Read {show ? "less" : "more"}
                    </a>
                  </p>
                </Col>
                <Col lg={4} md={4} sm={3} xs={3}>
                  <Button
                    style={{ float: "right" }}
                    variant="primary"
                    className="btn-outline-primary py-2 px-2 "
                    type="submit"
                  >
                    <HiDownload className="btn_icon" />
                    <span className="display_xs">Download</span>
                  </Button>
                </Col>
              </Row>
            ) : null}
          </Col>
          <Col lg={4} md={4} sm={12} xs={12} className="display_xs">
            <div
              className={
                scrolled
                  ? styles.contact_side + " " + styles.contact_sticky
                  : styles.contact_side
              }
            >
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => (
                  <Form onSubmit={formik.handleSubmit}>
                    {/* {!success ?
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                          <strong>Thank you for registering.</strong>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>  
                      : <div class="alert alert-danger alert-dismissible fade show" role="alert">
                      <strong>Thank you for registering.</strong>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>  } */}

                    <Row>
                      <Col lg={12} sm={12} className="pd-t-15">
                        <Form.Group controlId="formBasicName">
                          <Field
                            className={styles.contact_input + " form-control"}
                            name="name"
                            type="text"
                            placeholder="Name"
                          />
                          <div style={{ color: "#e21928" }}>
                            <ErrorMessage name="name" />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col lg={12} sm={12} className="pd-t-15">
                        <Form.Group controlId="formBasicEmail">
                          <Field
                            className={styles.contact_input + " form-control"}
                            name="email"
                            type="email"
                            placeholder="Email"
                          />
                          <div style={{ color: "#e21928" }}>
                            <ErrorMessage name="email" />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col lg={12} sm={12} className="pd-t-15">
                        <Form.Group controlId="formBasicPhone">
                          <Field
                            className={styles.contact_input + " form-control"}
                            name="phone"
                            type="text"
                            placeholder="Phone Number"
                          />
                          <div style={{ color: "#e21928" }}>
                            <ErrorMessage name="phone" />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col lg={12} sm={12} className="pd-t-15">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Field
                            className={styles.contact_input + " form-control"}
                            name="message"
                            as="textarea"
                            rows={3}
                            placeholder="Message"
                          />
                          <div style={{ color: "#e21928" }}>
                            <ErrorMessage name="message" />
                          </div>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button
                      variant="primary"
                      className="btn-outline-primary py-2 px-4 m-t-15"
                      type="submit"
                    >
                      <FiArrowRight className="btn_icon" />
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Curriculum;
