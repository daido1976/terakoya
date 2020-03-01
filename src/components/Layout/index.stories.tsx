import React from "react";
import { storiesOf } from "@storybook/react";
import { Header } from "../Header";
import { Main } from "../Main";
import { props as headerProps } from "../Header/index.stories";
import {
  props as mainProps,
  loadingProps as mainLoadingProps
} from "../Main/index.stories";
import { Layout } from ".";

const props = {
  header: <Header {...headerProps} />,
  main: <Main {...mainProps} />
};

const loadingProps = {
  ...props,
  main: <Main {...mainLoadingProps} />
};

storiesOf("Layout", module)
  .add("default", () => <Layout {...props}></Layout>)
  .add("loading", () => <Layout {...loadingProps}></Layout>);
