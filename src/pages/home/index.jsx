import React from "react";

import HeroSection from "./HeroSection";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Testimonial from "./Testimonials";
import Social from "../../components/Socials";
import Blogs from "./Blogs";
import Gallery from "./Gallery";
import Logoslider from "./Logoslider";

const Mainpage = () => {
  return (
    <>
      <Social />
      <HeroSection />
      <Services />
      <Testimonial />
      <Logoslider />
      <About />
      <Blogs />
      <Gallery />
      <Contact />
    </>
  );
};

export default Mainpage;
