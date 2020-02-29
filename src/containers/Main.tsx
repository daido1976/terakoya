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
  const [query, setQuery] = useState<string>("");

  const onSearch: OnSearch = data => {
    setQuery(`date=${data.date}`);
  };
  const spinner = <div>Loading...</div>;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${eventsApiEndpoint}?${query}`);
      const events: Event[] = await res.json();
      setEvents(events);
    };
    fetchData();
  }, [query]);

  if (!events.length) return spinner;

  return (
    <div>
      <MainComponent events={events} onSearch={onSearch} loading={false} />
    </div>
  );
};
