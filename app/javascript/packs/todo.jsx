import React from "react";
import ReactDOM from "react-dom";
import App from "../components/App";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App />,
    document.body.children[0].appendChild(document.createElement("div")),
  );
});
