import React from "react";
// import styles from "./index.module.scss";
import { ListItem, Props as ListItemProps } from "../ListItem";

type Props = {
  events: ListItemProps[];
};

export const EventList: React.FC<Props> = ({ events }) => {
  return (
    <div>
      {events.map((e, i) => (
        <ListItem
          key={i}
          title={e.title}
          address={e.address}
          startedAt={e.startedAt}
          eventUrl={e.eventUrl}
        ></ListItem>
      ))}
    </div>
  );
};
