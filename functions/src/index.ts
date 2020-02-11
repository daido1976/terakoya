import * as functions from "firebase-functions";
import axios from "axios";

type Event = {
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
    // test token
    headers: { Authorization: "Bearer LmzURzyT32EcBifywVPT" }
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

export const queryEvents = functions.https.onCall((data, context) => {
  return Promise.all([fetchConnpass(), fetchDoorkeeper()]);
});
