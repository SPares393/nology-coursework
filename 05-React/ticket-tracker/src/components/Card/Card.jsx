import React from "react";
import styles from "./Card.module.scss";
import Counter from "./../Counter/Counter";

const Card = () => {
  return (
    <>
      <div className={styles.card}>
        <h2>Employee Name</h2>
        <h3>Employee Role</h3>
        <Counter />
      </div>
    </>
  );
};

export default Card;
