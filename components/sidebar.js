import React from "react";
import styles from "../styles/Sidebar.module.css";

const date = new Date().getFullYear();

const sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <div className={styles.imgContainer}>
          <img
            src="https://nutfzx.csb.app/assets/profile.jpg"
            alt="profile-image"
          />
        </div>
        <div className={styles.navContainer}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#interests">Interests</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.nav__copyright}>
        Copyright &copy; {date}
        <br />
        Idris AY
      </div>
    </nav>
  );
};

export default sidebar;
