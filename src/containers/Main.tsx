import React, { useEffect, useState } from "react";
import { Main as MainComponent } from "../components/Main";
import { Event } from "../../api/events";

// fetch の引数の url は path だけを指定しても勝手に origin を補完してくれる
// see. https://github.github.io/fetch/#url
const eventsApiEndpoint = "/api/events";

export const Main = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const onSearch = (data: any) => {
    return console.log(data);
  };

  useEffect(() => {
    fetch(eventsApiEndpoint)
      .then(res => {
        return res.json();
      })
      .then((events: Event[]) => {
        setEvents(events);
      });
  }, []);

  if (!events.length) return <div>"Loading..."</div>;

  return (
    <div>
      <MainComponent events={events} onSearch={onSearch} />
    </div>
  );
};
