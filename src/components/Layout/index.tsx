import React from "react";
import styles from "./index.module.scss";

type Props = {
  header: any;
  main: any;
};

export const Layout: React.FC<Props> = ({ header, main }) => {
  return (
    <div>
      <div className={styles.myHeader}>{header}</div>
      <div className={styles.myMain}>{main}</div>
    </div>
  );
};
