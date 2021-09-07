import React from "react";
import styles from "./Card.module.scss";
import Counter from "./../Counter/Counter";

const Card = (props) => {
  const { name, role } = props.teamData;

  return (
    <>
      <div className={styles.card}>
        <h2>{name}</h2>
        <h3>{role}</h3>
        <Counter />
      </div>
    </>
  );
};

export default Card;
