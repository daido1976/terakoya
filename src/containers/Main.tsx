import React, { useEffect, useState } from "react";
import axios from "axios";

export const Main = () => {
  const [data, setData] = useState([{ event: { title: "" } }]);
  useEffect(() => {
    axios
      .get("https://api.doorkeeper.jp/events", {
        headers: { Authorization: "Bearer MY_TOKEN" }
      })
      .then(response => {
        setData(response.data);
      });
  }, []);

  return <div>{data.map(d => d.event.title)}</div>;
};
