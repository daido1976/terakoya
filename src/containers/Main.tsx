import React, { useEffect, useState } from "react";

export const Main = () => {
  const [data, setData] = useState([{ event: { title: "" } }]);
  useEffect(() => {
    fetch("https://api.doorkeeper.jp/events", {
      headers: { Authorization: "Bearer MY_TOKEN" }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setData(data);
      });
  }, []);

  return <div>{data.map(d => d.event.title)}</div>;
};
