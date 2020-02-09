import React from "react";
import ReactDOM from "react-dom";
import { Main } from "./containers/Main";

const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
