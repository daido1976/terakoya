import React from "react";
import styles from "./index.module.scss";
import { Header } from "../Header";
import { SearchForm } from "../SearchForm";
import { EventList, EventListProps } from "../EventList";

export type Props = {
  onSearch: (_: any) => void;
  events: EventListProps[];
};

export const Main: React.FC<Props> = ({ onSearch, events }) => {
  const searchForm = <SearchForm onSearch={onSearch}></SearchForm>;
  return (
    <div>
      <div className={styles.myHeader}>
        <Header searchForm={searchForm}></Header>
      </div>
      <div className={styles.myContent}>
        <EventList events={events}></EventList>
      </div>
    </div>
  );
};
