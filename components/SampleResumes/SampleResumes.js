import React from "react";
import styles from "./SampleResumes.module.css";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import Link from 'next/link';

function SampleResumes() {
  return (
   <div className={styles.resumes_page}>
       <div className="container">
         <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Sample Resumes
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Angular JS Sample Resumes</Breadcrumb.Item>
         </Breadcrumb>

          <h1 className={styles.title}>Angular JS Developer <span> Sample Resumes</span></h1>


          <div className={styles.post_details}>
            <Row>
              <Col md={6} className="text-center">
                  <span className={styles.rating}>
                       Rating: 4.3
                  </span>
              </Col>
              <Col md={6} className="text-center">
                  <span className={styles.views}>
                      Views: 19,231
                  </span>
              </Col>
            </Row>
          </div>

          <Row>
              <Col xl={8}>
                <div className={styles.content_wrapper}>
                    <p>
                      Our expert-approved industry's best downloadable templates are suitable for all levels - beginner,
                      intermediate and advanced professionals. IT Professionals or IT beginner can use these formats to
                      prepare their resumes and start to apply for IT Jobs.
                  </p>

                  <div className={styles.content}>
                    <h4>Angular JS Developer :</h4>
                    <p>
                    Here are the key responsibilities and sample project requirements that helps in highlighting AngularJS
                    developer / AngularJS Front-end / Ul developer CV.
                    </p>
                  </div>
                  <div className={styles.content}>
                    <h4>AngularJS 4 Developer Responsibilities:</h4>
                    <ul>
                      <li>
                         With the latest Front-End Technologies need to Develop User interfaces for Modern Rich Internet Applications.
                      </li>
                      <li>Perform product analysis and development tasks of increasingly complex nature which may require extensive research and analysis.</li>
                      <li>Need to have the skill to write tested and documented JavaScript, HTML and CSS</li>
                      <li>Capability to make design and technical decisions for AngularJS projects.</li>
                      <li>Capability to Develop application code and unit test in the AngularJS, Rest Web Services and Java technologies for the Application Development Center.</li>
                      <li>Ensuring high performance.</li>
                    </ul>
                  </div>
                  <div className={styles.content}>
                      <h4>AngularJS Developer Sample Resume Templates:</h4>

                    <div className={styles.ladder}>
                      <Row  className="text-center">
                        <Col md={3}><b>5+ Years</b></Col>
                        <Col md={6}>5+ Years Experienced Resume Template</Col>
                        <Col md={3}>
                          <a href="" className={styles.download_btn}>Download</a>
                        </Col>
                      </Row>
                      <Row  className="text-center">
                        <Col md={3}><b>2 - 5 Years</b></Col>
                        <Col md={6}>2 - 5 Years Experienced Resume Template</Col>
                        <Col md={3}>
                          <a href="" className={styles.download_btn}>Download</a>
                        </Col>
                      </Row>
                      <Row  className="text-center">
                        <Col md={3}><b>0 -2 Years</b></Col>
                        <Col md={6}>0 - 2 Years Experienced Resume Template</Col>
                        <Col md={3}>
                          <a href="" className={styles.download_btn}>Download</a>
                        </Col>
                      </Row>
                    </div>
                  </div>
                  <div className={styles.content}>
                    <p><b><i>Check your knowledge</i></b> 
                       before you attend an interview with our informative resources to help Angular JS
                      Developers to <b><i>crack interviews with ease</i></b>.
                    </p>

                    <div className={styles.questionmark}>
                      <div className={styles.questionmark_text}>
                        <h4>Angular JS <span>Interview Questions And Answers</span></h4>
                        <p>Frequently asked questions from interviews to help beginners and experienced professionals.</p>
                      </div>
                    </div>
                    <div className={styles.interview}>
                      <h4>Angular JS <span>Mock Interviews</span></h4>
                      <p>Mock Interviews helps candidates to understand what it takes to crack interviews.</p>
                    </div>

                    <div className={styles.book}>
                      <h4>Angular JS <span>Tutorial</span></h4>
                      <p>Best practice to grab job oppurtunity is to revise fundamentals often.</p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xl={4} className="d-none d-xl-block">
                <aside>

                  <div className={styles.sidebar_background}>
                    <span>Crack an interview and land a job</span>
                    <span>Mock Interviews</span>
                    <span className={styles.active}><b>Sample Resumes</b></span>
                    <span>Interview Questions</span>
                    <span>Tutorials</span>
                    <span>Training</span>
                  </div>

                  <div className={styles.sidebar}>
                    <p>
                      <b><i>For a successful interview attempt, make sure you are up-to date with the latest curriculum at </i></b>
                    </p>
                    <h5 className="mb-0"> 
                      <Link href="">
                        <a>Angular JS Online Training</a>
                      </Link> 
                    </h5>
                  </div>

                  <div className={styles.sidebar}>
                    <h5>Resources for Angular JS</h5>

                    <ul>
                      <li> <a href="#"> What is Angular CLI?</a></li>
                      <li><a href="#">Myths of Angular JS unleashed</a></li>
                      <li><a href="#">Six Figure Pay With Angular JS Certification</a></li>
                    </ul>
                  </div>
                </aside>
              </Col>
          </Row>
       </div>
   </div>
  );
}

export default SampleResumes;
