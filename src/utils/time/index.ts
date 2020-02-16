import dayjs from "dayjs";
import { Event } from "../../../api/events";

export const sortAscByStartedAt = (events: Event[]): Event[] => {
  return events.sort(
    (a, b) => dayjs(a.startedAt).valueOf() - dayjs(b.startedAt).valueOf()
  );
};
