import React from "react";
import ReactDOM from "react-dom";
import { Data } from "./fetchData";

const App = () => {
  return (
    <div>
      <Data />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
