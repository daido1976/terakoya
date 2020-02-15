import React, { useEffect, useState } from "react";
import { List } from "../components/List";

export const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://terakoya.now.sh/api/events")
      .then(res => {
        return res.json();
      })
      .then(data => {
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
