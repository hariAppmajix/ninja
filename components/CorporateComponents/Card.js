import React from "react";
import styles from "./Corporate.module.css";

const Card = ({ name, logo, name2, logo2 }) => {
  return (
    <div className={styles.ReviewCardBox}>
      <div className={styles.ReviewContentBox1}>
        <p>{name}</p>
        <p>{logo}</p>
      </div>
      <div className={styles.ReviewContentBox1}>
        <p>{name2}</p>
        <p>{logo2}</p>
      </div>
    </div>
  );
};

export default Card;
