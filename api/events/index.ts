import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import { sortAscByStartedAt, todayKebabCase } from "../../src/utils/time";

export type Event = {
  site: string;
  title: string;
  address: string;
  startedAt: string;
  eventUrl: string;
};

const fetchConnpass = async (query: any): Promise<Event[]> => {
  const { date = todayKebabCase() } = query;
  // TODO: 抽象化する
  const dateRemovedHyphens = date.replace(/-/g, "");
  console.log("dateConnpass", dateRemovedHyphens);
  const res = await axios.get(
    `https://connpass.com/api/v1/event/?ymd=${dateRemovedHyphens}&keyword_or=ruby&keyword_or=javascript&order=2&count=25`
  );
  return res.data.events.map((d: any) => {
    return {
      site: "connpass",
      title: d.title,
      address: d.address,
      startedAt: d.started_at,
      eventUrl: d.event_url,
    };
  });
};

const fetchDoorkeeper = async (query: any): Promise<Event[]> => {
  const { date = todayKebabCase() } = query;
  console.log("dateDoorkeeper", date);
  const res = await axios.get(
    `https://api.doorkeeper.jp/events?since=${date}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.DOORKEEPER_ACCESS_TOKEN}`,
      },
    }
  );
  return res.data.map((d: any) => {
    const event = d.event;
    return {
      site: "doorkeeper",
      title: event.title,
      address: event.address,
      startedAt: event.starts_at,
      eventUrl: event.public_url,
    };
  });
};

export default async (request: VercelRequest, response: VercelResponse) => {
  // TODO: 初回 query が undefined の時の処理考える
  console.log(request.query);
  const { query } = request;
  const connpassData = await fetchConnpass(query);
  const doorkeeperData = await fetchDoorkeeper(query);
  const responseData = sortAscByStartedAt([...connpassData, ...doorkeeperData]);
  return response.status(200).send(responseData);
};
