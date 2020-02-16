import React from "react";
import { storiesOf } from "@storybook/react";
import { EventList } from ".";

const events = [
  {
    startedAt: "13:00",
    title: "Ruby もくもく会",
    address: "東京都新宿区",
    eventUrl: "https://example.com/"
  },
  {
    startedAt: "14:00",
    title: "JavaScript もくもく会",
    address: "東京都文京区",
    eventUrl: "https://example.com/"
  }
];

storiesOf("EventList", module).add("default", () => (
  <EventList events={events}></EventList>
));
