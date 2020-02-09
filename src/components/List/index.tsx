import React from "react";
// import styles from "./index.module.scss";
import { ListItem, Props as ListItemProps } from "../ListItem";

type Props = {
  data: ListItemProps[];
};

export const List: React.FC<Props> = ({ data }) => {
  return (
    <div>
      {data.map(d => (
        <ListItem
          title={d.title}
          address={d.address}
          startedAt={d.startedAt}
          eventUrl={d.eventUrl}
        ></ListItem>
      ))}
    </div>
  );
};
