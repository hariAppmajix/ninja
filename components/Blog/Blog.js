import React from "react";
import styles from "./Blog.module.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { RiShareForwardLine } from "react-icons/ri";
import { RiBookmark3Line } from "react-icons/ri";

function Blog() {
  return (
    <section>
      <div className="container">
        <div className="row pb-4">
          <div className="col-md-12 heading-section  ">
            <p>Explore what's new with us</p>
            <h4 className="mb-4 h2_mm">
              Latest <span className="color_text">Resources</span>
            </h4>
          </div>
        </div>
      </div>

      <Container>
        <Row>
          <Col className="pd-t-25" lg={4} md={4} sm={12}>
            <Card className={styles.card}>
              <Card.Body className={styles.card_body}>
                <p className="m-0">
                  <span className={styles.character}>M</span>
                  <span className={styles.character_name}>
                    Posted by MindMajix
                  </span>
                </p>
                <p className={styles.date}>18 Jan 2021</p>
                <Card.Link href="https://mindmajix.com/what-is-data-analytics">
                  <Card.Title className="pd-t-25">
                    What is Data Analytics?
                  </Card.Title>
                </Card.Link>
              </Card.Body>
              <footer className={styles.card_footer}>
                <Card.Link
                  href=""
                  className={styles.blog_share}
                  style={{ display: "none" }}
                >
                  Share
                  <RiShareForwardLine className={styles.blog_card_icon} />
                </Card.Link>
                <Card.Link
                  href=""
                  className={styles.blog_bookmark}
                  style={{ display: "none" }}
                >
                  Bookmark
                  <RiBookmark3Line className={styles.blog_card_icon} />
                </Card.Link>
              </footer>
            </Card>
          </Col>
          <Col className="pd-t-25" lg={4} md={4} sm={12}>
            <Card className={styles.card}>
              <Card.Body className={styles.card_body}>
                <p className="m-0">
                  <span className={styles.character}>M</span>
                  <span className={styles.character_name}>
                    Posted by MindMajix
                  </span>
                </p>
                <p className={styles.date}>11 Jan 2021</p>
                <Card.Link href="https://mindmajix.com/deep-learning-tools">
                  <Card.Title className="pd-t-25">
                    Top 10 Deep Learning Tools
                  </Card.Title>
                </Card.Link>
              </Card.Body>
              <footer className={styles.card_footer}>
                <Card.Link
                  href=""
                  className={styles.blog_share}
                  style={{ display: "none" }}
                >
                  Share
                  <RiShareForwardLine className={styles.blog_card_icon} />
                </Card.Link>
                <Card.Link
                  href=""
                  className={styles.blog_bookmark}
                  style={{ display: "none" }}
                >
                  Bookmark
                  <RiBookmark3Line className={styles.blog_card_icon} />
                </Card.Link>
              </footer>
            </Card>
          </Col>
          <Col className="pd-t-25" lg={4} md={4} sm={12}>
            <Card className={styles.card}>
              <Card.Body className={styles.card_body}>
                <p className="m-0">
                  <span className={styles.character}>M</span>
                  <span className={styles.character_name}>
                    Posted by MindMajix
                  </span>
                </p>
                <p className={styles.date}>9 Jan 2021</p>
                <Card.Link href="https://mindmajix.com/design-thinking-model">
                  <Card.Title className="pd-t-25">
                    Design Thinking Model
                  </Card.Title>
                </Card.Link>
              </Card.Body>
              <footer className={styles.card_footer}>
                <Card.Link
                  href=""
                  className={styles.blog_share}
                  style={{ display: "none" }}
                >
                  Share
                  <RiShareForwardLine className={styles.blog_card_icon} />
                </Card.Link>
                <Card.Link
                  href=""
                  className={styles.blog_bookmark}
                  style={{ display: "none" }}
                >
                  Bookmark
                  <RiBookmark3Line className={styles.blog_card_icon} />
                </Card.Link>
              </footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Blog;
