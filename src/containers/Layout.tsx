import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Layout as LayoutComponent } from "../components/Layout";

export const Layout = () => {
  return (
    <div>
      <LayoutComponent header={<Header />} main={<Main />}></LayoutComponent>
    </div>
  );
};
