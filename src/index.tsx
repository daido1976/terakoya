import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./containers/Layout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
