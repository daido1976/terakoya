import React from "react";
import { storiesOf } from "@storybook/react";
import { SearchForm } from "../SearchForm";
import { props as searchFormProps } from "../SearchForm/index.stories";
import { Header } from ".";

export const props = {
  searchForm: <SearchForm {...searchFormProps}></SearchForm>
};

storiesOf("Header", module).add("default", () => <Header {...props}></Header>);
