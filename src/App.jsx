import React from "react";
import Home from "./Home";
import About from "./About";
import Header from "./components/Header";
import Contact from "./Contact";
import Services from "./Services";
import Testimonial from "./components/Testimonial";
import Social from "./Social";
import Blogs from "./Blogs";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Logoslider from "./components/Logoslider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Mainpage = () => {
  return (
    <>
      <Social />
      <Header />
      <Home />
      <Services />
      <Testimonial />
      <Logoslider />
      <About />
      <Blogs />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
};

export default Mainpage;
