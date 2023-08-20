import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./components/Router/Router.tsx";
import "./css/App.css";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
