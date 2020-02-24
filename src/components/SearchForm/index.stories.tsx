import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SearchForm } from ".";

storiesOf("SearchForm", module).add("default", () => (
  <SearchForm onSearch={action("onSearch!")}></SearchForm>
));
