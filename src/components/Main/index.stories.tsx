import React from "react";
import { storiesOf } from "@storybook/react";
import { events } from "../EventList/index.stories";
import { Main } from ".";

export const props = {
  events,
  loading: false
};

export const loadingProps = {
  events,
  loading: true
};

storiesOf("Main", module)
  .add("default", () => {
    return <Main {...props}></Main>;
  })
  .add("loading", () => {
    return <Main {...loadingProps}></Main>;
  });
