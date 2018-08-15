import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";

// ReactDOM.render(<App />, document.getElementById("app"));

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.children[0].appendChild(document.createElement("div")),
  );
});
