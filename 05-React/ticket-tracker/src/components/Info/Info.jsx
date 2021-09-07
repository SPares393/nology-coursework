import React from "react";
import styles from "./Info.module.scss";

const Info = () => {
  const date = new Date();
  const showDate = date.toDateString();
  return (
    <>
      <div className={styles.info}>
        <p className={styles.datePara}>Tickets completed on {showDate}</p>
      </div>
    </>
  );
};

export default Info;
