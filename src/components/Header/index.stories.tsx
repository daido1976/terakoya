import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Header } from ".";
import { SearchForm } from "../SearchForm";

const props = {
  searchForm: <SearchForm onSearch={action("onClick!")}></SearchForm>
};

storiesOf("Header", module).add("default", () => <Header {...props}></Header>);
