import React from "react";
import styles from "./Card.module.scss";
import Counter from "./../Counter/Counter";

const Card = (props) => {
  const { name, role } = props.teamData;

  return (
    <>
      <div className={styles.card}>
        <div>
          <h2>{name}</h2>
          <h3>{role}</h3>
        </div>
        <div className={styles.counter}>
          <Counter className={styles.counter} />
        </div>
      </div>
    </>
  );
};

export default Card;
