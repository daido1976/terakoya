import dayjs from "dayjs";
import "dayjs/locale/ja";
import { Event } from "../../../api/events";

dayjs.locale("ja");

export const sortAscByStartedAt = (events: Event[]): Event[] => {
  return events.sort(
    (a, b) => dayjs(a.startedAt).valueOf() - dayjs(b.startedAt).valueOf()
  );
};

export const formatAsDate = (date: string): string => {
  return dayjs(date).format("YYYY/MM/DD(ddd)");
};
