import { Imagebuilder } from "aws-sdk";
import React from "react";
import { Image } from "react-bootstrap";
import style from "./notfound.module.css";
import Footer from "./footer";

const NotFound = () => {
  return (
    <div>
      <div className={style.NotFound__Container}>
        <div className={`container ${style.Content__main___box}`}>
          <div className={style.imagePage}>
            <Image
              src="/images/notfound/woman.svg"
              style={{ width: "300px", height: "100%" }}
            />
          </div>
          <div>
            <div className={style.oops__main}>
              <h4>Oops, page not found!!</h4>
              <Image
                src="https://cdn.mindmajixtechhub.com/mern/images/404.PNG"
                style={{ width: "105px", height: "100%" }}
              />
            </div>

            <div className={style.desc}>
              <h4>
                Looks like you have chosen{" "}
                <span className={style.span_desc}>WRONG </span>path{" "}
              </h4>
              <h4>
                to reach the <span className={style.span_desc}>RIGHT</span>{" "}
                place to upgrade
              </h4>
            </div>
            <div className={style.input__box}>
              <input type="text" placeholder="search your interest?" />
            </div>
            <div>
              <div className={style.Content_Box}>
                <div>
                  {/* <Image
              src="/images/notfound/woman.svg"
              style={{ width: "80px", height: "100%" }}
            /> */}
                </div>
                <div className={style.Content_links}>
                  <a href="#">All Courses </a>
                  <a href="#">All Categories </a>
                  <a href="#">Tutorials </a>
                  <a href="#">Interview Questions</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
