import React from "react";
import { hydrate } from "react-dom";
import App from "../shared/App";

hydrate(
  <App carOfTheWeek={window.__INITIAL_DATA__} />,
  window.document.getElementById("app")
);
