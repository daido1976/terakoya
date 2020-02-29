import React, { useEffect, useState } from "react";
import { Main as MainComponent } from "../components/Main";
import { Event } from "../../api/events";

export type SearchFormData = {
  date: string;
};
export type OnSearch = (data: SearchFormData) => void;

// fetch の引数の url は path だけを指定しても勝手に origin を補完してくれる
// see. https://github.github.io/fetch/#url
const eventsApiEndpoint = "/api/events";

export const Main = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const onSearch: OnSearch = data => {
    return console.log(data);
  };
  const spinner = <div>"Loading..."</div>;

  useEffect(() => {
    fetch(eventsApiEndpoint)
      .then(res => {
        return res.json();
      })
      .then((events: Event[]) => {
        setEvents(events);
      });
  }, []);

  if (!events.length) return spinner;

  return (
    <div>
      <MainComponent events={events} onSearch={onSearch} />
    </div>
  );
};
