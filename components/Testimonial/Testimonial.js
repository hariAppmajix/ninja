import React from "react";
import styles from "./Testimonial.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as _ from "lodash";

function Testimonial() {
  let settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section id="Testimonials">
      <div className="container">
        <div className="row pb-4">
          <div className="col-md-12 heading-section  ">
            <h4 className="mb-4 h2_mm">
              <span className="color_text">Testimonials</span>
            </h4>
          </div>
        </div>
      </div>

      <Container>
        <Row>
          <Col lg={9} md={12} sm={12} xs={12}>
            <Slider {...settings}>
              <div>
                <Row>
                  <Col className={styles.character_col} lg={4} sm={12}>
                    <Image
                      className={styles.character}
                      src="images/Anna_Przygodzka.jpg"
                      style={{ width: "125px", height: "125px" }}
                      alt="character"
                    ></Image>
                    <div className="pd-t-20 pd-b-20">
                      <p className={styles.character_name}>
                        <a
                          href="https://www.linkedin.com/in/anna-przygodzka-czerniak/"
                          target="_blank"
                        >
                          - Anna Przygodzka
                        </a>
                      </p>
                      <p className={styles.sub_details}>
                        HR & Training Department
                        <br></br>Kapsch Telematic Services sp.Poland
                      </p>
                    </div>
                  </Col>
                  <Col lg={8} sm={12}>
                    <blockquote className="text-center">
                      <p className={styles.testimonial_text}>
                        <Image
                          className={styles.quote_icon}
                          src="https://cdn.mindmajixtechhub.com/mern/images/quote.svg"
                          style={{ width: "20px", height: "20px" }}
                          alt="character"
                        ></Image>
                        MindMajix conducted Octopus Deploy training for our team
                        successfully. Even though the initially assigned
                        instructor not available before the training for health
                        reasons, MindMajix assigned another trainer immediately
                        from their pool of trainers. We see no issues
                        interacting with MindMajix as they are proactive and
                        very responsible.
                      </p>
                    </blockquote>
                  </Col>
                </Row>
              </div>

              <div>
                <Row>
                  <Col className={styles.character_col} lg={4} sm={12}>
                    <Image
                      className={styles.character}
                      src="images/SaiKumar.jpg"
                      style={{ width: "125px", height: "125px" }}
                      alt="character"
                    ></Image>
                    <div className="pd-t-20 pd-b-20">
                      <p className={styles.character_name}>
                        <a
                          href="https://www.linkedin.com/in/sai-kumar-gangula-7a2117120/"
                          target="_blank"
                        >
                          - SaiKumar
                        </a>
                      </p>
                      <p className={styles.sub_details}>
                        Director - TAG
                        <br></br>Techdemocracy
                      </p>
                    </div>
                  </Col>
                  <Col lg={8} sm={12}>
                    <blockquote className="text-center">
                      <p className={styles.testimonial_text}>
                        <Image
                          className={styles.quote_icon}
                          src="https://cdn.mindmajixtechhub.com/mern/images/quote.svg"
                          style={{ width: "20px", height: "20px" }}
                          alt="character"
                        ></Image>
                        MindMajix organized a truly and highly professional
                        corporate training for a huge batch of 43 employees in
                        our organization on OKTA. The training has been
                        extremely interactive, resourceful, methodical and
                        offered great lab support for our learners to
                        practice.The end-to-end interaction has been smooth
                        starting from training requirement discussion until the
                        successful completion of the training.
                      </p>
                    </blockquote>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col className={styles.character_col} lg={4} sm={12}>
                    <Image
                      className={styles.character}
                      src="images/Srinivasa_Rao.jpg"
                      style={{ width: "125px", height: "125px" }}
                      alt="character"
                    ></Image>
                    <div className="pd-t-20 pd-b-20">
                      <p className={styles.character_name}>
                        <a
                          href="https://www.linkedin.com/in/nv-srinivasa-rao-3524a0135/"
                          target="_blank"
                        >
                          - Srinivasa Rao
                        </a>
                      </p>
                      <p className={styles.sub_details}>
                        Associate Manager – Client Services
                        <br></br>Jadeglobal
                      </p>
                    </div>
                  </Col>
                  <Col lg={8} sm={12}>
                    <blockquote className="text-center">
                      <p className={styles.testimonial_text}>
                        <Image
                          className={styles.quote_icon}
                          src="https://cdn.mindmajixtechhub.com/mern/images/quote.svg"
                          style={{ width: "20px", height: "20px" }}
                          alt="character"
                        ></Image>
                        MindMajix has top notch trainer and expertise in
                        delivering various courses in Apttus, and they delivered
                        multiple Apttus courses for our team. The training has
                        been delievered exactly as per the scope and schedule
                        that have been customized as per our team's expectations
                        and preferences. The lab and practical guidance offered
                        by MindMajix and trainer have been very effective and
                        our team had very enriching knowledge experience.
                      </p>
                    </blockquote>
                  </Col>
                </Row>
              </div>
            </Slider>
          </Col>
          <Col
            className="text-center"
            style={{ margin: "auto" }}
            lg={3}
            md={12}
            sm={12}
            xs={12}
          >
            <h4 className={styles.head_tag}>4,60,000 +</h4>
            <p>Happy Customers</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonial;
