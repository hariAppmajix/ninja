import React from "react";
import styles from "./SocialFloat.module.css";

function SocialFloat() {
  return (
    <div className={`display_xs ${styles.right_flow}`}>
      <p>
        <span className={styles.float_element}>Follow us on</span>
        <a
          className={styles.float_element}
          href="https://www.facebook.com/MindMajixTechnologies"
          target="_blank"
        >
          Fb /
        </a>
        <a
          className={styles.float_element}
          href="https://www.instagram.com/mindmajix/"
          target="_blank"
        >
          Insta /
        </a>
        <a
          className={styles.float_element}
          href="https://www.youtube.com/c/mindmajix"
          target="_blank"
        >
          Yout /
        </a>
        <a
          className={styles.float_element}
          href="https://twitter.com/mindmajix"
          target="_blank"
        >
          Twit
        </a>
      </p>
    </div>
  );
}

export default SocialFloat;
