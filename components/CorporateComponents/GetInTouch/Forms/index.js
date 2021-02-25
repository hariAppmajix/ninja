import React from "react";
import styles from "../../Corporate.module.css";

const FormsGetInTouch = () => {
  return (
    <div>
      <div>
        <h1 className={styles.Corporate__Title}>
          GetIn
          <span className={styles.Corporate__Span__Title}>Touch</span>
        </h1>
      </div>
      <div>
        <form className={styles.Form__box__GetInTouch}>
          <div className={styles.Form_Input_Control}>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className={styles.Form_Input_Control}>
            <input type="text" placeholder="Role" />
          </div>
          <div className={styles.Form_Input_Control}>
            <input type="text" placeholder="Company Email" />
          </div>
          <div className={styles.Form_Input_Control}>
            <input type="text" placeholder="Phone" />
          </div>
          <div className={styles.Form_Input_Control}>
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
              placeholder="Message"></textarea>
          </div>
          <div className={styles.Forms_button}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormsGetInTouch;
