import React from "react";
import styles from "./BlogLanding.module.css";
import { Breadcrumb, Row, Col, Card } from "react-bootstrap";
import Link from 'next/link';

function BlogLanding() {
  return (
   <div className={styles.blog_landingpage}>
       <div className="container">
         <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>
              Blog
            </Breadcrumb.Item>
         </Breadcrumb>

          <h1 className={styles.title}>Information <span>Repository</span></h1>

            <section className={styles.progress_bar}>
                <span>632 Tutorials</span>
                <span>412 Interview Questions</span>
                <span>347 Articles</span>
                <span>312 Resumes Templates</span>
                <span>132 Quizzes</span>
                <span>and lot of videos</span>
            </section>

            <section className={styles.cards_wrapper}>
                <div className={styles.cards_sec}>
                    <h3 className={styles.card_title}>Latest <span>Blogs</span></h3>
                    <p>We have got the best of technology blogs written by our expert research analysts to help you keep up-to-date with what is happening around the tech world.</p>
                    <Row>
                        <Col md={4}>
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/blog-img-1.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>What is Data Analytics?</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>22nd Jan, 2021</span>
                                <span>23 Views</span>
                            </div>
                        </Col>
                        
                        <Col md={4} className="mt-5 mt-md-0">
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/blog-img-2.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>Prince2 vs PMP: Which Certification is Right for You?</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>14th Jan, 2021</span>
                                <span>64 Views</span>
                            </div>
                        </Col>

                        <Col md={4} className="mt-5 mt-md-0">
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/blog-img-3.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>Top 10 Deep Learning Tools</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>14th Jan, 2021</span>
                                <span>64 Views</span>
                            </div>
                        </Col>
                                            
                    </Row>

                    <div className={styles.btn_sec}>
                        <Link href="/">
                            <a className={styles.custom_btn}><i>more <span>blogs</span> </i><img src="/images/blog-btn-img.jpg"></img></a>
                        </Link>
                    </div>
                </div>

                <div className={styles.cards_sec}>
                    <h3 className={styles.card_title}>Technology <span>Tutorials</span></h3>
                    <p>Explore everything you need to know about the technology starting from the fundamentals to advanced concepts. Detailed, crisp
and in-depth information written to ease the complexities associated in mastering technologies.</p>
                    <Row>
                        <Col md={4}>
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/tech-img-1.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>Data Science Tutorial</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>22nd Jan, 2021</span>
                                <span>23 Views</span>
                            </div>
                        </Col>
                        
                        <Col md={4} className="mt-5 mt-md-0">
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/tech-img-2.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>Tableau Tutorial</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>14th Jan, 2021</span>
                                <span>64 Views</span>
                            </div>
                        </Col>

                        <Col md={4} className="mt-5 mt-md-0">
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/tech-img-3.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>Blockchain Tutorial</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>14th Jan, 2021</span>
                                <span>64 Views</span>
                            </div>
                        </Col>
                                            
                    </Row>

                    <div className={styles.btn_sec}>
                        <Link href="/">
                            <a className={styles.custom_btn}><i>more <span>tutorials</span> </i><img src="/images/blog-btn-img.jpg"></img></a>
                        </Link>
                    </div>
                </div>
                <div className={styles.cards_sec}>
                    <h3 className={styles.card_title}>Best of <span>Interview Questions And Answers</span></h3>
                    <p>Questions and answers to help you understand, brush up and analyze your potential in terms of mastering particular technology.</p>
                    <Row>
                        <Col md={4}>
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/interview-img-1.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>SalesForce Interview Questions</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>22nd Jan, 2021</span>
                                <span>23 Views</span>
                            </div>
                        </Col>
                        
                        <Col md={4} className="mt-5 mt-md-0">
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/interview-img-2.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>Java Interview Questions And Answers</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>14th Jan, 2021</span>
                                <span>64 Views</span>
                            </div>
                        </Col>

                        <Col md={4} className="mt-5 mt-md-0">
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/interview-img-3.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>SQL server Interview Questions And Answers for 5+ Years Experienced</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>14th Jan, 2021</span>
                                <span>64 Views</span>
                            </div>
                        </Col>
                                            
                    </Row>

                    <div className={styles.btn_sec}>
                        <Link href="/">
                            <a className={styles.custom_btn}><i>more <span>IQAs</span> </i><img src="/images/blog-btn-img.jpg"></img></a>
                        </Link>
                    </div>
                </div>                
                <div className={styles.cards_sec}>
                    <h3 className={styles.card_title}>Knowledge Testing <span>Quizzes</span></h3>
                    <p>Questions and answers to help you understand, brush up and analyze your potential in terms of mastering particular technology.</p>
                    <Row>
                        <Col md={4}>
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/question.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>MuleSoft Quiz - Beginner Level*</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>22nd Jan, 2021</span>
                                <span>23 Views</span>
                            </div>
                        </Col>
                        
                        <Col md={4} className="mt-5 mt-md-0">
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/question.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>Artificial Intelligence Quiz - Advanced Level***</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>14th Jan, 2021</span>
                                <span>64 Views</span>
                            </div>
                        </Col>

                        <Col md={4} className="mt-5 mt-md-0">
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/question.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>PMP Quiz - Intermediate Level**</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>14th Jan, 2021</span>
                                <span>64 Views</span>
                            </div>
                        </Col>
                                            
                    </Row>

                    <div className={styles.btn_sec}>
                        <Link href="/">
                            <a className={styles.custom_btn}><i>more <span>quizzes</span> </i><img src="/images/blog-btn-img.jpg"></img></a>
                        </Link>
                    </div>
                </div>
                <div className={styles.cards_sec}>
                    <h3 className={styles.card_title}>Resume <span>Templates</span></h3>
                    <p>An excellent resume has the power to open doors of life changing opportunities. We have got templates to help desired individuals to land a great job.</p>
                    <Row>
                        <Col md={4}>
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/resume.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>Python Developer Sample Resumes</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>22nd Jan, 2021</span>
                                <span>23 Views</span>
                            </div>
                        </Col>
                        
                        <Col md={4} className="mt-5 mt-md-0">
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/resume.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>Cyber Security Sample Resumes</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>14th Jan, 2021</span>
                                <span>64 Views</span>
                            </div>
                        </Col>

                        <Col md={4} className="mt-5 mt-md-0">
                            <Link href="/">
                                <a className={styles.link}>
                                    <Card className={styles.custom_card}>
                                        <Card.Body>
                                            <div className={styles.card_icon}>
                                                <img src="images/resume.png"></img>
                                            </div>
                                            <Card.Text>
                                                <b>Machine Learning Sample Resumes</b>
                                            </Card.Text>
                                           
                                        </Card.Body>
                                    </Card>
                                </a>
                            </Link>
                            <div className={styles.card_tag}>
                                <span>14th Jan, 2021</span>
                                <span>64 Views</span>
                            </div>
                        </Col>
                                            
                    </Row>

                    <div className={styles.btn_sec}>
                        <Link href="/">
                            <a className={styles.custom_btn}><i>more <span>resumes</span> </i><img src="/images/blog-btn-img.jpg"></img></a>
                        </Link>
                    </div>
                </div>
            </section>
       </div>
   </div>
  );
}

export default BlogLanding;
