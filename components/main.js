import React from "react";
import styles from "../styles/Main.module.css";

const main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.section} id="about">
        About
      </div>
      <div className={styles.section} id="experience">
        Experience
      </div>
      <div className={styles.section} id="skills">
        Skills
      </div>
      <div className={styles.section} id="interests">
        Interests
      </div>
      <div className={styles.section} id="contact">
        Contact
      </div>
    </div>
  );
};

export default main;
