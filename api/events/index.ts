import { NowRequest, NowResponse } from "@now/node";
import axios from "axios";
import { sortAscByStartedAt } from "../../src/utils/time";

export type Event = {
  site: string;
  title: string;
  address: string;
  startedAt: string;
  eventUrl: string;
};

const fetchConnpass = async (): Promise<Event[]> => {
  const res = await axios.get(
    "https://connpass.com/api/v1/event/?keyword_or=ruby&keyword_or=javascript&order=2&count=25"
  );
  return res.data.events.map((d: any) => {
    return {
      site: "connpass",
      title: d.title,
      address: d.address,
      startedAt: d.started_at,
      eventUrl: d.event_url
    };
  });
};

const fetchDoorkeeper = async (): Promise<Event[]> => {
  const res = await axios.get("https://api.doorkeeper.jp/events", {
    headers: { Authorization: `Bearer ${process.env.DOORKEEPER_ACCESS_TOKEN}` }
  });
  return res.data.map((d: any) => {
    const event = d.event;
    return {
      site: "doorkeeper",
      title: event.title,
      address: event.address,
      startedAt: event.starts_at,
      eventUrl: event.public_url
    };
  });
};

export default async (request: NowRequest, response: NowResponse) => {
  const connpassData = await fetchConnpass();
  const doorkeeperData = await fetchDoorkeeper();
  const responseData = sortAscByStartedAt([...connpassData, ...doorkeeperData]);
  return response.status(200).send(responseData);
};
