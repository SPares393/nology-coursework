import React from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navBar}>
        <h1>Ticket Tracker</h1>
      </nav>
    </>
  );
};

export default NavBar;
