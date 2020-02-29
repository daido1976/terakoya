import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { events } from "../EventList/index.stories";
import { Main } from ".";

storiesOf("Main", module)
  .add("default", () => {
    return (
      <Main
        onSearch={action("onClick!")}
        events={events}
        loading={false}
      ></Main>
    );
  })
  .add("loading", () => {
    return (
      <Main onSearch={action("onClick!")} events={events} loading={true}></Main>
    );
  });
