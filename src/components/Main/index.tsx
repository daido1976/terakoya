import React from "react";
import styles from "./index.module.scss";
import { EventList, EventListProps } from "../EventList";
import { Spinner } from "../Spinner";

type Props = {
  events: EventListProps[];
  loading: boolean;
};

export const Main: React.FC<Props> = ({ events, loading }) => {
  return (
    <div>
      {loading ? (
        <div className={styles.mySpinner}>
          <Spinner></Spinner>
        </div>
      ) : (
        <div className={styles.myContent}>
          <EventList events={events}></EventList>
        </div>
      )}
    </div>
  );
};
