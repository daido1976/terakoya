import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SearchForm } from ".";

export const props = {
  onSearch: action("onSearch!"),
  initialValues: { date: "2020-04-01" }
};

storiesOf("SearchForm", module).add("default", () => (
  <SearchForm {...props}></SearchForm>
));
