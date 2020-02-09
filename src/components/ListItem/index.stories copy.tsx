import React from "react";
import { storiesOf } from "@storybook/react";
import { ListItem } from ".";

storiesOf("ListItem", module).add("default", () => (
  <ListItem
    startedAt="13:00"
    title="Ruby もくもく会"
    address="東京都新宿区"
    eventUrl="https://example.com/"
  ></ListItem>
));
