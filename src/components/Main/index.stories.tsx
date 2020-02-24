import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { events } from "../EventList/index.stories";
import { Main } from ".";

storiesOf("Main", module).add("default", () => (
  <Main onClick={action("onClick!")} events={events}></Main>
));
