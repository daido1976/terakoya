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

// TODO: custom hook に切り出す
export const Main = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [query, setQuery] = useState<string>(window.location.search);
  const [loading, setLoading] = useState(false);

  const onSearch: OnSearch = data => {
    window.location.search = `date=${data.date}`;
    setQuery(window.location.search);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`${eventsApiEndpoint}${query}`);
      const events: Event[] = await res.json();
      setEvents(events);
      setLoading(false);
    };
    fetchData();
  }, [query]);

  return (
    <div>
      <MainComponent events={events} onSearch={onSearch} loading={loading} />
    </div>
  );
};
