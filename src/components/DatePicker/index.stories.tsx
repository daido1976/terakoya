import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { todayKebabCase } from "../../utils/time";
import { DatePicker } from ".";

const today = todayKebabCase();

storiesOf("DatePicker", module).add("default", () => (
  <DatePicker
    onChange={action("onChange!")}
    value={today}
    min={today}
  ></DatePicker>
));
