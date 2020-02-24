import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { todayKebabCase } from "../../utils/time";
import { DatePicker } from ".";

storiesOf("DatePicker", module).add("default", () => (
  <DatePicker
    onChange={action("onChange!")}
    min={todayKebabCase()}
  ></DatePicker>
));
