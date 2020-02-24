import React from "react";
import styles from "./index.module.scss";
import { Header } from "../Header";
import { EventList, EventListProps } from "../EventList";

export type Props = {
  onClick: (_: any) => void;
  events: EventListProps[];
};

export const Main: React.FC<Props> = ({ onClick, events }) => {
  return (
    <div>
      <Header onClick={onClick}></Header>
      <EventList events={events}></EventList>
    </div>
  );
};
