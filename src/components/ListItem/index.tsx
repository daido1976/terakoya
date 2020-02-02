import React from "react";
import styles from "./index.module.scss";

interface Props {
  title: string;
  address: string;
  startedAt: string;
  onClick: any;
}

export const ListItem: React.FC<Props> = ({
  title,
  address,
  startedAt,
  onClick
}) => {
  return (
    <div>
      <div className={styles.myCard}>
        <div className={styles.myTime}>{startedAt}</div>
        <div className={styles.myBody}>
          <div className={styles.myBodyTitle}>{title}</div>
          <div className={styles.myBodyAddress}>{address}</div>
        </div>
      </div>
    </div>
  );
};
