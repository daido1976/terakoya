import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Header } from ".";

export const props = {
  onSearch: action("onClick!")
};

storiesOf("Header", module).add("default", () => <Header {...props}></Header>);
