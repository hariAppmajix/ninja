import React, { useState, useEffect, useLayoutEffect } from "react";
import { Card, Image } from "react-bootstrap";
import styles from "./PopularCategories.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BiBookReader } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiMacbookLine } from "react-icons/ri";

function PopularCategories({ width, height }) {
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
            alt="Automation Testing"
            src="https://cdn.mindmajixtechhub.com/mern/images/categories/Automation_Testing.svg"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/automation-testing-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Automation Testing
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="https://cdn.mindmajixtechhub.com/mern/images/categories/Big_Data.svg"
            style={{ width: "40px", height: "40px" }}
            alt="Big Data"
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/bigdata-analytics-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>Big Data</Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="https://cdn.mindmajixtechhub.com/mern/images/categories/Business_Intelligence_&_Analytics.svg"
            style={{ width: "40px", height: "40px" }}
            alt="Business Intelligence and Analytics"
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/business-intelligence-and-analytics-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Business Intelligence & Analytics
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="https://cdn.mindmajixtechhub.com/mern/images/categories/Cloud_Computing.svg"
            alt="Cloud Computing"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/cloud-computing-certification-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Cloud Computing
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="https://cdn.mindmajixtechhub.com/mern/images/categories/Cyber_Security_&_SIEM_Tools.svg"
            style={{ width: "40px", height: "40px" }}
            alt="Cyber Security and SIEM Tools"
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/cyber-security-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Cyber Security & SIEM Tools
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="https://cdn.mindmajixtechhub.com/mern/images/categories/CICD_DevOps_Tools.svg"
            style={{ width: "40px", height: "40px" }}
            alt="CI/CD DevOps Tools"
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/devops-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              CI/CD DevOps Tools
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="https://cdn.mindmajixtechhub.com/mern/images/categories/Data_Science.svg"
            style={{ width: "40px", height: "40px" }}
            alt="Data Science"
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/data-science-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>Data Science</Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>

      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="https://cdn.mindmajixtechhub.com/mern/images/categories/Programming_&_Frameworks.svg"
            alt="Programming and Frameworks"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/programming-and-frameworks-certification-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Programming & Frameworks
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>

      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="https://cdn.mindmajixtechhub.com/mern/images/categories/Project_Management_&_Methodologie.svg"
            alt="Project Management and Methodologies"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/project-management-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Project Management & Methodologies
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>

      <Card className={styles.card}>
        <Card.Header className={styles.card_top}>
          <Image
            className={styles.star_icon}
            src="https://cdn.mindmajixtechhub.com/mern/images/categories/Robotic_Process_Automation_(RPA).svg"
            alt="Robotic Process Automation (RPA)"
            style={{ width: "40px", height: "40px" }}
          ></Image>
        </Card.Header>
        <Card.Link href="https://mindmajix.com/robotic-process-automation-courses">
          <Card.Body className={styles.card_body}>
            <Card.Title className={styles.card_title}>
              Robotic Process Automation (RPA)
            </Card.Title>

            <Card.Text className={styles.learners_text}>
              <p className={styles.card_text}>
                <RiMacbookLine className={styles.learners_icon} />
                34 courses
              </p>
            </Card.Text>
          </Card.Body>
        </Card.Link>
      </Card>
    </Slider>
  );
}

export default PopularCategories;
