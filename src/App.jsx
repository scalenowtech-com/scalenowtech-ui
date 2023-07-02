import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Discover from "./pages/discover";
import Webdesign from "./pages/webdesign";
import Appdev from "./pages/appdev";

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
          <Route path="/web-dev" element={<Webdesign />} />
          <Route path="/app-dev" element={<Appdev />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <ScrollTop />
      </BrowserRouter>
    </>
  );
};

export default App;
