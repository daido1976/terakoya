import React, { useEffect, useState } from "react";
import { List } from "../components/List";
import firebase from "firebase";

type Event = {
  site: string;
  title: string;
  address: string;
  startedAt: string;
  eventUrl: string;
};

const firebaseConfig = {
  apiKey: "INSERT_VALUE",
  authDomain: "INSERT_VALUE",
  databaseURL: "INSERT_VALUE",
  projectId: "INSERT_VALUE"
};

firebase.initializeApp(firebaseConfig);

export const Main = () => {
  const [data, setData] = useState<Event[]>([]);
  useEffect(() => {
    const queryEvents = firebase.functions().httpsCallable("queryEvents");
    queryEvents().then(result => {
      // WIP
      console.log(result);
      setData([]);
    });
  }, []);

  if (!data.length) return <div>"Loading..."</div>;

  return (
    <div>
      <List data={data} />
    </div>
  );
};
