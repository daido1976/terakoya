import React, { useEffect, useState } from "react";
import axios from "axios";

export const Data = () => {
  const [data, setData] = useState([]);
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
