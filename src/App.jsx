import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Discover from "./pages/discover";
import WebDev from "./pages/webdev";
import Appdev from "./pages/appdev";
import Page404 from "./pages/page404";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/web-dev" element={<WebDev />} />
          <Route path="/app-dev" element={<Appdev />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
        <ScrollTop />
      </BrowserRouter>
    </>
  );
};

export default App;
