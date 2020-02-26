import React from "react";
import styles from "./index.module.scss";
import { Header } from "../Header";
import { EventList, EventListProps } from "../EventList";
import { OnSearch } from "../../containers/Main";

type Props = {
  onSearch: OnSearch;
  events: EventListProps[];
};

export const Main: React.FC<Props> = ({ onSearch, events }) => {
  return (
    <div>
      <div className={styles.myHeader}>
        <Header onSearch={onSearch}></Header>
      </div>
      <div className={styles.myContent}>
        <EventList events={events}></EventList>
      </div>
    </div>
  );
};
