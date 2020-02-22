import React from "react";
import styles from "./index.module.scss";

export type Props = {
  date: string;
};

export const ListHeader: React.FC<Props> = ({ date }) => {
  return (
    <div>
      <div className={styles.myCard}>
        <div className={styles.myDate}>{date}</div>
      </div>
    </div>
  );
};
