import React from "react";
import { storiesOf } from "@storybook/react";
import { ListHeader } from ".";

storiesOf("ListHeader", module).add("default", () => (
  <ListHeader date="2020/03/25(月)"></ListHeader>
));
