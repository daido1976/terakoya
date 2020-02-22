import React from "react";
import styles from "./index.module.scss";

export type Props = {
  title: string;
  address: string;
  startTime: string;
  eventUrl: string;
};

export const ListItem: React.FC<Props> = ({
  title,
  address,
  startTime,
  eventUrl
}) => {
  return (
    <div>
      <div className={styles.myCard}>
        <div className={styles.myTime}>{startTime}</div>
        <div className={styles.myBody}>
          <a
            className={styles.myLink}
            href={eventUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className={styles.myBodyTitle}>{title}</div>
          </a>
          <div className={styles.myBodyAddress}>{address}</div>
        </div>
      </div>
    </div>
  );
};
