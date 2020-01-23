import React from "react";
import ReactDOM from "react-dom";
import { Data } from "./fetchData";

const App = () => {
  return (
    <div>
      <Data />
      <div>Hello World!</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
