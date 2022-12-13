import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./assets/scss/style.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <App />
        <ToastContainer />
      </RecoilRoot>
    </Router>
  </React.StrictMode>
);
