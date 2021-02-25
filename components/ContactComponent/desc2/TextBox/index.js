import React from "react";
import style from "../../contact.module.css";
import { FaBeer } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { AiFillMessage } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";

const TextBox = () => {
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div style={{ margin: "40px 0px" }}>
        <h4>OUR VIRTUAL LOCATIONS IN USA</h4>
      </div>
      <div className={style.Text__desc__Box}>
        <div>
          <p>New York</p>
          <div style={{ display: "flex" }}>
            <div>
              <ImLocation2 className={style.IconStyling} />
            </div>
            <p className={style.Span__title}>
              244 5th Ave Suite 1222 New York NY 10001 United States (US)
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <AiFillMessage className={style.IconStyling} />
            <p className={style.Span__title}>info@mindmajix.com</p>
          </div>
          <div style={{ display: "flex" }}>
            <IoIosCall className={style.IconStyling} />
            <p className={style.Span__title}>+1 917 456 8403</p>
          </div>
        </div>
        <div>
          <p>New Jersey</p>
          <div style={{ display: "flex" }}>
          <div>
            <ImLocation2 className={style.IconStyling} />
            </div>
            <p className={style.Span__title}>
              4414 hunters glen dr, plainsboro New Jersey NJ 08536 United
              States(US)
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <AiFillMessage className={style.IconStyling} />
            <p className={style.Span__title}>info@mindmajix.com</p>
          </div>
          <div style={{ display: "flex" }}>
            <IoIosCall className={style.IconStyling} />
            <p className={style.Span__title}>+91 905 240 3388</p>
          </div>
        </div>
      </div>
      <div className={style.Text__desc__Box}>
        <div>
          <p>Texas</p>
          <div style={{ display: "flex" }}>
          <div>
            <ImLocation2 className={style.IconStyling} />
            </div>
            <p className={style.Span__title}>
              4608 Spalding plano TX 75024 United States(US)
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <AiFillMessage className={style.IconStyling} />
            <p className={style.Span__title}>info@mindmajix.com</p>
          </div>
          <div style={{ display: "flex" }}>
            <IoIosCall className={style.IconStyling} />
            <p className={style.Span__title}>+1 972 427 3027</p>
          </div>
        </div>
        <div>
          <p>Connecticut</p>
          <div style={{ display: "flex" }}>
          <div>
            <ImLocation2 className={style.IconStyling} />
            </div>
            <p className={style.Span__title}>
              14 Pasco Drive East Windsor Connecticut 06088 United States (US)
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <AiFillMessage className={style.IconStyling} />
            <p className={style.Span__title}>info@mindmajix.com</p>
          </div>
          <div style={{ display: "flex" }}>
            <IoIosCall className={style.IconStyling} />
            <p className={style.Span__title}>+1 972 427 3027</p>
          </div>
        </div>
      </div>
      <div className={style.Text__desc__Box}>
        <div>
          <p>Florida</p>
          <div style={{ display: "flex" }}>
          <div>
            <ImLocation2 className={style.IconStyling} />
            </div>
            <p className={style.Span__title}>
              1734 Blue Lake CT Tarpon Springs FL 34689 United States (US)
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <AiFillMessage className={style.IconStyling} />
            <p className={style.Span__title}>info@mindmajix.com</p>
          </div>
          <div style={{ display: "flex" }}>
            <IoIosCall className={style.IconStyling} />
            <p className={style.Span__title}>+1 972 427 3027</p>
          </div>
        </div>
        <div>
          <p>Virginia</p>
          <div style={{ display: "flex" }}>
          <div>
            <ImLocation2 className={style.IconStyling} />
            </div>
            <p className={style.Span__title}>
              13550 Virginia Randolph, Ave APT 303, Herndon VA 20171 United
              States (US)
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <AiFillMessage className={style.IconStyling} />
            <p className={style.Span__title}>info@mindmajix.com</p>
          </div>
          <div style={{ display: "flex" }}>
            <IoIosCall className={style.IconStyling} />
            <p className={style.Span__title}>+1 972 427 3027</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBox;
