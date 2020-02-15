import { NowRequest, NowResponse } from "@now/node";
import axios from "axios";

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

export default async (request: NowRequest, response: NowResponse) => {
  const d = await fetchConnpass();
  return response.status(200).send(d);
};
