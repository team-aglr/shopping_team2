import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const rootElement = document.getElementById("app");
ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);