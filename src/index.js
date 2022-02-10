import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { NewsProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <NewsProvider>
      <App />
    </NewsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
