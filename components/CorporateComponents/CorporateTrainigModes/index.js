import React from "react";
import styles from "../Corporate.module.css";

const TrainingModes = () => {
  return (
    <div>
      <h1 className={styles.Corporate__Title}>
        <span className={styles.Corporate__Span__Title}>Corporate</span>{" "}
        Versatile TrainingModes
      </h1>
      <p style={{ marginBottom: "20px" }}>
        Enhance your workforce skillset with our customized training options
        that suits your work life.
      </p>
      <div className={styles.Versatile__Box}>
        <h1 className={styles.Versatile__Title}>
          <span className={styles.Corporate__Span__Title}>Virtual Online</span>
          Training
        </h1>
        <p>
          Dedicated trainer takes charge to deliver all his expertise to the
          team to upskill reflecting corporate progress
        </p>
      </div>
      <div className={styles.Versatile__Box}>
        <h1 className={styles.Versatile__Title}>
          <span className={styles.Corporate__Span__Title}>Onsite</span>
          Training
        </h1>
        <p>
          We do provide offline training to the enterprises on their desired
          premises
        </p>
      </div>
      <div className={styles.Versatile__Box}>
        <h1 className={styles.Versatile__Title}>
          <span className={styles.Corporate__Span__Title}>Self Paced</span>
          Training
        </h1>
        <p>
          Strong knowledge on fundamentals trigger progressive outcomes from the
          employees. Self paced
          <br /> videos offer employees to gain knowledge from anytime and
          anywhere.
        </p>
      </div>
    </div>
  );
};

export default TrainingModes;
