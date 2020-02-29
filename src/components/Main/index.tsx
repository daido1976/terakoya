import React from "react";
import styles from "./index.module.scss";
import { Header } from "../Header";
import { EventList, EventListProps } from "../EventList";
import { Spinner } from "../Spinner";
import { OnSearch } from "../../containers/Main";

type Props = {
  onSearch: OnSearch;
  events: EventListProps[];
  loading: boolean;
};

export const Main: React.FC<Props> = ({ onSearch, events, loading }) => {
  return (
    <div>
      <div className={styles.myHeader}>
        <Header onSearch={onSearch}></Header>
      </div>
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
