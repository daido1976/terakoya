import React, { useEffect, useState } from "react";
import { List } from "../components/List";

export const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.doorkeeper.jp/events", {
      headers: { Authorization: "Bearer MY_TOKEN" }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        const eventData = data.map((d: any) => {
          const event = d.event;
          return {
            title: event.title,
            address: event.address,
            startedAt: event.starts_at,
            eventUrl: event.public_url
          };
        });
        setData(eventData);
      });
  }, []);

  if (!data.length) return <div>"Loading..."</div>;

  return (
    <div>
      <List data={data} />
    </div>
  );
};
