import React from "react";
import styles from "./P.module.css";

const P = ({ children }) => {
  return <p className={styles.P}>{children}</p>;
};

export default P;
