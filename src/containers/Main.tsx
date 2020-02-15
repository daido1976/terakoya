import React, { useEffect, useState } from "react";
import { List } from "../components/List";
import { Event } from "../../api/events";

// fetch の引数の url は path だけを指定しても勝手に origin を補完してくれる
// see. https://github.github.io/fetch/#url
const eventsApiEndpoint = "/api/events";

export const Main = () => {
  const [data, setData] = useState<Event[]>([]);
  useEffect(() => {
    fetch(eventsApiEndpoint)
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
