import React from "react";
import style from "../../contact.module.css";
import { ImLocation2 } from "react-icons/im";
import { AiFillMessage } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";




const TextBox = () => {
  return (
    <div className={style.Text__Container}>
      <div style={{ margin: "40px 0px" }}>
        <h4>OUR ADDRESS IN INDIA</h4>
      </div>
      <div className={style.Text__desc__Box}>
        <div>
          <p>Hyderabad</p>
          <div  style={{ display: "flex" }} >
            <div>
            <ImLocation2 className={style.IconStyling} />
            </div>
            <div>
            <p className={style.Span__title}>
              Ecohouse Building, Nagarjuna Hills,
               Panjagutta, Hyderabad ,Telangana
               500082 India
            </p>
            </div>
          </div>
          <div style={{ display: "flex" }}>
      
            <AiFillMessage className={style.IconStyling} />
            <p className={style.Span__title}>info@mindmajix.com</p>
          </div>
          <div style={{ display: "flex" }}>
            <IoIosCall className={style.IconStyling} />
            <p className={style.Span__title}>+91 924 633 3245</p>
          </div>
        </div>
        <div>
          <p>Bangalore</p>
          <div style={{ display: "flex" }}>
          <div>
          <ImLocation2 className={style.IconStyling} />
          </div>
          <p className={style.Span__title}>
            91Springboard, 512/10, Service Lane, Outer Ring Road, Mahadevapura,
            Next to More Megastore Bangalore Karnataka 560048 India
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
    </div>
  );
};

export default TextBox;
