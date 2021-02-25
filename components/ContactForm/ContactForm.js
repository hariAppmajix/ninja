import React, { useState, useEffect } from "react";
import {
  Button,
  Row,
  Col,
  Container,
  DropdownButton,
  Dropdown,
  Alert,
} from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";
import { formSubmit } from "../../apiCalls";
const countryMap = {
  AG: "Argentina",
  AU: "Australia",
  CH: "China",
  FR: "France",
  GER: "Germany",
  HK: "Hong Kong",
  IT: "Italy",
  JP: "Japan",
  NED: "Netherlands",
  NOR: "Norway",
  PAK: "Pakistan",
  RU: "Russia",
  SAU: "Saudi Arabia",
  NG: "Nigeria",
  RSA: "South Africa",
  SWE: "Sweden",
  THA: "Thailand",
  UK: "UK",
  US: "USA",
  IN: "India",
  BD: "Bangladesh",
  UAE: "United Arab Emirates",
  SNG: "Singapore",
};

function ContactForm({ ipMetaData }) {
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

  console.log(ipMetaData);

  const [loading, setloading] = useState(false);
  const [empty, setempty] = useState(true);
  const [success, setsuccess] = useState(true);
  const [code, setCode] = useState("IN +91");

  useEffect(() => {
    if (
      ipMetaData &&
      ipMetaData.country_code &&
      ipMetaData.country_calling_code
    ) {
      setCode(`${ipMetaData.country_code} ${ipMetaData.country_calling_code}`);
    }
  }, []);

  const handleSelect = (e) => {
    setCode(e);
  };

  const onSubmit = (values, { setSubmitting }) => {
    let formData = JSON.parse(JSON.stringify(values, null, 2));
    if (formData) {
      setempty(false);
    }
    if (formData.phone) {
      formData.phone = `${code.split(" ")[1] + formData.phone}`;
    }
    formData.Course = null;
    formData.country = countryMap[code.split(" ")[0]];
    setloading(true);

    formSubmit(formData).then((res) => {
      if (res.success) {
        setsuccess(true);
      } else {
        setsuccess(false);
      }
      setloading(false);
    });
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12} className="pd-b-25 text-center">
            <p>Meet the Expert Who Can Kickstart Your Career</p>
            <h4 className="mb-4 h2_mm">
              Request a <span className="color_text">Free Demo</span>
            </h4>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit}>
                  <Row>
                    <Col lg={4} md={4} sm={12} xs={12} className="pd-t-15">
                      <div className="form-group">
                        <Field
                          className={styles.contact_input}
                          // required
                          type="text"
                          name="name"
                          placeholder="Name"
                        />
                        <div style={{ color: "#e21928" }}>
                          <ErrorMessage name="name" />
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={4} sm={12} xs={12} className="pd-t-15">
                      <div className="form-group">
                        <Field
                          className={styles.contact_input}
                          // required
                          type="email"
                          name="email"
                          placeholder="Email"
                        />
                        <div style={{ color: "#e21928" }}>
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                    </Col>

                    <Col lg={4} md={4} sm={12} xs={12} className="pd-t-5">
                      <Row>
                        <Col lg={4} md={4} sm={4} xs={4}>
                          <DropdownButton
                            id="dropdown-basic-button"
                            className={styles.contact_input}
                            title={code}
                            onSelect={handleSelect}
                          >
                            <Dropdown.Item eventKey="IN +91">
                              IN +91
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="US +1">
                              US +1
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="UK +44">
                              UK +44
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="NG +234">
                              NG +234
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="ARG +54">
                              ARG +54
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="ARG +880">
                              BD +880
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="AUS +61">
                              AUS +61
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="CHN +86">
                              CHN +86
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="FR +33">
                              FR +33
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="GER +49">
                              GER +49
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="HK +852">
                              HK +852
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="IT +39">
                              IT +39
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="JP +81">
                              JP +81
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="NED +31">
                              NED +31
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="NOR +47">
                              NOR +47
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="PAK +92">
                              PAK +92
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="RU +7">
                              RU +7
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="SAU +966">
                              SAU +966
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="SNG +65">
                              SNG +65
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="RSA +27">
                              RSA +27
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="SWE +46">
                              SWE +46
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="THA +66">
                              THA +66
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="UAE +971">
                              UAE +971
                            </Dropdown.Item>
                          </DropdownButton>
                        </Col>
                        <Col lg={8} md={8} sm={8} xs={8}>
                          <div className="form-group">
                            <Field
                              className={styles.contact_input + " form-control"}
                              // required
                              type="text"
                              name="phone"
                              placeholder="Phone number"
                              {...formik.getFieldProps("phone")}
                            />
                            <div style={{ color: "#e21928" }}>
                              <ErrorMessage name="phone" />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Col>

                    {/* <Col lg={4} md={4} sm={12} xs={12} className="pd-t-15">
                      <div className="form-group">
                        <Field
                          className={styles.contact_input}
                          // required
                          type="text"
                          name="Course"
                          placeholder="Course"
                        />
                        <div style={{ color: "#e21928" }}>
                          <ErrorMessage name="name" />
                        </div>
                      </div>
                    </Col> */}
                    <Col lg={12} md={12} sm={12} xs={12} className="pd-t-15">
                      <div className="form-group">
                        <Field
                          className={`${styles.contact_input} form-control`}
                          as="textarea"
                          rows={3}
                          name="message"
                          placeholder="Message"
                        />
                        <div style={{ color: "#e21928" }}>
                          <ErrorMessage name="message" />
                        </div>
                      </div>
                    </Col>

                    <Col lg={12} md={12} sm={12} xs={12} className="m-t-15">
                      <Button
                        variant="primary"
                        className="btn-outline-primary py-2 px-4 "
                        type="submit"
                        style={{ float: "right" }}
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                  <>
                    {!empty && success ? (
                      <Alert
                        className="m-t-15"
                        style={{
                          backgroundColor: " #e63542",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        <Alert.Heading>
                          Thank you for the details.
                        </Alert.Heading>
                        <hr />
                        <p className="mb-0">
                          Our Team will get back to you soon !
                        </p>
                      </Alert>
                    ) : !(empty && success) ? (
                      <Alert
                        className="m-t-15"
                        style={{
                          backgroundColor: " #e63542",
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        <Alert.Heading>
                          Thank you for the details.
                        </Alert.Heading>
                        <hr />
                        <p className="mb-0">Something Failed !</p>
                      </Alert>
                    ) : (
                      <></>
                    )}
                  </>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactForm;
