import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import styles from "../Footer/Footer.module.css";
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ImLocation } from "react-icons/im";
import { RiPhoneFill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { formSubmit } from "../../apiCalls";

function Footer({ ipMetaData }) {
  const [success, setsuccess] = useState(false);
  const [alert, setAlert] = useState(null);

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Address").required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    let formData = JSON.parse(JSON.stringify(values, null, 2));

    console.log(formData);

    formData.Course = null;
    formData.country = ipMetaData.country_name;
    formData.phone = "0";

    formSubmit(formData).then((res) => {
      if (res.success) {
        setsuccess(true);
        setAlert(
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            <strong>Registration Successful!</strong>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setAlert(null)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        );
      } else {
        setsuccess(false);
        setAlert(
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Registration Unsuccessful!</strong>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={() => setAlert(null)}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        );
      }
    });
  };

  return (
    <footer className={styles.bg_bottom} style={{fontSize:"14px"}}  >
      <Container>
        <Row className="text-center">
          <Col lg={1} md={1} sm={12} xs={12} className={styles.footer_col_1}>
            <ul
              className={`list-unstyled float-md-left float-lft ${styles.social_flex}`}
            >
              <li>
                <a
                  href="https://www.facebook.com/MindMajixTechnologies"
                  target="_blank"
                >
                  <FaFacebookF className={styles.social_icon} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/mindmajix" target="_blank">
                  <FaTwitter className={styles.social_icon} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mindmajix/" target="_blank">
                  <FaInstagram className={styles.social_icon} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/mindmajix"
                  target="_blank"
                >
                  <FaLinkedin className={styles.social_icon} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/mindmajix" target="_blank">
                  <FaYoutube className={styles.social_icon} />
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={11} md={11} sm={12} xs={12}>
            <Row>
              {/* <Col lg={12} md={12} sm={12} xs={12}>
                <h4 className={`pd-b-25 heading_mm ${styles.btn_shine}`}>
                  Get updates on offers and new courses
                </h4>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {(formik) => (
                    <Form
                      className="contact-form"
                      onSubmit={formik.handleSubmit}
                    >
                      {alert}
                      <div className="row">
                        <div className="col-md-10 form-group">
                          <Form.Group controlId="formBasicEmail">
                            <Field
                              className={styles.contact_input + " form-control"}
                              name="email"
                              type="email"
                              placeholder="Enter email"
                              {...formik.getFieldProps("email")}
                            />
                            <div style={{ color: "#e21928" }}>
                              <ErrorMessage name="email" />
                            </div>
                          </Form.Group>
                        </div>
                        <div className="col-md-2 form-group ">
                          <Button
                            variant="primary"
                            className={`btn-outline-primary py-2 px-4 ${styles.footer_btn}`}
                            type="submit"
                            style={{
                              float: "right",
                              color: "white !important",
                            }}
                          >
                            Submit
                          </Button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </Col> */}
              {/* <Col lg={6} md={6} sm={12} xs={12} className="pd-t-25">
                <Row>
                  <Col lg={1} md={1} sm={2} xs={2}>
                    <ImLocation className={styles.address_icon} />
                  </Col>
                  <Col lg={11} md={11} sm={10} xs={10}>
                    <p className={styles.address}>
                      244 Fifth Avenue, Suite 1222 New York(NY) United States
                      (US) - 10001
                    </p>
                  </Col>
                  <Col lg={1} md={1} sm={2} xs={2}>
                    <RiPhoneFill className={styles.address_icon} />
                  </Col>
                  <Col lg={11} md={11} sm={10} xs={10}>
                    <p className={styles.address}> USA : +1 917 456 8403</p>
                  </Col>
                  <Col lg={1} md={1} sm={2} xs={2}>
                    <IoMail className={styles.address_icon} />
                  </Col>
                  <Col lg={11} md={11} sm={10} xs={10}>
                    <p className={styles.address}> info@mindmajix.com</p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12} className="pd-t-25">
                <Row>
                  <Col lg={1} md={1} sm={2} xs={2}>
                    <ImLocation className={styles.address_icon} />
                  </Col>
                  <Col lg={11} md={11} sm={10} xs={10}>
                    <p className={styles.address}>
                      91Springboard, 512/10, Service Lane, Outer Ring Road,
                      Mahadevapura, Next to More Megastore, Bangalore 560048,
                      Karnataka
                    </p>
                  </Col>
                  <Col lg={1} md={1} sm={2} xs={2}>
                    <RiPhoneFill className={styles.address_icon} />
                  </Col>
                  <Col lg={11} md={11} sm={10} xs={10}>
                    <p className={styles.address}> India : +91 905 240 3388</p>
                  </Col>
                  <Col lg={1} md={1} sm={2} xs={2}>
                    <IoMail className={styles.address_icon} />
                  </Col>
                  <Col lg={11} md={11} sm={10} xs={10}>
                    <p className={styles.address}> info@mindmajix.com</p>
                  </Col>
                </Row>
              </Col> */}
            </Row>
            <Row style={{ margin: "auto" }}>
              <Col lg={7} md={7} sm={6} xs={6} className="pd-t-15">
                <h5
                  className="text-white pd-b-15"
                  style={{ fontWeight: "700" }}
                >
                  Trending courses
                </h5>
                <div className="mb-4 ">
                  <Row>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <ul className={`list-unstyled ${styles.footer_flex}`}>
                        <li>
                          <a
                            href="https://mindmajix.com/tableau-training"
                            className={"p-2 d-block " + styles.li_element}
                          >
                            Tableau Training
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mindmajix.com/microsoft-azure-training"
                            className={"p-2 d-block " + styles.li_element}
                          >
                            Microsoft Azure Training
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mindmajix.com/oracle-dba-training"
                            className={"p-2 d-block " + styles.li_element}
                          >
                            Oracle DBA Training
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mindmajix.com/qlikview-training"
                            className={"p-2 d-block " + styles.li_element}
                          >
                            QlikView Training
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                      <ul className={`list-unstyled ${styles.footer_flex}`}>
                        <li>
                          <a
                            href="https://mindmajix.com/docker-training"
                            className={"p-2 d-block " + styles.li_element}
                          >
                            Docker Training
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mindmajix.com/jboss-training"
                            className={"p-2 d-block " + styles.li_element}
                          >
                            JBoss Training
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mindmajix.com/informatica-training"
                            className={"p-2 d-block " + styles.li_element}
                          >
                            Informatica Training
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://mindmajix.com/power-bi-training"
                            className={"p-2 d-block " + styles.li_element}
                          >
                            Power BI Training
                          </a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={5} md={5} sm={6} xs={6} className="pd-t-15">
                <h5
                  className="text-white pd-b-10"
                  style={{ fontWeight: "700" }}
                >
                  Company
                </h5>
                <Row>
                  <Col lg={6} md={6} sm={12} xs={12}>
                    <ul className={`list-unstyled ${styles.footer_flex}`}>
                      <li>
                        <a
                          href="https://mindmajix.com/about"
                          className={"p-2 d-block " + styles.li_element}
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mindmajix.com/hire-from-mindmajix"
                          className={"p-2 d-block " + styles.li_element}
                        >
                          Hire from us
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mindmajix.com/sample-resumes"
                          className={"p-2 d-block " + styles.li_element}
                        >
                          Sample Resumes
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mindmajix.com/blog"
                          className={"p-2 d-block " + styles.li_element}
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </Col>

                  <Col lg={6} md={6} sm={12} xs={12}>
                    <ul className={`list-unstyled ${styles.footer_flex}`}>
                      <li>
                        <a
                          href="https://mindmajix.com/write-for-us"
                          className={"p-2 d-block " + styles.li_element}
                        >
                          Write for us
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mindmajix.com/terms-of-service-and-privacy-policy"
                          className={"p-2 d-block " + styles.li_element}
                        >
                          Terms of use
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mindmajix.com/terms-of-service-and-privacy-policy"
                          className={"p-2 d-block " + styles.li_element}
                        >
                          Refund Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mindmajix.com/contact"
                          className={"p-2 d-block " + styles.li_element}
                        >
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <div className="mb-4 "></div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12} className="pd-t-15">
                <div className="mb-4 ml-md-5">
                  <p
                    className="text-white p-2 "
                    style={{ textAlign: "center" }}
                  >
                    Copyright © 2021 &nbsp;
                    <a
                      className="text-white"
                      href="https://mindmajix.com"
                      target="_blank"
                    >
                      MindMajix Technologies Inc.&nbsp;
                    </a>
                    All Rights Reserved
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
