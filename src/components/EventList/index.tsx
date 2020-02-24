import React from "react";
// import styles from "./index.module.scss";
import { ListItem } from "../ListItem";
import { ListHeader } from "../ListHeader";
import { formatAsDate, formatAsTime, isSameDate } from "../../utils/time";

export type EventListProps = {
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
      {events.map((event, i, origEvents) => {
        const maybeHeader =
          i !== 0 &&
          isSameDate(origEvents[i - 1].startedAt, event.startedAt) ? null : (
            <ListHeader date={formatAsDate(event.startedAt)}></ListHeader>
          );
        return (
          <div key={i}>
            {maybeHeader}
            <ListItem
              title={event.title}
              address={event.address}
              startTime={formatAsTime(event.startedAt)}
              eventUrl={event.eventUrl}
            ></ListItem>
          </div>
        );
      })}
    </div>
  );
};
