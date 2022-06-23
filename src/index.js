import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { worker } from "./mocks/worker";
import { CookiesProvider } from "react-cookie";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// if (process.env.NODE_ENV === "development") {
//   // worker.start();
// }

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
