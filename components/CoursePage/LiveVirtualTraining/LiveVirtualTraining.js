import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Tab,
  Nav,
  Tabs,
  ListGroup,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";
import styles from "./LiveVirtualTraining.module.css";
import { BiRupee } from "react-icons/bi";
import { RiTimerLine } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import { RiArrowDropRightLine } from "react-icons/ri";
import { getCourseFeeAndDuration, getDemoDates } from "../../../apiCalls";

function LiveVirtualTraining({ course }) {
  const [dates, setDates] = useState(["123", "456"]);

  useEffect(async () => {
    const demoDates = await getDemoDates();
    setDates(demoDates);
  }, []);

  return (
    <Row className={styles.training_row}>
      <Col lg={9} md={9} sm={12} xs={12}>
        <h4>
          Live Virtual <span class="color_text">Training</span>
        </h4>
        <div className={styles.cp_text}>
          <ul className="ul_arrow">
            <li className={styles.p_text}>
              Live demonstration of features and practicals.
            </li>
            <li className={styles.p_text}>
              Schedule your sessions at your comfortable timings.
            </li>
            <li className={styles.p_text}>Get access for lifetime.</li>
            <li className={styles.p_text}>
              Instructor led training with practical lab sessions.
            </li>
            <li className={styles.p_text}>
              Real time projects and certification guidance.
            </li>
          </ul>
        </div>
      </Col>
      <Col
        lg={3}
        md={3}
        sm={12}
        xs={12}
        style={{ margin: "auto", textAlign: "center" }}
      >
        <img
          src="https://cdn.mindmajixtechhub.com/mern/images/online_training.svg"
          alt="Live Training"
          style={{ width: "150px", height: "150px" }}
        ></img>
      </Col>
      <Col lg={12} md={12} sm={12} xs={12} className="p-0-xs">
        <Row className={styles.batches_row}>
          <Col lg={9} md={9} sm={12} xs={12}>
            <h5
              className={"special_text text-center m-b-25 " + styles.batch_head}
            >
              New batches starts from
            </h5>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12} className="p-0">
                <Row>
                  <Col lg={3} md={3} sm={3} xs={3}>
                    <p className={styles.heading}>Batch Type</p>
                  </Col>
                  <Col lg={2} md={2} sm={3} xs={3}>
                    <p className={styles.heading}>Duration</p>
                  </Col>
                  <Col lg={3} md={3} sm={3} xs={3}>
                    <p className={styles.heading}>Starts on</p>
                  </Col>
                  <Col lg={4} md={4} sm={3} xs={3}>
                    <p className={styles.heading}>Time</p>
                  </Col>
                </Row>
                <ListGroup defaultActiveKey={`#link0`}>
                  <ListGroup.Item action href="#link1">
                    <Row>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <p className="text-center m-0">Weekend</p>
                      </Col>
                      <Col lg={2} md={2} sm={3} xs={3}>
                        <p className="text-center m-0">25 hrs</p>
                      </Col>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <p className="text-center m-0">Feb 21st</p>
                      </Col>
                      <Col lg={4} md={4} sm={3} xs={3}>
                        <p className="text-center m-0">07.00 pm IST</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    <Row>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <p className="text-center m-0">
                          Weekend
                          <span className={styles.offer_text}> (20%OFF)</span>
                        </p>
                      </Col>
                      <Col lg={2} md={2} sm={3} xs={3}>
                        <p className="text-center m-0">25 hrs</p>
                      </Col>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <p className="text-center m-0">Feb 21st</p>
                      </Col>
                      <Col lg={4} md={4} sm={3} xs={3}>
                        <p className="text-center m-0">07.00 pm IST</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3">
                    <Row>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <p className="text-center m-0">Weekend</p>
                      </Col>
                      <Col lg={2} md={2} sm={3} xs={3}>
                        <p className="text-center m-0">25 hrs</p>
                      </Col>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <p className="text-center m-0">Feb 21st</p>
                      </Col>
                      <Col lg={4} md={4} sm={3} xs={3}>
                        <p className="text-center m-0">07.00 pm IST</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link4">
                    <Row>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <p className="text-center m-0">Weekend</p>
                      </Col>
                      <Col lg={2} md={2} sm={3} xs={3}>
                        <p className="text-center m-0">25 hrs</p>
                      </Col>
                      <Col lg={3} md={3} sm={3} xs={3}>
                        <p className="text-center m-0">Feb 21st</p>
                      </Col>
                      <Col lg={4} md={4} sm={3} xs={3}>
                        <p className="text-center m-0">07.00 pm IST</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  {/* {dates && dates.length > 0 ? (
                    dates.map((date, index) => (
                      <ListGroup.Item
                        key={"listgroup" + index}
                        id={"listgroup" + index}
                        action
                        href={`#link${index}`}
                      >
                        {`${date.batch_type} - ${course.duration} hrs - ${date.demo_date} IST`}
                      </ListGroup.Item>
                    ))
                  ) : (
                    <></>
                  )} */}
                </ListGroup>
              </Col>
            </Row>
          </Col>
          <Col
            lg={3}
            md={3}
            sm={12}
            xs={12}
            className="text-center"
            style={{ marginTop: "auto" }}
          >
            <h4 className={styles.price}>
              <BiRupee className={styles.batch_icon} />
              {`Rs ${course.fee_usd * 72.53} /-`}
            </h4>
            <h4 className={styles.price_strike}>
              <BiRupee className={styles.batch_icon} />
              {`Rs ${course.fee_usd * 72.53 + 3000} /-`}
            </h4>

            <p className="text-center pd-t-15 m-0">
              <a
                href="https://mindmajix.com/all-courses"
                className="btn btn-outline-primary py-2 px-3 button_resp"
              >
                Check out
              </a>
            </p>

            <OverlayTrigger
              key="bottom"
              placement="bottom"
              overlay={
                <Tooltip id={`tooltip-bottom`}>
                  100% Money back guarantee
                </Tooltip>
              }
            >
              <span className="d-inline-block">
                <p className={styles.guarantee_text}>
                  <FaInfoCircle />
                  100% Money back guarantee
                </p>
              </span>
            </OverlayTrigger>
          </Col>
          <hr></hr>
          <Row className={styles.batch_sub}>
            <Col lg={1} md={2} sm={4} xs={4}>
              <img
                src="https://cdn.mindmajixtechhub.com/mern/images/calender-select.svg"
                alt="calender"
                class={styles.batch_sub_img}
              ></img>
            </Col>
            <Col lg={6} md={6} sm={8} xs={8}>
              <p>
                <span class="color_text" style={{ fontWeight: "600" }}>
                  Timings Doesn't Suit You ?
                </span>
                <a
                  href="https://mindmajix.com/all-courses"
                  className={"btn py-2 px-3 button_resp " + styles.read_more}
                >
                  Let us know
                </a>
              </p>
            </Col>
          </Row>
        </Row>
      </Col>
    </Row>
  );
}

export default LiveVirtualTraining;
