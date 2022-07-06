import dayjs from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Event } from "../../../api/events";

dayjs.locale("ja");
dayjs.extend(utc);
dayjs.extend(timezone);

export const sortAscByStartedAt = (events: Event[]): Event[] => {
  return events.sort(
    (a, b) => dayjs(a.startedAt).valueOf() - dayjs(b.startedAt).valueOf()
  );
};

export const formatAsDate = (dateTime: string): string => {
  return dayjs(dateTime).format("YYYY/MM/DD(ddd)");
};

export const formatAsTime = (dateTime: string): string => {
  return dayjs(dateTime).format("HH:mm");
};

export const todayKebabCase = (): string => {
  return dayjs().tz("Asia/Tokyo").format("YYYY-MM-DD");
};

// リファクタリングの余地あり
export const isSameDate = (a: string, b: string): boolean => {
  return dayjs(a).format("YYYYMMDD") === dayjs(b).format("YYYYMMDD");
};
