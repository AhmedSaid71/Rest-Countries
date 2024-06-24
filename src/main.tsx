import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n.ts";
import App from "./App";
import "./styles/index.css";
import "./styles/button.css";
import "./styles/input.css";
import "./styles/loader.css";
import "./styles/pagination.css";
import "./styles/select.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
