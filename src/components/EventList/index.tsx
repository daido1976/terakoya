import React from "react";
// import styles from "./index.module.scss";
import { ListItem } from "../ListItem";
import { ListHeader } from "../ListHeader";

type EventListProps = {
  title: string;
  address: string;
  startedAt: string;
  eventUrl: string;
};

type Props = {
  events: EventListProps[];
};

export const EventList: React.FC<Props> = ({ events }) => {
  return (
    <div>
      {events.map((e, i) => (
        <ListItem
          key={i}
          title={e.title}
          address={e.address}
          startTime={e.startedAt}
          eventUrl={e.eventUrl}
        ></ListItem>
      ))}
    </div>
  );
};
