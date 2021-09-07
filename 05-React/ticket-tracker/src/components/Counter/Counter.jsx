import React, { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className={styles.counter}>
        <button
          className={styles.counterButton}
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <h2>{count}</h2>
        <button
          className={styles.counterButton}
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
