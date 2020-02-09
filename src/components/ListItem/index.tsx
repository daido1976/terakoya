import React from "react";
import styles from "./index.module.scss";

export type Props = {
  title: string;
  address: string;
  startedAt: string;
  eventUrl: string;
};

export const ListItem: React.FC<Props> = ({
  title,
  address,
  startedAt,
  eventUrl
}) => {
  return (
    <div>
      <a
        className={styles.myLink}
        href={eventUrl}
        target="_blank"
        rel="noreferrer noopener"
      >
        <div className={styles.myCard}>
          <div className={styles.myTime}>{startedAt}</div>
          <div className={styles.myBody}>
            <div className={styles.myBodyTitle}>{title}</div>
            <div className={styles.myBodyAddress}>{address}</div>
          </div>
        </div>
      </a>
    </div>
  );
};
