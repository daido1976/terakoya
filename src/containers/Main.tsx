import React, { useEffect, useState } from "react";
import { useRouter } from "../hooks/useRouter";
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
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSearch: OnSearch = data => {
    router.history.push({ search: `?date=${data.date}` });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`${eventsApiEndpoint}${router.location.search}`);
      const events: Event[] = await res.json();
      setEvents(events);
      setLoading(false);
    };
    fetchData();
  }, [router.location.search]);

  return (
    <div>
      <MainComponent events={events} onSearch={onSearch} loading={loading} />
    </div>
  );
};
