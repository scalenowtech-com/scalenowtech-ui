import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Discover from "./Discover";
import Webdesigndevelpoment from "./Webdesigndevelpoment";
import Appdevelopment from "./Appdevelopment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from "./App";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/webdevelopment" element={<Webdesigndevelpoment />} />
        <Route path="/appdevelopment" element={<Appdevelopment />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
