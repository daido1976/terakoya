import React from "react";
// import styles from "./index.module.scss";
import { ListItem } from "../ListItem";
import { ListHeader } from "../ListHeader";
import { formatAsDate, formatAsTime, isSameDate } from "../../utils/time";

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
      {events.map((e, i) => {
        const maybeHeader =
          i !== 0 && isSameDate(events[i - 1].startedAt, e.startedAt) ? null : (
            <ListHeader date={formatAsDate(e.startedAt)}></ListHeader>
          );
        return (
          <div key={i}>
            {maybeHeader}
            <ListItem
              title={e.title}
              address={e.address}
              startTime={formatAsTime(e.startedAt)}
              eventUrl={e.eventUrl}
            ></ListItem>
          </div>
        );
      })}
    </div>
  );
};
