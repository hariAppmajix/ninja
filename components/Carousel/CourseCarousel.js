import React, { useState, useEffect, useLayoutEffect } from "react";
import { Card, Image } from "react-bootstrap";
import styles from "./CourseCarousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiUsers } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";

function CourseCarousel({ width, height }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            alt="AWS"
            src="https://cdn.mindmajixtechhub.com/mern/images/courses/aws.svg"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/aws-training">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>AWS</Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <AiOutlineCalendar className={styles.learners_icon} />2 months
              </p>
              <p className={styles.card_text}>
                <FiUsers className={styles.learners_icon} />
                4,076 learners
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            alt="Cyber Security"
            src="https://cdn.mindmajixtechhub.com/mern/images/courses/Cyber_Security.svg"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/cyber-security-training">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Cyber Security
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <AiOutlineCalendar className={styles.learners_icon} />2 months
              </p>
              <p className={styles.card_text}>
                <FiUsers className={styles.learners_icon} />
                4,076 learners
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            alt="DevOps"
            src="https://cdn.mindmajixtechhub.com/mern/images/courses/DevOps.svg"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/devops-training">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>DevOps</Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <AiOutlineCalendar className={styles.learners_icon} />2 months
              </p>
              <p className={styles.card_text}>
                <FiUsers className={styles.learners_icon} />
                4,076 learners
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            alt="Oracle Fusion Financials"
            src="https://cdn.mindmajixtechhub.com/mern/images/courses/Oracle_Fusion.svg"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/oracle-fusion-financials-training">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Oracle Fusion Financials
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <AiOutlineCalendar className={styles.learners_icon} />2 months
              </p>
              <p className={styles.card_text}>
                <FiUsers className={styles.learners_icon} />
                4,076 learners
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            alt="Power BI"
            src="https://cdn.mindmajixtechhub.com/mern/images/courses/Power_Bi.svg"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/power-bi-training">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>Power BI</Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <AiOutlineCalendar className={styles.learners_icon} />2 months
              </p>
              <p className={styles.card_text}>
                <FiUsers className={styles.learners_icon} />
                4,076 learners
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            alt="Salesforce"
            src="https://cdn.mindmajixtechhub.com/mern/images/courses/Salesforce.svg"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/salesforce-training">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>Salesforce</Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <AiOutlineCalendar className={styles.learners_icon} />3 months
              </p>
              <p className={styles.card_text}>
                <FiUsers className={styles.learners_icon} />
                4,076 learners
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>

      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            alt="Selenium"
            src="https://cdn.mindmajixtechhub.com/mern/images/courses/Selenium.svg"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/selenium-training">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>Selenium</Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <AiOutlineCalendar className={styles.learners_icon} />2 months
              </p>
              <p className={styles.card_text}>
                <FiUsers className={styles.learners_icon} />
                4,076 learners
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>

      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            alt="Servicenow"
            src="https://cdn.mindmajixtechhub.com/mern/images/courses/Servicenow.svg"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/servicenow-training">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>Servicenow</Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <AiOutlineCalendar className={styles.learners_icon} />2 months
              </p>
              <p className={styles.card_text}>
                <FiUsers className={styles.learners_icon} />
                4,076 learners
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            alt="SQL Server DBA"
            src="https://cdn.mindmajixtechhub.com/mern/images/courses/SQL_DBA.svg"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/sql-server-dba-training">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              SQL Server DBA
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <AiOutlineCalendar className={styles.learners_icon} />2 months
              </p>
              <p className={styles.card_text}>
                <FiUsers className={styles.learners_icon} />
                4,076 learners
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            alt="Tableau"
            src="https://cdn.mindmajixtechhub.com/mern/images/courses/Tableau.svg"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/tableau-training">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>Tableau</Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <AiOutlineCalendar className={styles.learners_icon} />2 months
              </p>
              <p className={styles.card_text}>
                <FiUsers className={styles.learners_icon} />
                4,076 learners
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
    </Slider>
  );
}

export default CourseCarousel;
