import React from "react";
import styles from "./Card.module.scss";

const Card = () => {
  return (
    <>
      <div className={styles.card}>
        <h2>Employee Name</h2>
        <h3>Employee Role</h3>
        <div>
          <h3>Tickets</h3>
          <h2>0</h2>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    </>
  );
};

export default Card;
