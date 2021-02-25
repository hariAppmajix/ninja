import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <h4>Related tags</h4>
        <ul>
          <li>Tableau</li>
          <li>Python</li>
          <li>AWS</li>
          <li>Machine learning</li>
          <li>Cloud Computing</li>
          <li>Digital Marketing</li>
          <li>React</li>
        </ul>
      </div>
      <div>
        <h4>Related Categories</h4>
        <ul>
          <li>Tableau</li>
          <li>Python</li>
          <li>AWS</li>
          <li>Machine learning</li>
          <li>Cloud Computing</li>
          <li>Digital Marketing</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
