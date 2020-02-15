import React, { useEffect, useState } from "react";
import { List } from "../components/List";
import { Event } from "../../api/events";

export const Main = () => {
  const [data, setData] = useState<Event[]>([]);
  useEffect(() => {
    fetch("https://terakoya.now.sh/api/events")
      .then(res => {
        return res.json();
      })
      .then((data: Event[]) => {
        setData(data);
      });
  }, []);

  if (!data.length) return <div>"Loading..."</div>;

  return (
    <div>
      <List data={data} />
    </div>
  );
};
