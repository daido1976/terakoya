import React from "react";
import { storiesOf } from "@storybook/react";
import { EventList } from ".";

export const events = [
  {
    startedAt: "2020-03-07T00:50:00.000Z",
    title: "JavaScript もくもく会",
    address: "東京都文京区",
    eventUrl: "https://example.com/"
  },
  {
    startedAt: "2020-03-07T03:00:00.000Z",
    title: "Go もくもく会",
    address: "東京都杉並区",
    eventUrl: "https://example.com/"
  },
  {
    startedAt: "2020-03-15T13:00:00+09:00",
    title: "Ruby もくもく会",
    address: "東京都新宿区",
    eventUrl: "https://example.com/"
  }
];

storiesOf("EventList", module).add("default", () => (
  <EventList events={events}></EventList>
));
