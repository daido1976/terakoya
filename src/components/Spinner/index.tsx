import React from "react";
import styles from "./index.module.scss";

export const Spinner: React.FC = () => {
  return (
    <div>
      <div className={styles.myLoader}></div>
    </div>
  );
};
