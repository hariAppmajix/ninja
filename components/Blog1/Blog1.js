import React, { useEffect } from "react";
import styles from "./Blog1.module.css";
import { Breadcrumb, Container, Row, Col } from "react-bootstrap";
import SocialIcons from "../SocialIcons/SocialIcons.js"

 
function Blog1() {


// useEffect(() => {

//   getBlogsAll()
// }, [])



  return (
   <div className={styles.blog_page}>
       <div className="container">
         <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Angular JS
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Angular JS Interview Questions</Breadcrumb.Item>
         </Breadcrumb>

          <h1 className={styles.title}>Angular JS <span> Interview Questions</span></h1>

          <SocialIcons/>

          <div className={styles.post_details}>
            <Row>
              <Col md={6} className="text-center text-sm-left">
                <Row>
                  <Col sm={6}>
                    <span className={styles.rating}>
                       Rating: 4.3
                    </span>
                  </Col>

                  <Col sm={6}>
                    <span className={styles.views}>
                      Views: 19,231
                    </span>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="text-center text-sm-left">
                 <Row>
                  <Col sm={6}>
                    <span className={styles.author}>
                       by Viswanath
                    </span>
                  </Col>

                  <Col sm={6}>
                     <span className={styles.modified_time}>
                       Last modified: 18th, Jan 2020
                     </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          <Row>
              <Col lg={4} className="d-none d-lg-block">
                <aside>
                  <div className={styles.sidebar}>
                    <h5>You may also interested in</h5>

                    <ul>
                      <li><a href="#">Angular JS Tutorial</a></li>
                      <li> <a href="#"> What is Angular CLI?</a></li>
                      <li><a href="#">Myths of Angular JS unleashed</a></li>
                      <li><a href="#">Angular 8 Tutorial</a></li>
                      <li><a href="#">Six Figure Pay With Angular JS Certification</a></li>
                    </ul>
                  </div>
                  <div className={styles.sidebar}>
                    <h5>Essential Resources</h5>

                    <ul>
                      <li><a href="#">Resume Building</a></li>
                      <li><a href="#">Attend Mock Interviews</a></li>
                    </ul>
                  </div>
                  <div className={styles.sidebar}>
                    <h5>Angular JS community</h5>

                    <ul>
                      <li><a href="#">Explore real-time issues getting addressed by experts</a></li>
                    </ul>
                  </div>
                  <div className={styles.sidebar}>
                    <h5>Active Free Webinars</h5>

                    <ul>
                      <li><a href="#">Javascript Fundamentals - Jan 22 - 4 Days</a></li>
                      <li><a href="#">Python Framework - Jan 26 - 4 Days</a></li>
                    </ul>
                  </div>
                </aside>
              </Col>
              <Col lg={8}>
                <div className={styles.content}>
                    <h4> <i>Frequently Asked Angular Interview Questions</i> </h4>

                    <p>Browse top 100+ Angular Interview Questions and become familiar with the answers prepared by our industry experts. Our Angular Interview Questions will cover all prominent topics including directives, angular components lifecycles, angular materials, pipes, angular forms and other concepts that help you to clear the Angular interview. Acquaint yourself with the Angular interview question and answers that are frequently asked in interviews.</p>
                </div>

                <div className={styles.toc}>
                  <h4>Table of Contents</h4>

                  <ul>
                    <li><a href="#">What is Angular JS?</a></li>
                    <li><a href="#">What are the key features of Angular JS?</a></li>
                    <li><a href="#">Difference between Angular and Angular JS?</a></li>
                    <li><a href="#">What are Angular expressions?</a></li>
                    <li><a href="#">Explain the difference between Angular and JQuery?</a></li>
                    <li><a href="#">What is Angular CLI?</a></li>
                    <li><a href="#">Explain the various features of Angular?</a></li>
                    <li><a href="#">What are the advantages of Angular?</a></li>
                  </ul>
                </div>


                <div className={styles.questions_sec}>
                  <h5><i>Angular Basic Interview Questions</i></h5>

                  <div className={styles.question}>
                      <h6>
                        1.What is Angular Js?
                      </h6>

                      <p className={styles.answer}>
                          AngularJs is an open-source JavaScript framework that helps to build high scale and extensible web applications. It works with HTML and JavaScript. All the components can be mentioned clearly in the applications using HTML. It is best for single web page applications. It is used in the combination of HTML UI elements with JavaScript objects. 
                      </p>
                  </div>

                    <div className={styles.note}>
                      <p>
                        <a href="">
                          If you want to become an Angular Certified Specialist, then visit Mindmajix - A Global online training platform: <span>"Angular Training Online"</span>. Achieve excellence in Angular JS.
                        </a>
                      </p>
                    </div>

                  <div className={styles.question}>
                      <h6>
                        2.What is Angular Js?
                      </h6>

                      <p className={styles.answer}>
                          AngularJs is an open-source JavaScript framework that helps to build high scale and extensible web applications. It works with HTML and JavaScript. All the components can be mentioned clearly in the applications using HTML. It is best for single web page applications. It is used in the combination of HTML UI elements with JavaScript objects. 
                      </p>
                  </div>                
                </div>

                <div className={styles.progress_sec}>
                    <div className={styles.progress_links}>
                      <a href="">Tutorial</a>
                      <a href="">Training</a>
                      <a href="">Interview Questions</a>
                      <a href="">Mock Interviews</a>
                      <a href="">Resume Preparation</a>
                      <a href="">Dream JOB</a>
                    </div>
                    <div className={styles.progress_bar}></div>

                    <span>...that's how we transform your CAREER</span>
                </div>
              </Col>
            </Row>
       </div>
   </div>
  );
}

export default Blog1;
